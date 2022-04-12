import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Chart from "./Chart";
import Execution_search from "./Execution_search";
import Execution_table from "./Execution_table";
import Execution_infos from "./Execution_infos";

class Execution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
          indicateurs: [],
          ministeres: [],
          service_executants: [],
     
          indicateur_executions: [],
          indicateur_n: [],
          service_executant_n: [],
          search_indicateur: 'IA1',
          indicateur_name: '',
          search_service_executants: [],
          search_ministeres: [],

          showSe: true,
          showMinistere: false,
       
          loading: true,
       
          data_inter_ministerielle: [],
          term: '',
          autoCompleteList: [],
        };

       
        this.handleChange = this.handleChange.bind(this);
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
      .then(response => this.setState({ indicateurs: response.data1, ministeres: response.data2, service_executants: response.data3, indicateur_n: response.data7, indicateur_name: response.indicateur_name, loading: false, data_inter_ministerielle: response.data_inter_ministerielle, autoCompleteList: response.autoCompleteList  }))
      .catch(() => this.props.history.push("/"));
    }



    handleChange(event) {
      

        const url = "/api/v1/indicateur_executions/search";
        const search_indicateur = event.target.value;
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
      .then(response => this.setState({ indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres,
       data_inter_ministerielle: response.data_inter_ministerielle}))
      .catch(error => console.log(error.message));
    }

    handleChangeStructure(event){
      if (event.target.value == 'Ministere'){
        this.setState({ showSe:  false, showMinistere: true,  search_service_executants: [], autoCompleteList: this.state.ministeres  }) 
      } 
      else if (event.target.value == 'Service') {
      this.setState({ showSe:  true, showMinistere: false, search_ministeres: [], autoCompleteList: this.state.service_executants }) 
      }
    }
    handleSubmit(event, value) {
        event.preventDefault();
        const search_service_executants = new Array() 
        const search_ministeres = new Array()

        if (this.state.showSe){                
          value.forEach(el => search_service_executants.push(el.id))     
        }
        else{                   
          value.forEach(el => search_ministeres.push(el.id))
        } 

        const url = "/api/v1/indicateur_executions/search";
        const search_indicateur = this.state.search_indicateur;

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
      .then(response => this.setState({ indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres,
       data_inter_ministerielle: response.data_inter_ministerielle}))
      .catch(error => console.log(error.message));
    }

    

    render() {
    return (

    <div>
        <Header /> 
        <div className="fr-container">    
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-lg-12">
            <h1 className="fr-my-5w">Suivi des indicateurs</h1>
          </div>
        </div>
        
            <Execution_search handleChange={this.handleChange} handleChangeStructure={this.handleChangeStructure}
            indicateurs={this.state.indicateurs}
            service_executants={this.state.service_executants}
            handleSubmit={this.handleSubmit} ministeres={this.state.ministeres} showSe={this.state.showSe} showMinistere={this.state.showMinistere} search_service_executants= {this.state.search_service_executants} search_ministeres={this.state.search_ministeres} autoCompleteList={this.state.autoCompleteList} term={this.state.term}/>
       

          { this.state.loading ? <div className="loader_box"><div className ="loader"></div></div> :
            <div className="fr-grid-row fr-grid-row--gutters fr-mt-3w">
                
                <div className="fr-col-12 fr-col-lg-8">
                <Chart indicateur_executions={this.state.indicateur_executions} indicateur_n={this.state.indicateur_n} service_executant_n={this.state.service_executant_n} search_indicateur={this.state.search_indicateur} indicateur_name= {this.state.indicateur_name} data_inter_ministerielle={this.state.data_inter_ministerielle}/>

                <Execution_table indicateur_executions={this.state.indicateur_executions}/>
                </div>
                <div className="fr-col-12 fr-col-lg-4">
                <Execution_infos indicateur_n={this.state.indicateur_n}/>
                </div>
            </div>
          }
            
       
        </div>
        <Footer />    
    </div>
    
    );
  }
}
export default Execution;
