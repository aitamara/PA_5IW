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
                                <div className="cardName">Daily Views</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">80</div>
                                <div className="cardName">Sales</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="cart-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">284</div>
                                <div className="cardName">Comments</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="chatbubbles-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">$7,842</div>
                                <div className="cardName">Earning</div>
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
                                <h2>Recent Orders</h2>
                                <a href="#" className="btn">View All</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Price</td>
                                        <td>Payment</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Star Refrigerator</td>
                                        <td>$1200</td>
                                        <td>Paid</td>
                                        <td><span className="status delivered">Delivered</span></td>
                                    </tr>
                                    <tr>
                                        <td>Window Coolers</td>
                                        <td>$110</td>
                                        <td>Due</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>Speakers</td>
                                        <td>$620</td>
                                        <td>Paid</td>
                                        <td><span className="status return">Return</span></td>
                                    </tr>
                                    <tr>
                                        <td>Hp Laptop</td>
                                        <td>$110</td>
                                        <td>Due</td>
                                        <td><span className="status inprogress">In Progress</span></td>
                                    </tr>
                                    <tr>
                                        <td>Apple Watch</td>
                                        <td>$1200</td>
                                        <td>Paid</td>
                                        <td><span className="status delivered">Delivered</span></td>
                                    </tr>
                                    <tr>
                                        <td>Wall Fan</td>
                                        <td>$110</td>
                                        <td>Paid</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>Adidas Shoes</td>
                                        <td>$620</td>
                                        <td>Paid</td>
                                        <td><span className="status return">Return</span></td>
                                    </tr>
                                    <tr>
                                        <td>Denim Shirts</td>
                                        <td>$110</td>
                                        <td>Due</td>
                                        <td><span className="status inprogress">In Progress</span></td>
                                    </tr>
                                    <tr>
                                        <td>Casual Shoes</td>
                                        <td>$575</td>
                                        <td>Paid</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>Wall Fan</td>
                                        <td>$110</td>
                                        <td>Paid</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>Denim Shirts</td>
                                        <td>$110</td>
                                        <td>Due</td>
                                        <td><span className="status inprogress">In Progress</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="recentCustomers">
                            <div className="cardHeader">
                                <h2>Recent Customers</h2>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx"><img src="assets/images/img1.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>David<br /><span>Italy</span></h4>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img2.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Muhammad<br /><span>India</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img3.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Amelia<br /><span>France</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img4.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Olivia<br /><span>USA</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img5.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Amit<br /><span>Japan</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img6.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Ashraf<br /><span>India</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img7.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Diana<br /><span>Malaysia</span></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="imgBx"><img src="assets/images/img8.jpg" /></div>
                                        </td>
                                        <td>
                                            <h4>Amit<br /><span>India</span></h4>
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