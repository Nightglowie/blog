import React from 'react';
import Article from './Article';

/*Composant représentant plusieurs articles*/
class Liste extends React.Component {

  //tri les articles en utilisant le props
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
    //tableau dans lequel on va ajouter des composants Liste
    let rows = [];

    //
    this.triArticles().forEach((article) =>
    {
      if(this.props.idArticles[0] == article.id){
        article.visibility = false;
      }
      else {
        article.visibility = true;
      }
    });

    //ajout de plusieurs composants Liste
    this.triArticles().forEach((article) => {
      if(article.visibility === true){
        rows.push(<Article key={article.id} article={article} afficherContenuArticle={this.handleAfficherContenuArticle}></Article>);
      }
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

export default Liste;
