import React from 'react'

/* bouton fonctionnel de partage sur Facebook
il faut juste ne plus être en localhost */
export default class Facebook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //location.href : c'est l'url en elle même, complète
              url : location.href
        }
    }


    render () {
        
        let url = "https://www.facebook.com/sharer/sharer.php?u=" + this.state.url;
        return (
            <a
            className="facebook-share-button"
            href={url}
            data-size="large"
          >
            <button>
                Partager sur Facebook
            </button>
          </a>
        )
    }
}