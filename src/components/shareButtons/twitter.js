import React from 'react'

/* bouton fonctionnel de tweet*/
export default class Twitter extends React.Component {


    render () {
        return (
            <a
            className="twitter-share-button"
            // autre possibilité : https://twitter.com/intent/tweet?via=Coddity
            href={`https://twitter.com/home?status=Si%20tu%20aimes%20la%20bi%C3%A8re%20et%20la%20technologie,%20j'ai%20un%20article%20%C3%A0%20te%20conseiller%20!`}
            data-size="large"
          >
            <button>
                Faire un Tweet
            </button>
          </a>
        )
    }
}