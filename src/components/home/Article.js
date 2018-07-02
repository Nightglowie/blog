import React from 'react';


class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article : {
          id : "",
          date : "",
          title : "",
          text : "",
          description : "",
          tag: []
      }
    }
  }

  componentWillReceiveProps(nextProps){
    //copie le props pour pouvoir modifier à volonté
    if(nextProps.currentArticle.id){
      this.setState({article : nextProps.currentArticle});
    }
  }

  render() {

    return (
      <div
      style={{
          display: "block",
          margin: "0 auto",
          maxWidth: 980,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%"
      }}
      >
        {this.state.article.description}
      </div>
      );
    }
  }

  export default Article;
