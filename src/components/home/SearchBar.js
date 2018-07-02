import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    render() {
        return(
            <input type="text" 
                value={this.state.search}
                onChange={this.updateSearch}
            />
        );
    }
}

export default SearchBar;