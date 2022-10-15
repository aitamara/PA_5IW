import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const items = [
            {
                icon: "home-outline",
                text: "Dashboard Pro",
                link: "/home/pro",
                style:{ },
                restricted: false
            },
            {
                icon: "home-outline",
                text: "Map",
                link: "/map",
                style:{ },
                restricted: false
            },
            {
                icon: "people-outline",
                text: "Matchs",
                link: "/matchs",
                style:{ },
                restricted: false
            },
            {
                icon: "chatbubble-outline",
                text: "Messages",
                link: "/messages",
                style:{ },
                restricted: false
            },
            {
                icon: "settings-outline",
                text: "Paramètres",
                link: "/parametres",
                style:{ },
                restricted: false
            },
            {
                icon: "help-outline",
                text: "FAQ",
                link: "/faq",
                style:{ },
                restricted: false
            },
            {
                icon: "log-out-outline",
                text: "Déconnexion",
                link: "/disconnect",
                style:{ },
                restricted: false
            }
        ];
        const element = (item, i) => {  // create elements (Links)
            // check if this is a current link on browser
            let active = "";
            console.log(item.link);
            if (item.link.match(this.props.hovered)) {
                active = "hovered";
            }

            return (
                <li key={i} className={active}>
                    <a href={item.link}>
                        <span className="icon">
                            <ion-icon name={item.icon} />
                        </span>
                        <span className="title" style={item.style}>
                        {item.text}
                        </span>
                    </a>
                </li>
            )
        };
        const peuplerMenu = () => {     // print elements
            return items.map((item, i) => {
                return element(item, i)
            })
        };
        return (<div className="navigation">
            <ul>
                <li>
                    <a href="/">
                        <span className="icon"/>
                        <span className="title" style={{ fontSize: "1.5em", fontWeight: 500 }}>Meet&amp;Move</span>
                    </a>
                </li>
                {peuplerMenu()}
            </ul>
        </div>)
    }
}
export default Menu;