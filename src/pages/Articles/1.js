import React from "react";

class un extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titre : "Insights from Code Conference 2018",
            description : "The annual Code Conference continues to be the best place to hear first-hand accounts and insights from leaders across tech and media and often with a surprise or two cross-over guest. The interviews are fun to watch (especially compared to participating!) and the post-interview lobby conversation can lead to some pretty good debates (like the one this year I had on anti-trust). What distinguished this year’s conference from past years through were apologies — CEO and executive alike seemed to use the forum to apologize for something. To reflect on this year’s conference I wanted to bring together in one place statements made in the interviews that I found most insightful, interesting, or thought-provoking a long with a brief reason why I thought that. It seems as though the corporate world is going through a phase of apologizing for various mistakes or transgressions (linear TV has been running commercials from Facebook, Uber, and Wells Fargo to name a few). I ended up tracking those and because of the frequency I made note of them below."
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
 
    export default un;