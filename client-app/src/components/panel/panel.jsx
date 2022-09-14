import React from 'react';
import '../../assets/css/panel.css'
import Menu from '../menu/menu';

class Panel extends React.Component {
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
                    <div className="cardBox">
                        <div className="card">
                            <div>
                                <div className="numbers">1,504</div>
                                <div className="cardName">Visites du profil</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">80</div>
                                <div className="cardName">Ventes</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="cart-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">284</div>
                                <div className="cardName">Avis</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="chatbubbles-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">€ 237</div>
                                <div className="cardName">Gain mensuel</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="cash-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className="graphBox">
                        <div className="box">
                            <canvas id="myChart"></canvas>
                        </div>
                        <div className="box">
                            <canvas id="earning"></canvas>
                        </div>
                    </div>

                    <div className="details">
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <h2>Situations à régler</h2>
                                <a href="#" className="btn">Voir la liste</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Nom</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Samy</td>
                                        <td><span className="status delivered">Débloqué(e)</span></td>
                                    </tr>
                                    <tr>
                                        <td>Pierre</td>
                                        <td><span className="status pending">Signalé(e)</span></td>
                                    </tr>
                                    <tr>
                                        <td>Marie</td>
                                        <td><span className="status return">Bloqué(e) avec signalement</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="recentCustomers">
                            <div className="cardHeader">
                                <h2>Membres de votre communauté</h2>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx"><img src="assets/images/img1.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>David<br /><span>20 ans</span></h4>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img2.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Muhammad<br /><span>26 ans</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img3.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Amelia<br /><span>18 ans</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img4.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Olivia<br /><span>45 ans</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img5.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Amit<br /><span>36 ans</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img6.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Ashraf<br /><span>19 ans</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img7.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Diana<br /><span>51 ans</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img8.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Amit<br /><span>22 ans</span></h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default Panel;