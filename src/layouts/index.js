import React from "react";
import PropTypes from "prop-types";
import Header from "../components/bandeau/Header.js"
import Menu from '../components/bandeau/Menu';
import "./index.css";
import "../styles/layout-overide.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*Composant qui possède le Menu, le Header et children représente le reste la page 
Dans la main page du site, children === Home.js
Dans l'url /Articles/1, children === 1.js
*/
  const TemplateWrapper = ({ children }) => (
  <div  >    
    <Menu />
      <div id="biggestDiv">
        <Header />
        {children()} 
      </div>
  </div>
    );

    TemplateWrapper.propTypes = {
      children: PropTypes.func
    };

    export default TemplateWrapper;