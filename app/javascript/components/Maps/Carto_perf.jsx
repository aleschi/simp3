import React from "react";
import { Link } from "react-router-dom";


import Mapcontainer from "./Mapcontainer";
import Mapsearch_perf from "./Mapsearch_perf";

class Carto_perf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          indicateurs: [],
          ministeres: [],
          service_executants: [],
          service_executant: [],
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
          maxDate: new Date(),
          autoCompleteList: [],

          showResults: false,
          indicateur_executions: [],
          performance: null,
          regions: [],
          region: "ALL",
          zoom: 5,
          lat: 48.52, 
          lng: 2.19,
          resetloc: true,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStructure = this.handleChangeStructure.bind(this);
        this.handleSubmitDate = this.handleSubmitDate.bind(this);
        this.onMarkerClick2 = this.onMarkerClick2.bind(this);
        this.onCloseInfo = this.onCloseInfo.bind(this); 
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
      .then(response => this.setState({ indicateurs: response.data1, ministeres: response.data2, service_executants: response.data3, service_executant: response.service_executant, blocs: response.data4, type_services: response.data5, indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, indicateur_name: response.indicateur_name, csp: response.csp, sfact: response.sfact, cgf: response.cgf, se_color: response.se_color, loading: false, autoCompleteList: response.autoCompleteList , startDate: new Date(response.date) , maxDate: new Date(response.date), regions: response.regions   }))
      .catch(() => this.props.history.push("/"));
    }
    
    
    handleChangeStructure(event){
      this.setState({ resetloc: false})
      if (event.target.value == 'Ministere'){
        this.setState({ showSe:  false, showMinistere: true, showBloc:  false, showType:  false, search_blocs: [], search_type_services:[], search_service_executants: [],autoCompleteList: this.state.ministeres,showResults: false }) 
      } 
      else if (event.target.value == 'Bloc'){
      this.setState({ showSe:  false, showMinistere: false, showBloc:  true, showType:  false, search_ministeres: [], search_type_services:[], search_service_executants: [],autoCompleteList: this.state.blocs,showResults: false}) 
      }
      else if (event.target.value == 'Type'){
      this.setState({ showSe:  false, showMinistere: false, showBloc:  false, showType:  true, search_ministeres: [], search_blocs:[], search_service_executants: [],autoCompleteList: this.state.type_services,showResults: false}) 
      }
      else if (event.target.value == 'Service') {
      this.setState({ showSe:  true, showMinistere: false, showBloc:  false, showType:  false, search_ministeres: [], search_type_services:[], search_blocs: [],autoCompleteList: this.state.service_executants,showResults: false}) 
      }
    }

    handleChange(event) {
      event.preventDefault();

      const search_service_executants = this.state.search_service_executants
      const search_ministeres = this.state.search_ministeres
      const search_blocs = this.state.search_blocs
      const search_type_services = this.state.search_type_services
      const url = "/api/v1/indicateur_executions/search_carto";
      
      if (event.target.name == "search_indicateur"){
        var search_indicateur = event.target.value
        var effectif = this.state.effectif
        var type_structure = this.state.type_structure
        var region = this.state.region
        this.setState({ resetloc: false})
      }
      else if (event.target.name == "effectif"){
        var effectif = event.target.value
        var search_indicateur = this.state.search_indicateur
        var type_structure = this.state.type_structure
        var region = this.state.region
        this.setState({ resetloc: false})
      }
      else if (event.target.name == "type_structure"){
        var type_structure = event.target.value
        var search_indicateur = this.state.search_indicateur
        var effectif = this.state.effectif
        var region = this.state.region
        this.setState({ resetloc: false})
      }
      else if (event.target.name == "regions"){
          var region = event.target.value
          var effectif = this.state.effectif
          var type_structure = this.state.type_structure
          var search_indicateur = this.state.search_indicateur
          this.setState({ resetloc: true,zoom: 5})
      }

      
      const se_color = this.state.se_color;
      const startDate = this.state.startDate;
      const service_executant = this.state.service_executant;

      const body = {
          search_indicateur, search_service_executants,search_ministeres,search_blocs,search_type_services,effectif,type_structure, se_color,startDate,service_executant,region
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
      .then(response => this.setState({ indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres, search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif,csp: response.csp, sfact: response.sfact, cgf: response.cgf, type_structure: response.type_structure, se_color: response.se_color, loading: false,showResults: false,region: response.region, zoom: response.zoom, lat: response.lat, lng: response.lng}))
      .catch(error => console.log(error.message));
    }

    handleSubmit(event, value) {
        event.preventDefault();
        const search_service_executants = new Array() 
        const search_ministeres = new Array()
        const search_blocs = new Array()
        const search_type_services = new Array()

        if (this.state.showSe){                
          value.forEach(el => search_service_executants.push(el.id))     
        }
        else if (this.state.showMinistere){                   
          value.forEach(el => search_ministeres.push(el.id))
        }
        else if (this.state.showBloc){                   
          value.forEach(el => search_blocs.push(el.id))
        }
        else if (this.state.showType){                   
          value.forEach(el => search_type_services.push(el.id))
        }

       
        const url = "/api/v1/indicateur_executions/search_carto";
        const search_indicateur = this.state.search_indicateur;

        const effectif = this.state.effectif;
        const type_structure = this.state.type_structure;
        const se_color = this.state.se_color;
        const startDate = this.state.startDate;
        const service_executant = this.state.service_executant;
        const region = this.state.region;

        const body = {
          search_indicateur, search_service_executants,search_ministeres,search_blocs,search_type_services,effectif,type_structure, se_color,startDate,service_executant, region
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
      .then(response => this.setState({ indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres, search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif,csp: response.csp, sfact: response.sfact, cgf: response.cgf, type_structure: response.type_structure, se_color: response.se_color, loading: false, showResults: false}))
      .catch(error => console.log(error.message));
    }

    handleSubmitDate(event) {
       
        this.setState({ startDate: event});
 
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
        const service_executant = this.state.service_executant;
        const region = this.state.region;

        const body = {
          search_indicateur, search_service_executants,search_ministeres,search_blocs,search_type_services,effectif,type_structure, se_color,startDate,service_executant, region
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
      .then(response => this.setState({ indicateur_executions: response.data6, indicateur_n: response.data7, service_executant_n: response.data8, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres, search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif,csp: response.csp, sfact: response.sfact, cgf: response.cgf, type_structure: response.type_structure, se_color: response.se_color, loading: false, service_executant: response.service_executant,indicateur_executions: response.indicateur_executions, performance: response.performance,resetloc: false}))
      .catch(error => console.log(error.message));
    }

    onMarkerClick2= (props, marker, e) => {    
   
        const url = "/api/v1/service_executants/search_marker?q=" + props.id;
        const token = document.querySelector('meta[name="csrf-token"]').content;
        const startDate = this.state.startDate;
        const body = {
          startDate
        };
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
      .then(response => this.setState({ service_executant: response.service_executant, showResults: true, indicateur_executions: response.indicateur_executions, performance: response.performance,resetloc: false}))
      .catch(error => console.log(error.message));
       
    };

    onCloseInfo(event) {
    this.setState({ showResults: false });
    }

  render() {

    return (
    <div>

        
        <div className="fr-container pr">    
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-lg-12">
            <h1 className="fr-my-5w">Cartographie par indicateur</h1>
          </div>
        </div>
  
          <Mapsearch_perf handleChange={this.handleChange} handleChangeStructure={this.handleChangeStructure}
          indicateurs={this.state.indicateurs}
          service_executants={this.state.service_executants}
          handleSubmit={this.handleSubmit} ministeres={this.state.ministeres} blocs={this.state.blocs} type_services={this.state.type_services}  showSe={this.state.showSe} showMinistere={this.state.showMinistere} showBloc={this.state.showBloc} showType={this.state.showType}autoCompleteList={this.state.autoCompleteList} regions={this.state.regions}/>
        
      
        
        { this.state.loading ? <div className="loader_box"><div className ="loader"></div></div> :  
          <Mapcontainer handleSubmitDate={this.handleSubmitDate} maxDate={this.state.maxDate} startDate={this.state.startDate} service_executant={this.state.service_executant} autoCompleteResults={this.state.service_executant_n} secolor={this.state.se_color} indicateur_n={this.state.indicateur_n}  csp={this.state.csp} cgf={this.state.cgf} sfact={this.state.sfact} showResults={this.state.showResults} performance={this.state.performance} indicateur_executions={this.state.indicateur_executions} onMarkerClick2={this.onMarkerClick2} onCloseInfo={this.onCloseInfo} zoom={this.state.zoom} lat={this.state.lat} lng={this.state.lng} resetloc={this.state.resetloc}/> 
   
        }
     
    
        </div>
        
          
    </div>
    
    );
  }
}
export default Carto_perf;
