import React from 'react'

/* bouton fonctionnel de partage sur Google plus
il faut juste de plus être en localhost */
export default class GooglePlus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
              url : location.href
        }
    }


    render () {
        let url = "https://plus.google.com/share?url=" + this.state.href;
        return (
            <a
            className="google-plus-share-button"
            href= {url}
            data-size="large"
          >
            <button>
                Partager sur GooglePlus
            </button>
          </a>
        )
    }
}