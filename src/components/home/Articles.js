import React from 'react';
import Liste from './Liste.js';

class Articles extends React.Component {

  triArticles = () => {
    let articlesAsArray = Object.keys(this.props.articles).map((pid) => this.props.articles[pid]);
    return articlesAsArray;
  }

  //récupère l'id envoyé par Liste et le passe à Home avec onChange
  handleAfficherContenuArticle = (articleId) => {
    this.props.onChange(articleId);
  }

  
  componentDidMount(){
    this.triArticles().forEach((article) => {
    })
  }


  render() {
    let rows = [];
    this.triArticles().forEach((article) => {
      rows.push(<Liste key={article.id} article={article} afficherContenuArticle={this.handleAfficherContenuArticle}></Liste>);
    });

    return (
    <div
      style={{
          margin: "0 auto",
          maxWidth: 980,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%"
      }}
      >
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
    );
  }
}

export default Articles;
