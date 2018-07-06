import React from "react";
import Helmet from "react-helmet";
import Home from "../components/home/Home.js";

/*contenu de la main page du blog Coddity
ce contenu va remplacer {children} dans ../layouts/index.js*/
class Blog extends React.Component {

  render() {

    return (
      <div>   
          <div>
            <div className="row"> 
              <div className = "container-fluid col-xs-push-3">
                {/*message au niveau du titre de l'onglet : */}
                <Helmet
                title="Coddity Blog"
                meta={[
                  { name: "description", content: "Sample" },
                  ]}
                >
                </Helmet>
              </div>
              <div className = "container-fluid col-xs-push-3"></div>
            </div>
            {/*contenu de la page :*/}
            <Home />
            <br/>
          </div>
      </div>
    )}
}

export default Blog;

