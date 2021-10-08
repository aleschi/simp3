import React from "react";


export class Mapsearch extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      term: '',
	      autoCompleteResults: [],
	    };

		this.getAutoCompleteResults = this.getAutoCompleteResults.bind(this);
	}

	getAutoCompleteResults(e){

	    event.preventDefault();
        const url = "/api/v1/service_executants/search?q=" + e.target.value;
        const autoCompleteResults = this.state.autoCompleteResults;
        const term = this.state.term

        const body = {
          autoCompleteResults,term
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
        .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ autoCompleteResults: response.autoCompleteResults, term: response.term }))
      .catch(error => console.log(error.message));
	}

	render() {
	let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
      return <div key={index}>
        {response.libelle}
      </div>
    });
    return (
    <div className="map_box">
        <div className="form">
        <input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getAutoCompleteResults} type='text' placeholder='Search...' />
        { autoCompleteList }
      	</div>     
    </div>
    );
    }
}

export default Mapsearch;