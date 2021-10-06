import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chart from "../components/Chart";
import Execution_search from "../components/Execution_search";
import Execution_table from "../components/Execution_table";
import Execution_infos from "../components/Execution_infos";

class Execution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
          indicateurs: [],
          ministeres: [],
          service_executants: [],
          blocs:[],
          type_services: [],
          indicateur_executions: [],
          indicateur_n: [],
          service_executant_n: [],
          search_indicateur: 'IA1',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    const url = "/api/v1/indicateur_executions/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ indicateurs: response.data1, ministeres: response.data2, service_executants: response.data3, blocs: response.data4, type_services: response.data5, indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8  }))
      .catch(() => this.props.history.push("/"));
    }

    handleChange(e) {
      this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/indicateur_executions/search";
        const search_indicateur = this.state.search_indicateur
        const body = {
          search_indicateur
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
      .then(response => this.setState({ indicateurs: response.data1, ministeres: response.data2, service_executants: response.data3, blocs: response.data4, type_services: response.data5, indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8 }))
      .catch(error => console.log(error.message));
    }


    render() {
  
    return (

    <div>
        <Header /> 
        <div className="indicateurs_component">

            <Execution_search handleChange={this.handleChange}
          indicateurs={this.state.indicateurs}
          service_executants={this.state.service_executants}
          handleSubmit={this.handleSubmit}/>
          
            <div className="indicateurs_chart_box">
                <Chart indicateur_executions={this.state.indicateur_executions} indicateur_n={this.state.indicateur_n} service_executant_n={this.state.service_executant_n} />
                <Execution_table indicateur_executions={this.state.indicateur_executions}/>
            </div>

            <Execution_infos indicateurs={this.state.indicateurs} indicateur_n={this.state.indicateur_n}/>
            
        </div>
        <Footer />    
    </div>
    
    );
  }
}
export default Execution;
