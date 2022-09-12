
import React from 'react';
import '../../assets/css/landing.css';
import '../../assets/css/footer.css';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    toggleClick(e) {
        var menuToggle = document.querySelector(".toggle");
        var navigation = document.querySelector(".navigation");
        menuToggle.classList.toggle("active");
        navigation.classList.toggle("active");
    }
    render() {
        return (<main>
            <section>
                <div className="circle"></div>
                <header>
                    <a className="logo" href="#">M & M</a>
                    <div className="toggle" onClick={this.toggleClick.bind(this)}></div>
                    <ul className="navigation">
                        <li><a href="/authentification">Connexion</a></li>
                    </ul>
                </header>
                <div className="content">
                    <div className="textBox">
                        <h2>Meet<span className="highlight">&</span>Move</h2>
                        <p>
                            Tu souhaites participer à un évènement et tu n'aimes pas y aller seul ? Trouves avec Meet&Move le partenaire
                            idéal.
                        </p>
                        <a href="/authentification">Commencer</a>
                    </div>
                    <div className="imgBox">
                        <div className="swiper-container">
                            <div className="swiper-wrapper"></div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <a href="https://www.facebook.com/"><img src="assets/images/reseaux-sociaux/facebook.png" /></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/"><img src="assets/images/reseaux-sociaux/twitter.png" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><img src="assets/images/reseaux-sociaux/instagram.png" /></a>
                    </li>
                </ul>
            </section>
            <footer>
                <div className="container">
                    <div className="sec aboutus">
                        <h2>À propos</h2>
                        <p>
                            Meet&Move est une plateforme de rencontre faite pour rencontrer de nouvelles personnes qui fréquentent les
                            mêmes lieux que vous.
                        </p>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Accès rapides</h2>
                        <ul>
                            <li><a href="auth-register.html">Connexion / Inscription</a></li>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Mentions légales & RGPD</a></li>
                            <li><a href="#">Conditions générales d'utilisation</a></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contactez-nous</h2>
                        <ul className="info">
                            <li>
                                <span><i className="fa fa-map-marker"></i></span>
                                <p>
                                    Meet&Move<br />
                                    2 Rue Edouard Poisson<br />
                                    93300, Aubervilliers<br />
                                    France
                                </p>
                            </li>
                            <li>
                                <span><i className="fa fa-phone"></i></span>
                                <p>
                                    <a href="tel:+33148562378">+33 1 48 56 23 78</a><br /><a href="tel:+33148562378">+33 1 48 56 23 78</a>
                                </p>
                            </li>
                            <li>
                                <span><i className="fa fa-envelope"></i></span>
                                <p><a href="mailto:knowmore@email.com">knowmore@email.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrightText">
                <p>Copyright © 2022 Meet&Move. All Rights Reserved.</p>
            </div>
        </main>)
    }
}
export default Index;