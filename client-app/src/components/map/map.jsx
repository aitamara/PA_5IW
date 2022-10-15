import React from 'react';
import Menu from '../menu/menu';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '../../assets/css/map-popup.css';

class Map extends React.Component {
    crd = { latitude: 48.8925883, longitude: 2.4501151 };
    list = document.querySelectorAll(".navigation li");
    constructor(props) {
        super(props)
    }
    success(pos) {
        Map.crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${Map.crd.latitude}`);
        console.log(`Longitude: ${Map.crd.longitude}`);
        console.log(`More or less ${Map.crd.accuracy} meters.`);
    } error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    activeLink(e) {
        this.list.forEach((item) => item.classList.remove("hovered"));
        this.classList.add("hovered");
    }
    componentDidMount() {
        mapboxgl.accessToken =
            "pk.eyJ1Ijoid2lsbGlhOTMiLCJhIjoiY2ttMjB6dGZyMDR1YjJwbnJvb2R6dGE4OSJ9.ac1lVidwwJljLOuN-Y7CLA";

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        navigator.geolocation.getCurrentPosition(this.success, this.error, options);
        // MenuToggle
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");

        toggle.addEventListener("click", function () {
            navigation.classList.toggle("active");
            main.classList.toggle("active");
        });

        // add hovered class in selected list item
        this.list.forEach((item) => item.addEventListener("mouseover", this.activeLink.bind(this)));
        // Map
        const map = new mapboxgl.Map({
            container: "map", // container ID
            style: "mapbox://styles/mapbox/streets-v11", // style URL
            center: [this.crd.longitude, this.crd.latitude], // starting position [lng, lat]
            zoom: 13, // starting zoom
            projection: "globe", // display the map as a 3D globe
        });
        // Add fullscreen map
        map.addControl(new mapboxgl.FullscreenControl());

        // Add the control to the map.
        map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            })
        );
        map.on("style.load", () => {
            map.setFog({}); // Set the default atmosphere style
        });

        map.on("load", () => {
            //console.log(window.location.href.split('&')[1].split('=')[1]);
            //let token = window.location.href.split('&')[0].split('=')[1];
            //let id_client = window.location.href.split('&')[0].split('=')[1];
            /*
            fetch("http://127.0.0.1:81/pro/getAllPro", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer "+token,
                },
                method: "GET",
                withCredentials: true,
                credentials: "same-origin",
            })
            .then((response) => {
                response.json().then(function (json) {
                    console.log(json);
                });
            })
            .catch((error) => {
            });
            */
            map.addSource("points", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            properties: {
                                'description':
                                    `<div class="map-popup">
                                        <h2 class="h2-popup">Nom d'établissement</h2>
                                        <span class="span-popup"
                                        >132 rue de j'ai pas d'idée<br />
                                        75000 Paris</span
                                        >
                                        <div class="action-popup">
                                        <a class="action-button-voir-popup" href="community/pro/1">Voir</a>
                                        </div>
                                    </div>`,
                                'icon': 'theatre-15'
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [this.crd.longitude, this.crd.latitude],
                            },
                        }
                    ],
                },
            });
            // Add a circle layer
            map.addLayer({
                id: "circle",
                type: "circle",
                source: "points",
                paint: {
                    "circle-color": "#4264fb",
                    "circle-radius": 8,
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#ffffff",
                },
            });

            // Center the map on the coordinates of any clicked circle from the 'circle' layer.
            map.on("click", "circle", (e) => {
                map.flyTo({
                    center: e.features[0].geometry.coordinates,
                });
                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
            });

            // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
            map.on("mouseenter", "circle", () => {
                map.getCanvas().style.cursor = "pointer";
            });

            // Change it back to a pointer when it leaves.
            map.on("mouseleave", "circle", () => {
                map.getCanvas().style.cursor = "";
            });
        });

        // ResizeObserver
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                console.log(entry);
            }
            console.log("Size changed");
            map.resize();
        });
        resizeObserver.observe(document.querySelector('#mapGLDIV'));
    }
    render() {
        return (
            <div className="container">
                <Menu hovered={"map"}/>
                <div className="main">
                    <div className="topbar">
                        <div className="toggle">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Rechercher" />
                                <ion-icon name="search-outline"></ion-icon>
                            </label>
                        </div>
                        <div className="user">
                            <img src="assets/images/user.jpg" />
                        </div>
                    </div>
                    <div id="mapGLDIV" className="map" style={{ display: "flex" }}>
                        <div id="map" />
                    </div>
                </div>
            </div>)
    }
}
export default Map;