import React from 'react'

/* bouton fonctionnel de partage sur Linkedin
il faut juste ne plus être en localhost */
export default class Linkedin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url : location.href
        }
    }

    render () {
        let url = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.state.url + "&title=Sort%20une%20bi%C3%A8re%20et%20lis%20cet%20article%20&summary=&source=";
        return (
            <a
            className="linkedin-share-button"
            href={url}
            data-size="large"
          >
            <button>
                Partager sur Linkedin
            </button>
          </a>
        )
    }
}