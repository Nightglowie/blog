import React from 'react';
import Fuse from "fuse.js";


const data = [
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
];


//barre de recherche inactive
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.state = {
            searchVal: "",
            data: data
        };
    }

    fuse() {
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
        return res;
    }

   
    updateSearch(event) {
        this.setState({searchVal: event.target.value})
        this.fuse();
    }

    render() {
        return(
            <input type="text" 
                value={this.state.searchVal}
                onChange={this.updateSearch}
            />
        );
    }
}

export default SearchBar;