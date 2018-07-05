import React from 'react';
//import Fuse from "fuse.js";

/*const data = [
  {
    name: "Data",
    typechild: [
      {
        level: 2,
        name: "Insights from Code Conference 2018",
        id : 1
      },
      {
        level: 3,
        name: "Learning to Trust Machines That Learn",
        id : 2
      }
    ]
  },
  {
    name: "Framework",
    typechild: [
      {
        level: 2,
        name: "Using Gatsby for a web app",
        id : 3
      }
    ]
  },
  {
    name: "API",
    typechild: [
      {
        level: 2,
        name: "A Case for GraphQL in Enterprise",
        id : 4
      }
    ]
  }
];*/


//barre de recherche inactive
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.search = this.search.bind(this);
        this.transmettreIds = this.transmettreIds.bind(this);
        this.state = {
            searchVal: "",
            //data: data,
            monTableau:[["node",[1,2]],["données",[2,4,3]]],
            //id des articles qu'on veut afficher
            currentIds: [],
            estVide: true
        };
    }

    /*fuse() {
        let options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
              "name",
              "typechild.id"
          ]
          };
        let fuse = new Fuse(this.state.data, options);
        let res = fuse.search(this.state.searchVal);
        console.log(res);
        return res;
    }*/

    transmettreIds() {
      if(this.state.currentIds){
        this.props.rechercheIds(this.state.currentIds);
      }
    }

    componentDidUpdate() {
      let i;
      let j;
      let motTableau = "";
      let motInput = "";
      for(i=0; i<this.state.monTableau.length;i++){
        for(j=0; j<this.state.monTableau[i][0].length;j++){
          if(this.state.monTableau[i][0].charAt(j)===this.state.searchVal.charAt(j)){
            motTableau += this.state.monTableau[i][0].charAt(j);
            motInput += this.state.searchVal.charAt(j);
            console.log("motTableau :" + motTableau);
            console.log("motInput :" + motInput);
            if(this.state.estVide===true){
              let idArray = this.state.monTableau[i][1].slice();
              console.log("idArray" + idArray)
              this.setState({currentIds: idArray})
              this.setState({estVide: false})
              console.log("currentIds"+this.state.currentIds);
              break;
            }
          }
          else {
            break;
          }
        }
      }
    }
   
    handleChange(event) {
        this.setState({searchVal: event.target.value})
        //this.fuse();
        if(this.state.currentIds){
          this.props.rechercheIds(this.state.currentIds);
        }
    }


    render() {
      console.log("currentIds"+this.state.currentIds)
        return(
            <input type="text" 
                value={this.state.searchVal}
                onChange={this.handleChange}
            />
        );
    }
}

export default SearchBar;