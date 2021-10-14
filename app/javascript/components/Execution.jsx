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
          indicateur_name: '',
          search_service_executants: [],
          search_ministeres: [],
          showSe: true,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStructure = this.handleChangeStructure.bind(this);
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
      .then(response => this.setState({ indicateurs: response.data1, ministeres: response.data2, service_executants: response.data3, blocs: response.data4, type_services: response.data5, indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, indicateur_name: response.indicateur_name  }))
      .catch(() => this.props.history.push("/"));
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    handleChange2(event){
        let search_service_executants = this.state.search_service_executants        
        if(event.target.checked) {
            search_service_executants.push(event.target.value)
        } else {
            search_service_executants.splice(event.target.value,1)
        }
        this.setState({ search_service_executants:  search_service_executants}) 
    }
    handleChange3(event){
        let search_ministeres = this.state.search_ministeres        
        if(event.target.checked) {
            search_ministeres.push(event.target.value)
        } else {
            search_ministeres.splice(event.target.value,1)
        }
        this.setState({ search_ministeres: search_ministeres}) 
    }
    handleChangeStructure(event){
      if (event.target.value == 'Ministere'){
        this.setState({ showSe:  false}) 
      } else {
      this.setState({ showSe:  true}) 
      }
    }
    handleSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/indicateur_executions/search";
        const search_indicateur = this.state.search_indicateur;
        const search_service_executants = this.state.search_service_executants;
        const search_ministeres = this.state.search_ministeres;
        const body = {
          search_indicateur, search_service_executants,search_ministeres
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
      .then(response => this.setState({ indicateurs: response.data1, ministeres: response.data2, service_executants: response.data3, blocs: response.data4, type_services: response.data5, indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres }))
      .catch(error => console.log(error.message));
    }

    render() {

    return (

    <div>
        <Header /> 
        <div className="indicateurs_component">

            <Execution_search handleChange={this.handleChange} handleChange2={this.handleChange2} handleChange3={this.handleChange3} handleChangeStructure={this.handleChangeStructure}
          indicateurs={this.state.indicateurs}
          service_executants={this.state.service_executants}
          handleSubmit={this.handleSubmit} ministeres={this.state.ministeres} showSe={this.state.showSe}/>
          
            <div className="indicateurs_chart_box">
                <Chart indicateur_executions={this.state.indicateur_executions} indicateur_n={this.state.indicateur_n} service_executant_n={this.state.service_executant_n} search_indicateur={this.state.search_indicateur} indicateur_name= {this.state.indicateur_name}/>

                <Execution_table indicateur_executions={this.state.indicateur_executions}/>
            </div>

            <Execution_infos indicateur_n={this.state.indicateur_n}/>
            
        </div>
        <Footer />    
    </div>
    
    );
  }
}
export default Execution;
