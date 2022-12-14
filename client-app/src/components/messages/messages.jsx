import React from 'react';
import '../../assets/css/chat.css';
import Menu from '../menu/menu';

class Messages extends React.Component {
    constructor(props) { super(props) }

    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function () {
            fetch("http://127.0.0.1:81/client/getClientById", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsaWVudDFAbWFpbC5jb20iLCJpYXQiOjE2NjI4NjU3ODgsImV4cCI6MTY2Mjk1MjE4OH0.W9lhZgusWx6uWgr-KOv0syJQ8dXh7sqS0LDZjUaXmVA",
                },
                method: "POST",
                body: JSON.stringify({ id_client: 19 }),
                withCredentials: true,
                credentials: "same-origin",
            })
                .then((response) => {
                    response.json().then(function (json) {/*
                client = json.data[0].data[0];
                age = new Date(Date.now() - new Date(client.birthdate).getTime()).getUTCFullYear() - 1970;

                $('#nameAge').text(client.firstname+", "+age+" ans");
                $('#ville').text(client.city);*/
                    });
                })
                .catch((error) => {
                    /*log.catch(error);*/
                });
        });
    }

    render() {
        return (
            <div className="container">
                <Menu hovered={"messages"} />
                <div class="main">
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
                    <div className="chat-container">
                        <div className="leftSide">
                            <div className="search_chat">
                                <div>
                                    <input type="text" placeholder="Search or start new chat" />
                                    <ion-icon name="search-outline" />
                                </div>
                            </div>
                            <div className="chatlist">
                                <div className="block active">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img1.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Muhammad Shayan</h4>
                                            <p className="time">10:56</p>
                                        </div>
                                        <div className="message_p">
                                            <p>How to make Whatsapp clone using html &amp; css only</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block unread">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img2.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Ashraf</h4>
                                            <p className="time">09:25</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Hi, i found you on justdial</p>
                                            <b>1</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="block unread">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img3.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Olivia</h4>
                                            <p className="time">Yesterday</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Send for processing</p>
                                            <b>2</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img4.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Amelia</h4>
                                            <p className="time">Yesterday</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Helooo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img5.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Rahul Kumar</h4>
                                            <p className="time">Yesterday</p>
                                        </div>
                                        <div className="message_p">
                                            <p>oh okay, hope get better soon</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img6.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Joseph</h4>
                                            <p className="time">08/10/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>nice to talk with you</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img7.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Diana</h4>
                                            <p className="time">08/10/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>please wait...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img8.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Kabir</h4>
                                            <p className="time">07/10/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Happy Birthday</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img9.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Alina Smith</h4>
                                            <p className="time">05/10/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Thank You for the Help</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img2.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Ashraf</h4>
                                            <p className="time">02/10/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Hi, i found you on justdial</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img3.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Olivia</h4>
                                            <p className="time">28/09/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Send for processing</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img4.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Amelia</h4>
                                            <p className="time">28/09/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Helooo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img5.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Rahul Kumar</h4>
                                            <p className="time">23/09/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>oh okay, hope get better soon</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img6.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Joseph</h4>
                                            <p className="time">20/09/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>nice to talk with you</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img7.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Diana</h4>
                                            <p className="time">12/09/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>please wait...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img8.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Kabir</h4>
                                            <p className="time">06/09/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Happy Birthday</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img src="assets/images/chat/img9.jpg" className="cover" />
                                    </div>
                                    <div className="details">
                                        <div className="listHead">
                                            <h4>Alina Smith</h4>
                                            <p className="time">02/09/2021</p>
                                        </div>
                                        <div className="message_p">
                                            <p>Thank You for the Help</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightSide">
                            <div className="chat-header">
                                <div className="imgText">
                                    <div className="userimg">
                                        <img src="assets/images/chat/img1.jpg" className="cover" />
                                    </div>
                                    <h4>
                                        Muhammad Shayan
                                        <br />
                                        <span>online</span>
                                    </h4>
                                </div>
                                <ul className="nav_icons">
                                    <li>
                                        <ion-icon name="search-outline" />
                                    </li>
                                    <li>
                                        <ion-icon name="ellipsis-vertical" />
                                    </li>
                                </ul>
                            </div>
                            <div className="chatBox">
                                <div className="message my_message">
                                    <p>
                                        Hi
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message frnd_message">
                                    <p>
                                        Hello
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message my_message">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
                                        expedita in ut quasi laboriosam fugiat adipisci maxime laudantium quia
                                        modi magnam, eaque, alias officiis inventore hic cupiditate veritatis
                                        eveniet tenetur?
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message frnd_message">
                                    <p>
                                        Commodi expedita in ut quasi laboriosam fugiat adipisci maxime
                                        laudantium quia
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message my_message">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
                                        expedita in ut quasi laboriosam fugiat adipisci
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message frnd_message">
                                    <p>
                                        laudantium quia modi magnam, eaque, alias officiis inventore hic
                                        cupiditate veritatis eveniet tenetur?
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message my_message">
                                    <p>
                                        cupiditate veritatis eveniet tenetur?
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message frnd_message">
                                    <p>
                                        Commodi expedita in ut quasi laboriosam fugiat adipisci maxime
                                        laudantium quia modi magnam, eaque, alias officiis inventore hic
                                        cupiditate veritatis eveniet tenetur?
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message my_message">
                                    <p>
                                        ok
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message frnd_message">
                                    <p>
                                        Lorem, fugiat adipisci maxime laudantium?
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message my_message">
                                    <p>
                                        Lorem, ipsum dolor sit
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message frnd_message">
                                    <p>
                                        thanks
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message my_message">
                                    <p>
                                        veritatis eveniet tenetur
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                                <div className="message frnd_message">
                                    <p>
                                        How to make Whatsapp clone using html &amp; css only?
                                        <br />
                                        <span>12:15</span>
                                    </p>
                                </div>
                            </div>
                            <div className="chatBox_input">
                                <ion-icon name="happy-outline" />
                                <ion-icon name="attach-outline" />
                                <input type="text" placeholder="Type a message" />
                                <ion-icon name="mic" role="img" class="md hydrated" aria-label="mic"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default Messages;