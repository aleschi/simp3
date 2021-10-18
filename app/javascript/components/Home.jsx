import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mapcontainer from "../components/Mapcontainer";

import Mapsearch from "../components/Mapsearch";
import Chart from "../components/Chart";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          term: '',
          autoCompleteResults: [],
          serviceexecutant: [],
          csp: '',
          sfact: '',
          cgf: '',
          comptable: '',

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
      .then(response => this.setState({ autoCompleteResults: response.autoCompleteResults, serviceexecutant: response.service_executant, csp: response.csp, sfact: response.sfact, cgf: response.cgf, comptable: response.comptable}))
      .catch(() => this.props.history.push("/"));
    }

    getAutoCompleteResults(e){

        event.preventDefault();
        const url = "/api/v1/service_executants/search?q=" + e.target.value;
        const autoCompleteResults = this.state.autoCompleteResults;
        const term = this.state.term;

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
      .then(response => this.setState({ autoCompleteResults: response.autoCompleteResults, term: response.term,csp: response.csp, sfact: response.sfact, cgf: response.cgf, comptable: response.comptable }))
      .catch(error => console.log(error.message));
    }

  render() {

    return (
    <div>
        <Header /> 
        <div className="map_component">
            <Mapsearch autoCompleteResults={this.state.autoCompleteResults} getAutoCompleteResults={this.getAutoCompleteResults} term={this.state.term} csp={this.state.csp} cgf={this.state.cgf} sfact={this.state.sfact} comptable={this.state.comptable}/>
            
            <Mapcontainer service_executant={this.state.serviceexecutant} autoCompleteResults={this.state.autoCompleteResults} /> 
   
         
        </div>
  
        <Footer />    
    </div>
    
    );
  }
}
export default Home;
