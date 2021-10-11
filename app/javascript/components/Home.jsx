import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mapcontainer from "../components/Mapcontainer";
import Mapresult from "../components/Mapresult";
import Mapsearch from "../components/Mapsearch";
import Chart from "../components/Chart";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          term: '',
          autoCompleteResults: [],
        };

        this.getAutoCompleteResults = this.getAutoCompleteResults.bind(this);
    }

    componentDidMount() {
    const url = "/api/v1/service_executants/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ autoCompleteResults: response.autoCompleteResults }))
      .catch(() => this.props.history.push("/"));
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
    return (
    <div>
        <Header /> 
        <div className="map_component">
            <Mapsearch autoCompleteResults={this.state.autoCompleteResults} getAutoCompleteResults={this.getAutoCompleteResults} term={this.state.term}/>
            
            <Mapcontainer autoCompleteResults={this.state.autoCompleteResults} /> 
            
            <Mapresult />
        </div>
  
        <Footer />    
    </div>
    
    );
  }
}
export default Home;
