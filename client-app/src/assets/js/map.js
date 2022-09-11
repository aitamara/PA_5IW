
// Map
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [crd.longitude, crd.latitude], // starting position [lng, lat]
    zoom: 11, // starting zoom
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
    // Add a GeoJSON source with 3 points.
    map.addSource("points", {
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    'properties': {
                        'description':
                            `<div class="map-popup">
                            <h2 class="h2-popup">Nom établissement</h2>
                            <span class="span-popup"
                              >132 rue de j'ai pas d'idée<br />
                              75000 Paris</span
                            >
                            <div class="action-popup">
                              <a class="action-button-voir-popup" href="recherche-match.html">Voir</a>
                            </div>
                          </div>`,
                        'icon': 'theatre-15'
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [crd.longitude, crd.latitude],
                    },
                },
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
resizeObserver.observe(mapGLDIV);