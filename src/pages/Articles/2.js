import React from "react";

class deux extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titre : "Learning to Trust Machines That Learn",
            description : "Imagine lying on a hospital bed. Doctors with grave expressions hover. One leans down to tell you that you are terribly sick and says they recommend a risky procedure as your best hope. You ask them to explain what’s going on. They cannot. Your trust in the doctors ebbs away. Replace the doctors with a computer program and you more or less have the state of artificial intelligence (AI) today. Technology increasingly insinuates itself into our lives, affecting the decisions we make and the decisions others make for us. More and more, we give computers responsibility and autonomy to decide on life-changing events. If your hospital bed happens to be in the Memorial Sloan Kettering Cancer Center, for example, your oncologist might have asked IBM’s Watson for advice. Watson is a computer system that can answer questions posed in everyday language, most famously using its skills to win the TV quiz show Jeopardy!in 2011. The problem is, Watson cannot tell you why it decided you have cancer. Machines are currently incapable of explaining their decisions. And as J.K. Rowling wrote in Harry Potter and the Chamber of Secrets,', tag: 'machines'"
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
 
    export default deux;