import React from "react";

class trois extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titre : "Using Gatsby for a web app",
            description : "Alright, so static websites are awesome because they’re fast. Gatsby is also awesome because it provides SSR for React apps and a whole bunch of other features. But all of this works for a website where the content does not change often. What about websites with dynamic content? An e-commerce website, where you have a paginated product listing page or a lot of pages with product content? It would be awesome to get the same speed and performance for a dynamic web app! Turns out, that since Gatsby is basically built on React, this is very easily doable. Let’s take a look at how this can be done and if it makes sense to do so."
        }
    }

    render() {
        let titre = this.state.titre;
        let description = this.state.description;
        return (
            <div className="container-fluid col-md-push-3" width="100%">
                <div className="row">
                    <div
                        className="presentation_article" 
                        >   
                        <div className="textArticle">
                            {titre}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <br/>
                    {description}
                </div>
            </div>
            );
        }
    }
 
    export default trois;