import React from "react";

//fait défiler des images d'actualités dans le background
class Actu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            //tableau d'images
            picArray : ["url(friends-background.jpeg)", "url(beHappy-background.jpeg)", "url(beer-background.jpg)"],
            //image à afficher
            currentPic: 0
        }        
    }

    //change l'image des actualités en fonction de leurs positions sans le tableau
    nextPic = () => { 
        this.setState((prevState, nextState) => {
            return {
              currentPic: (prevState.currentPic === prevState.picArray.length - 1) ? 0 : prevState.currentPic +1
          };
      });

    }

    //lance nextPic() toutes les 5s
    componentDidMount() {
        this.nextPic();
        this.intervalID = setInterval(() => this.nextPic(), 5000);
    }
    
    //arrête le timer
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
  

  render() {
    return(
        <div>
            <div
            className="body" 
            id="background" 
            style={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 500,
                width: "100%",
                marginTop: 5,
                borderBottom: "2px solid #e6e6e6",
                backgroundImage: this.state.picArray[this.state.currentPic]
            }}
            >
            </div>
            <div
            style={{
                borderBottom: "2px solid #e6e6e6",
                height: 35
            }}
            >
            </div>
        </div>
        );
    }
}

export default Actu;