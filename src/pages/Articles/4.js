import React from "react";

class quatre extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titre : "A Case for GraphQL in Enterprise",
            description : "In a nutshell, here’s how GraphQL contributes to API Lifecycle Management within enterprises: GraphQL supports dynamic queries and is type-safe. This reduces the number of APIs that need to be developed and allows enforcing compile-time checks on the data being requested by consumers. It was designed to be able to seamlessly front multiple sources of data, reducing the number of complex, cross-functional API dev iterations. It is backed by an active community that is constantly improving the tooling and simplifying GraphQL adoption. You can find more from us about how GraphQL helps enterprises over at Dzone. If you work for an organisation that is considering using GraphQL, we would love to talk to you!"
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
 
    export default quatre;