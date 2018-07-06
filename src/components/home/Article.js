import React from 'react';
import Link from "gatsby-link";

/*Composant représentant un article
C'est un sous-composant du composant Articles
*/

class Article extends React.Component {

  //handleClick est appelé lors du click sur le premier boutton
  handleClick = () => {
    this.props.afficherContenuArticle(this.props.article.id);
  }

  render() {
    let id = this.props.article.id;
    return (
      <tr>
        <td>{this.props.article.title}</td>
        <td>{this.props.article.text}</td>
        <td><button onClick={this.handleClick}>Afficher le contenu dans la page principale</button></td>
        <td><Link to={`/Articles/${id}`}><button>Afficher le contenu dans une autre page</button></Link></td>
      </tr>
      );
    }
  }

  export default Article;