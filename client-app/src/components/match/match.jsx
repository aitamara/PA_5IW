import React from 'react';
import '../../assets/css/rechercher-matchs.css'
import Menu from '../menu/menu';

class Match extends React.Component {
    constructor(props) { super(props) }
    render() {
        return (
            <div className="container">
                <Menu />
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
                    <div style={{ display: "flex" }}>
                        <div className="rechercher-match-container">
                            <div className="box-rechercher-match">
                            <div className="rechercher-content">
                                <img src="assets/images/matchs/matchs-photo.jpg" />
                                <h2 className="match-h">
                                Mathieu
                                <br />
                                <span>25 ans, Paris</span>
                                </h2>
                                <a className="match-a" href="#">
                                Like
                                </a>
                                <a className="match-a" href="#">
                                Next
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default Match;