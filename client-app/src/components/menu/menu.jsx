import React from 'react';

class Menu extends React.Component {
    constructor(props) { super(props) }
    render() {
        return (<div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon" />
                        <span className="title" style={{ fontSize: "1.5em", fontWeight: 500 }}>
                            Meet&amp;Move
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="icon">
                            <ion-icon name="home-outline" />
                        </span>
                        <span className="title">Map</span>
                    </a>
                </li>
                <li className="hovered">
                    <a href="matchs.html">
                        <span className="icon">
                            <ion-icon name="people-outline" />
                        </span>
                        <span className="title">Matchs</span>
                    </a>
                </li>
                <li>
                    <a href="messages.html">
                        <span className="icon">
                            <ion-icon name="chatbubble-outline" />
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="help-outline" />
                        </span>
                        <span className="title">Faq</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline" />
                        </span>
                        <span className="title">Paramètres</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="log-out-outline" />
                        </span>
                        <span className="title">Déconnexion</span>
                    </a>
                </li>
            </ul>
        </div>)
    }
}
export default Menu;