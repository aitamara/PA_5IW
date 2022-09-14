import React from 'react';
import '../../assets/css/profile-client.css'
import Menu from '../menu/menu';

class ProfileClient extends React.Component {
    constructor(props) { super(props) }
    componentDidMount() {
        
    }
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
                </div>
                <div className="profil-client-container">
                    <div className="profil-client-main">
                        {/* banner */}
                        <section className="banner" id="banner">
                        <div className="content">
                            <div className="imgBx">
                            <img src="assets/images/clients/img2.jpg" />
                            </div>
                            <h3 id="nameAge" />
                            <p>I'm a Creative Front End Web Developer.</p>
                            <a className="btn" id="joinCommu" href="#">
                            Faire partie de la communauté
                            </a>
                            <a className="btn" id="swipesTime" href="recherche-match.html">
                            SwipesTime !
                            </a>
                            <a className="btn" id="quiteCommu" href="#">
                            Quitter la communauté
                            </a>
                            {/*
                                <ul class="socialMedia">
                                <li>
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul> !*/}
                        </div>
                        </section>
                        {/* About */}
                        <section className="about adjust" id="about">
                        <div className="title">
                            <h2>About Me</h2>
                        </div>
                        <div className="content">
                            <div className="textBox">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                                eligendi ratione quisquam. Ut officia perferendis nesciunt
                                laudantium nisi voluptatibus repudiandae praesentium architecto.
                                Recusandae odio iste ipsum consequatur aliquid obcaecati, quam
                                necessitatibus quos laboriosam saepe, ullam dolores veritatis sunt
                                error possimus omnis enim asperiores ad nemo placeat. Est enim
                                doloribus exercitationem ex quam? Animi incidunt quam suscipit fuga
                                labore et consequuntur reiciendis autem voluptate! In sed veritatis
                                error.
                                <br />
                                <br />
                                voluptatem non quibusdam laboriosam voluptates nisi nostrum,
                                laudantium voluptate eveniet nobis recusandae. Cumque dicta tempore
                                accusantium suscipit, natus inventore necessitatibus officiis illo!
                                Ipsum alias totam quos repellat soluta dolor accusantium nobis
                                repudiandae quas inventore, non molestias voluptas asperiores maxime
                                cum quaerat laboriosam quidem natus laborum perferendis voluptatum
                                consectetur amet! Nihil, optio.
                            </p>
                            </div>
                            <div className="imgBx">
                            <img src="assets/images/clients/bg1.jpg" />
                            </div>
                        </div>
                        </section>
                        {/* Services */}
                        <section className="services adjust" id="services">
                        <div className="title">
                            <h2>Our Services</h2>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, et
                            numquam.
                            </p>
                        </div>
                        <div className="content">
                            <div className="serviceBox">
                            <img src="assets/images/clients/icon1.png" />
                            <h2>Web Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                nostrum hic, et natus omnis atque, libero consectetur labore.
                            </p>
                            </div>
                            <div className="serviceBox">
                            <img src="assets/images/clients/icon2.png" />
                            <h2>Web Development</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                nostrum hic, et natus omnis atque, libero consectetur labore.
                            </p>
                            </div>
                            <div className="serviceBox">
                            <img src="assets/images/clients/icon3.png" />
                            <h2>Android Apps</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                nostrum hic, et natus omnis atque, libero consectetur labore.
                            </p>
                            </div>
                            <div className="serviceBox">
                            <img src="assets/images/clients/icon4.png" />
                            <h2>Photography</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                nostrum hic, et natus omnis atque, libero consectetur labore.
                            </p>
                            </div>
                            <div className="serviceBox">
                            <img src="assets/images/clients/icon5.png" />
                            <h2>Content Writing</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                nostrum hic, et natus omnis atque, libero consectetur labore.
                            </p>
                            </div>
                            <div className="serviceBox">
                            <img src="assets/images/clients/icon6.png" />
                            <h2>Video Editing</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                nostrum hic, et natus omnis atque, libero consectetur labore.
                            </p>
                            </div>
                        </div>
                        </section>
                        {/* Projects */}
                        <section className="project adjust" id="project">
                        <div className="title">
                            <h2>Recent Work</h2>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, et
                            numquam.
                            </p>
                        </div>
                        <div className="content">
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 01</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 02</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 03</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 04</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 05</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 06</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 07</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 08</h3>
                            </div>
                            </div>
                            <div className="workBx">
                            <div className="imgBx">
                                <img src="assets/images/clients/img1.jpg" />
                            </div>
                            <div className="textBx">
                                <h3>Project 09</h3>
                            </div>
                            </div>
                        </div>
                        </section>
                        {/* testimonials */}
                        <section className="tstimonials adjust" id="tstimonials">
                        <div className="title">
                            <h2>Testimonials</h2>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, et
                            numquam.
                            </p>
                        </div>
                        <div className="content">
                            <div className="testimonialsBox">
                            <div className="imgBx">
                                <img src="assets/images/clients/user1.jpg" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
                                exercitationem itaque iure facere, nemo architecto, eligendi sint
                                dignissimos neque repudiandae? Doloremque eum blanditiis sequi
                                repellendus autem mollitia fugit culpa?
                            </p>
                            <h4>
                                Someone Famouse
                                <br />
                                <span>Website Designer</span>
                            </h4>
                            </div>
                            <div className="testimonialsBox">
                            <div className="imgBx">
                                <img src="assets/images/clients/user1.jpg" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
                                exercitationem itaque iure facere, nemo architecto, eligendi sint
                                dignissimos neque repudiandae? Doloremque eum blanditiis sequi
                                repellendus autem mollitia fugit culpa?
                            </p>
                            <h4>
                                Someone Famouse
                                <br />
                                <span>Website Designer</span>
                            </h4>
                            </div>
                            <div className="testimonialsBox">
                            <div className="imgBx">
                                <img src="assets/images/clients/user1.jpg" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
                                exercitationem itaque iure facere, nemo architecto, eligendi sint
                                dignissimos neque repudiandae? Doloremque eum blanditiis sequi
                                repellendus autem mollitia fugit culpa?
                            </p>
                            <h4>
                                Someone Famouse
                                <br />
                                <span>Website Designer</span>
                            </h4>
                            </div>
                            <div className="testimonialsBox">
                            <div className="imgBx">
                                <img src="assets/images/clients/user1.jpg" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
                                exercitationem itaque iure facere, nemo architecto, eligendi sint
                                dignissimos neque repudiandae? Doloremque eum blanditiis sequi
                                repellendus autem mollitia fugit culpa?
                            </p>
                            <h4>
                                Someone Famouse
                                <br />
                                <span>Website Designer</span>
                            </h4>
                            </div>
                        </div>
                        </section>
                        {/* Contact */}
                        <section className="contact adjust" id="contact">
                        <div className="title">
                            <h2>Let's Say Hi</h2>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, et
                            numquam.
                            </p>
                        </div>
                        <div className="contactForm">
                            <div className="row">
                            <input type="text" name="" placeholder="First Name" />
                            <input type="text" name="" placeholder="Last Name" />
                            </div>
                            <div className="row">
                            <input type="text" name="" placeholder="Email Address" />
                            <input type="text" name="" placeholder="Mobile No." />
                            </div>
                            <div className="row2">
                            <textarea placeholder="Message" defaultValue={""} />
                            </div>
                            <div className="row2">
                            <input type="submit" defaultValue="Send" />
                            </div>
                        </div>
                        </section>
                        {/* copyright Text */}
                        <div className="copyright">
                        <p>Copyright © 2021 Online Tutorials. All Right Reserved.</p>
                        </div>
                    </div>
                </div>

            </div>)
    }
}
export default ProfileClient;