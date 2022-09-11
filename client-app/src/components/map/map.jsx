import React from 'react';
import '../../assets/css/map-popup.css';
import Menu from '../menu/menu';

class Map extends React.Component {
    constructor(props) { super(props) }
    render() {
        return (
            <div className="container">
                <Menu />
                <div className="main">
                    <div id="mapGLDIV" className="map" style={{ display: "flex" }}>
                        <div id="map" />
                    </div>
                </div>
            </div>)
    }
}
export default Map;