
import React from 'react';
import '../../assets/css/auth-register.css'
class Authentication extends React.Component {
    constructor(props) { super(props) }
    toggleForm(e) {
        var container = document.querySelector(".container");
        var section = document.querySelector("section");
        container.classList.toggle("active");
        section.classList.toggle("active");
    }

    componentDidMount() {
        let professionnel = document.querySelector("#professionnel");
        professionnel.addEventListener("change", function (e) {
            document.querySelectorAll("form .common").forEach((el) => {
                if (!professionnel.checked) {
                    if (el.classList.contains("professionnel")) {
                        console.log(el)
                        el.setAttribute("disabled", true)
                        el.setAttribute("hidden", true);
                    } else {
                        el.removeAttribute("disabled")
                        el.removeAttribute("hidden");
                    }
                } else {
                    if (el.classList.contains("client")) {
                        console.log(el)
                        el.setAttribute("disabled", true)
                        el.setAttribute("hidden", true);
                    } else {
                        el.removeAttribute("disabled")
                        el.removeAttribute("hidden");
                    }
                }
            });
        });
        let btnConnexion = document.querySelector("#btnConnexion");
        btnConnexion.addEventListener("click", (e) => {
            var email = document.getElementById("emailConnexion").value;
            var passwrd = document.getElementById("passwordConnexion").value;
            console.log(email);
            fetch("http://127.0.0.1:81/auth/connect", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: passwrd }),
                withCredentials: true,
                credentials: "same-origin",
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Something went wrong');
                }).then((response) => {
                    console.log(response.data[1][0].role);
                    if (response.data[1][0].role == 'client'){
                        window.location.href=`/map?${new URLSearchParams(response.data[0]).toString()}&${new URLSearchParams(response.data[1][0]).toString()}`;
                    }
                    else if (response.data[1][0].role == 'pro'){
                        window.location.href=`/panel?${new URLSearchParams(response.data[0]).toString()}&${new URLSearchParams(response.data[1][0]).toString()}`;
                    }
                    
                })
                .catch((error) => {
                    //log.catch(error);
                });
        });
    }

    render() {
        return (<main>
            <section>
                <div className="container">
                    <div className="user-auth signinBx">
                        <div className="imgBx"><img src="assets/images/auth-register/img1.jpg" /></div>
                        <div className="formBx">
                            <div>
                                <h2>Connexion</h2>
                                <input type="text" id="emailConnexion" name="" placeholder="Email" />
                                <input type="password" id="passwordConnexion" name="" placeholder="Password" />
                                <input type="submit" id="btnConnexion" name="validerConnexion" value="Valider" />
                                <p className="signup">Pas encore de compte ? <a href="#" onClick={this.toggleForm.bind(this)}>Inscrivez-vous.</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="user-auth signupBx">
                        <div className="formBx">
                            <div>
                                <h2>Créer un compte</h2>
                                <input className="common" type="mail" name="email" placeholder="Email" />
                                <input className="common" type="password" name="motdepasse" placeholder="Mot de passe" />
                                <label className="switch">
                                    <input type="checkbox" id="professionnel" className="professionnel" name="professionnel" />
                                    <span className="slider"></span>
                                    <p className="signup">Professionnel</p>
                                </label>
                                <input
                                    className="common professionnel"
                                    type="text"
                                    name="proname"
                                    placeholder="Nom Établissement"
                                    hidden
                                    disabled
                                />
                                <input className="common" type="text" name="firstname" placeholder="Prenom" />
                                <input className="common" type="text" name="lastname" placeholder="Nom" />
                                <input className="common" type="phone" name="phone" placeholder="Numéro de téléphone" />
                                <input className="common" type="text" name="address" placeholder="Adresse" />
                                <input className="common" type="text" name="cite" placeholder="Ville" />
                                <input className="common" type="zipcode" name="zipcode" placeholder="CP" />
                                <input className="common" type="hidden" name="coord_lat" placeholder="latitude" />
                                <input className="common" type="hidden" name="coord_long" placeholder="longitude" />
                                <div className="">
                                    <select className="common client" name="gender">
                                        <option value="">Votre genre</option>
                                        <option value="MALE">Homme</option>
                                        <option value="FEMALE">Femme</option>
                                    </select>
                                    <select className="common client" name="here_for">
                                        <option value="">Ici pour</option>
                                        <option value="FRIENDSHIP">Amitié</option>
                                        <option value="LOVE">Amour</option>
                                        <option value="ALL">Les deux</option>
                                    </select>
                                    <select className="common client" name="interested_by">
                                        <option value="">Intéréssé(e) par</option>
                                        <option value="MALE">Homme</option>
                                        <option value="FEMALE">Femme</option>
                                        <option value="ALL">Autre</option>
                                    </select>
                                </div>
                                <input className="common client" type="date" name="birthdate" placeholder="Date de naissance" />
                                <input type="submit" name="" value="Valider" />
                                <p className="signup">Vous avez deja un compte ? <a href="#" onClick={this.toggleForm.bind(this)}>Connectez-vous.</a></p>
                            </div>
                        </div>
                        <div className="imgBx"><img src="assets/images/auth-register/img2.jpg" /></div>
                    </div>
                </div>
            </section>
        </main >)
    }
}
export default Authentication;