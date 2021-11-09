import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mapcontainer from "../components/Mapcontainer";

import Mapsearch_perf from "../components/Mapsearch_perf";

class Carto_perf extends React.Component {
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
          search_blocs: [],
          search_type_services: [],
          showSe: true,
          showMinistere: false,
          showBloc: false,
          showType: false,
          effectif: '200',
          type_structure: 'ALL',
          csp: '',
          sfact: '',
          cgf: '',
          se_color: {},
          loading: true,
          startDate: new Date(),

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStructure = this.handleChangeStructure.bind(this);
        this.handleSubmitDate = this.handleSubmitDate.bind(this);
    }

    componentDidMount() {
    const url = "/api/v1/indicateur_executions/carto_perf";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ indicateurs: response.data1, ministeres: response.data2, service_executants: response.data3, blocs: response.data4, type_services: response.data5, indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, indicateur_name: response.indicateur_name, csp: response.csp, sfact: response.sfact, cgf: response.cgf, se_color: response.se_color, loading: false  }))
      .catch(() => this.props.history.push("/"));
    }
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    handleChange2(event){
        let search_service_executants = this.state.search_service_executants        
        if(event.target.checked) {
            search_service_executants.push(parseInt(event.target.value));
        } else {
            search_service_executants.splice(search_service_executants.indexOf(parseInt(event.target.value)),1);
        }
        this.setState({ search_service_executants:  search_service_executants}) 
    }
    handleChange3(event){
        let search_ministeres = this.state.search_ministeres        
        if(event.target.checked) {
            search_ministeres.push(parseInt(event.target.value));
        } else {
            search_ministeres.splice(search_ministeres.indexOf(parseInt(event.target.value)),1);
        }
        this.setState({ search_ministeres: search_ministeres}) 
    }
    handleChange4(event){
        let search_blocs = this.state.search_blocs        
        if(event.target.checked) {
            search_blocs.push(parseInt(event.target.value));
        } else {
            search_blocs.splice(search_blocs.indexOf(parseInt(event.target.value)),1);
        }
        this.setState({ search_blocs: search_blocs}) 
    }
    handleChange5(event){
        let search_type_services = this.state.search_type_services        
        if(event.target.checked) {
            search_type_services.push(parseInt(event.target.value));
        } else {
            search_type_services.splice(search_type_services.indexOf(parseInt(event.target.value)),1);
        }
        this.setState({ search_type_services: search_type_services}) 
    }
    handleChangeStructure(event){
      if (event.target.value == 'Ministere'){
        this.setState({ showSe:  false, showMinistere: true, showBloc:  false, showType:  false, search_blocs: [], search_type_services:[], search_service_executants: [] }) 
      } 
      else if (event.target.value == 'Bloc'){
      this.setState({ showSe:  false, showMinistere: false, showBloc:  true, showType:  false, search_ministeres: [], search_type_services:[], search_service_executants: []}) 
      }
      else if (event.target.value == 'Type'){
      this.setState({ showSe:  false, showMinistere: false, showBloc:  false, showType:  true, search_ministeres: [], search_blocs:[], search_service_executants: []}) 
      }
      else if (event.target.value == 'Service') {
      this.setState({ showSe:  true, showMinistere: false, showBloc:  false, showType:  false, search_ministeres: [], search_type_services:[], search_blocs: []}) 
      }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true });
        const url = "/api/v1/indicateur_executions/search_carto";
        const search_indicateur = this.state.search_indicateur;
        const search_service_executants = this.state.search_service_executants;
        const search_ministeres = this.state.search_ministeres;
        const search_blocs = this.state.search_blocs;
        const search_type_services = this.state.search_type_services;
        const effectif = this.state.effectif;
        const type_structure = this.state.type_structure;
        const se_color = this.state.se_color;
        const startDate = this.state.startDate;

        const body = {
          search_indicateur, search_service_executants,search_ministeres,search_blocs,search_type_services,effectif,type_structure, se_color,startDate
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
      .then(response => this.setState({ indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres, search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif,csp: response.csp, sfact: response.sfact, cgf: response.cgf, type_structure: response.type_structure, se_color: response.se_color, loading: false}))
      .catch(error => console.log(error.message));
    }

    handleSubmitDate(event) {
       
        this.setState({ startDate: event, loading: true });
 
        const url = "/api/v1/indicateur_executions/search_carto";
        const search_indicateur = this.state.search_indicateur;
        const search_service_executants = this.state.search_service_executants;
        const search_ministeres = this.state.search_ministeres;
        const search_blocs = this.state.search_blocs;
        const search_type_services = this.state.search_type_services;
        const effectif = this.state.effectif;
        const type_structure = this.state.type_structure;
        const se_color = this.state.se_color;
        const startDate = event;

        const body = {
          search_indicateur, search_service_executants,search_ministeres,search_blocs,search_type_services,effectif,type_structure, se_color,startDate
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
      .then(response => this.setState({ indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres, search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif,csp: response.csp, sfact: response.sfact, cgf: response.cgf, type_structure: response.type_structure, se_color: response.se_color, loading: false}))
      .catch(error => console.log(error.message));
    }



  render() {

    return (
    <div>
        <Header />
        
        <div className="map_component">
          <Mapsearch_perf handleChange={this.handleChange} handleChange2={this.handleChange2} handleChange3={this.handleChange3} handleChange4={this.handleChange4} handleChange5={this.handleChange5}  handleChangeStructure={this.handleChangeStructure}
          indicateurs={this.state.indicateurs}
          service_executants={this.state.service_executants}
          handleSubmit={this.handleSubmit} ministeres={this.state.ministeres} blocs={this.state.blocs} type_services={this.state.type_services}  showSe={this.state.showSe} showMinistere={this.state.showMinistere} showBloc={this.state.showBloc} showType={this.state.showType} csp={this.state.csp} cgf={this.state.cgf} sfact={this.state.sfact}/>
        
        { this.state.loading ? <div className="loader_box"><div className ="loader"></div></div> :  
          <Mapcontainer handleSubmitDate={this.handleSubmitDate} startDate={this.state.startDate} service_executant={this.state.service_executant_n} autoCompleteResults={this.state.service_executant_n} secolor={this.state.se_color} indicateur_n={this.state.indicateur_n} /> 
   
        }
        </div>
        
        <Footer />    
    </div>
    
    );
  }
}
export default Carto_perf;
