import React from "react";
import Actu from './Actu';
import SearchBar from './SearchBar';
import Articles from "./Articles.js";
import Article from "./Article.js";

// liste des articles en dur qu'on stocke ensuite dans this.state.articles
// ils ont : id, title, text, description, tag
let ARTICLES = {
    '1': {id: 1, date: '2018-06-15T17:12:33.962Z', title: 'Insights from Code Conference 2018', text: 'The annual Code Conference continues to be the best place to hear first-hand accounts', 
    description : 'The annual Code Conference continues to be the best place to hear first-hand accounts and insights from leaders across tech and media and often with a surprise or two cross-over guest. The interviews are fun to watch (especially compared to participating!) and the post-interview lobby conversation can lead to some pretty good debates (like the one this year I had on anti-trust). What distinguished this year’s conference from past years through were apologies — CEO and executive alike seemed to use the forum to apologize for something. To reflect on this year’s conference I wanted to bring together in one place statements made in the interviews that I found most insightful, interesting, or thought-provoking a long with a brief reason why I thought that. It seems as though the corporate world is going through a phase of apologizing for various mistakes or transgressions (linear TV has been running commercials from Facebook, Uber, and Wells Fargo to name a few). I ended up tracking those and because of the frequency I made note of them below.', tag: 'code'},
    '2': {id: 2, date: '2018-06-05T17:12:33.962Z', title: 'Learning to Trust Machines That Learn',  text: 'Some AI researchers are attempting to address this by creating programs that can essentially keep an eye on their own decision-making processes and describe how they figured things out (known as “explainable AI”)', 
    description : 'Imagine lying on a hospital bed. Doctors with grave expressions hover. One leans down to tell you that you are terribly sick and says they recommend a risky procedure as your best hope. You ask them to explain what’s going on. They cannot. Your trust in the doctors ebbs away. Replace the doctors with a computer program and you more or less have the state of artificial intelligence (AI) today. Technology increasingly insinuates itself into our lives, affecting the decisions we make and the decisions others make for us. More and more, we give computers responsibility and autonomy to decide on life-changing events. If your hospital bed happens to be in the Memorial Sloan Kettering Cancer Center, for example, your oncologist might have asked IBM’s Watson for advice. Watson is a computer system that can answer questions posed in everyday language, most famously using its skills to win the TV quiz show Jeopardy!in 2011. The problem is, Watson cannot tell you why it decided you have cancer. Machines are currently incapable of explaining their decisions. And as J.K. Rowling wrote in Harry Potter and the Chamber of Secrets,', tag: 'machines'},
    '3': {id: 3, date: '2018-06-01T17:12:33.962Z', title: 'Using Gatsby for a web app', text: 'Usually when you visit a website which usually has some dynamic content, the browser sends a request for that page to a server. The server receives this request, fetches the data for the page from a database, it then loads a UI template. The template and the data are then combined and finally a response for that page is sent. This is how a dynamic site works.', 
    description : 'Alright, so static websites are awesome because they’re fast. Gatsby is also awesome because it provides SSR for React apps and a whole bunch of other features. But all of this works for a website where the content does not change often. What about websites with dynamic content? An e-commerce website, where you have a paginated product listing page or a lot of pages with product content? It would be awesome to get the same speed and performance for a dynamic web app! Turns out, that since Gatsby is basically built on React, this is very easily doable. Let’s take a look at how this can be done and if it makes sense to do so.', tag: 'gatsby'},
    '4': {id: 4, date: '2018-05-25T17:12:33.962Z', title: 'A Case for GraphQL in Enterprise', text: 'Originally released by Facebook in 2015, GraphQL has evolved into a battle-tested technology that has the potential to solve key challenges in the enterprise IT space, specifically in accelerating API/app development cycles. The list of GraphQL users is ever increasing, and include companies such as Github, Twitter and Intuit.', 
    description : 'In a nutshell, here’s how GraphQL contributes to API Lifecycle Management within enterprises: GraphQL supports dynamic queries and is type-safe. This reduces the number of APIs that need to be developed and allows enforcing compile-time checks on the data being requested by consumers. It was designed to be able to seamlessly front multiple sources of data, reducing the number of complex, cross-functional API dev iterations. It is backed by an active community that is constantly improving the tooling and simplifying GraphQL adoption. You can find more from us about how GraphQL helps enterprises over at Dzone. If you work for an organisation that is considering using GraphQL, we would love to talk to you!', tag: 'graphQL'},
};

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles : ARTICLES,
            currentArticle : {}
        }
    }
 
    handleAfficherContenuArticle = (articleId) => {
        this.setState({
            currentArticle : this.state.articles[articleId]
        });
    }
 
 
    render() {
 
        return (
            <div> 
                <Actu />
                <SearchBar />
                <Articles
                    articles = {this.state.articles}
                    onChange = {this.handleAfficherContenuArticle}
                />
                <Article currentArticle={this.state.currentArticle}/>
            </div>
            );
        }
    }
 
    export default Home;