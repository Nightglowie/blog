import React from "react";
import Signin from './Signin.js';

/*Composant représentant le menu burger en haut à droite*/
class Menu extends React.Component{
    
    //change l'apparence du menu en fonction du click
    changerMenu = () => {
        //ouvre et ferme le menuBurger
        document.getElementById("menuBurger").classList.toggle("isOpen");
        //décale en fonction de l'ouverture et de la fermeture du menuBurger le reste de la page
        document.getElementById("biggestDiv").classList.toggle("isOpen"); 
        //change la couleur des barres en fonction du fond
        document.getElementsByClassName("barre")[0].classList.toggle("white");
        document.getElementsByClassName("barre")[1].classList.toggle("white");
        document.getElementsByClassName("barre")[2].classList.toggle("white");
    }

    //fonction appelée quand le menu est cliqué
    handleClick = (e) => {
        e.preventDefault();
        this.changerMenu();
    }

    render() {
        return(
            <div>
                <div id="btn-menuBurger" onClick={this.handleClick}>
                    <div className="barre"></div>
                    <div className="barre"></div>
                    <div className="barre"></div>
                </div>
                <div id="menuBurger">
                    <Signin />
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Gallerie</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            );
        }
    }

    export default Menu;