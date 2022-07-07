import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Mapcontainer from "./Mapcontainer";
import Mapsearch from "./Mapsearch";


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          autoCompleteResults: [],
          autoCompleteList: [],
          service_executant: [],
          service_executants: [],
          ministeres: [],
          blocs: [],
          type_services: [],
          csp: '',
          sfact: '',
          cgf: '',
          showSe: true,
          showMinistere: false,
          showBloc: false,
          showType: false,
          search_service_executants: [],
          search_ministeres: [],
          search_blocs: [],
          search_type_services: [],
          effectif: '200',
          type_structure: "ALL",
          se_color: {},
          indicateur_n: [], // restera vide pour indiquer que ca représente tous les ind
          loading: true,
          startDate: new Date(),
          maxDate: new Date(),

          showResults: false,
          indicateur_executions: [],
          performance: null,
          regions: [],
          region: "ALL",
          zoom: 5,
          lat: 48.52, 
          lng: 2.19,
          resetloc: false,

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStructure = this.handleChangeStructure.bind(this);
        this.handleSubmitDate = this.handleSubmitDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onMarkerClick2 = this.onMarkerClick2.bind(this);
        this.onCloseInfo = this.onCloseInfo.bind(this); 
      
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
      .then(response => this.setState({ autoCompleteResults: response.autoCompleteResults, autoCompleteList: response.autoCompleteResults, service_executant: response.service_executant, csp: response.csp, sfact: response.sfact, cgf: response.cgf, service_executants: response.service_executants, ministeres: response.ministeres, blocs: response.blocs, type_services: response.type_services, se_color: response.se_color, loading: false, startDate: new Date(response.date), maxDate: new Date(response.date), regions: response.regions }))
      .catch(() => this.props.history.push("/"));
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
        
        
        const url = "/api/v1/service_executants/search";

        const effectif = this.state.effectif;
        const type_structure = this.state.type_structure;
        const startDate = this.state.startDate;
        const region = this.state.region;

        const body = {
          search_service_executants,search_ministeres,search_blocs,search_type_services,effectif,type_structure,startDate, region
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
      .then(response => this.setState({autoCompleteResults: response.autoCompleteResults, csp: response.csp, sfact: response.sfact, cgf: response.cgf,search_service_executants: response.search_service_executants, search_ministeres: response.search_ministeres,search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif, type_structure: response.type_structure, loading: false, se_color: response.se_color,showResults: false}))
      .catch(error => console.log(error.message));
    }

    handleChange(e){
        e.preventDefault();
        const url = "/api/v1/service_executants/search";
        const search_service_executants = this.state.search_service_executants
        const search_ministeres = this.state.search_ministeres
        const search_blocs = this.state.search_blocs
        const search_type_services = this.state.search_type_services
        const startDate = this.state.startDate
        
        if (event.target.name == "effectif"){
          var effectif = event.target.value
          var type_structure = this.state.type_structure
          var region = this.state.region
          this.setState({ resetloc: false})
        }
        else if (event.target.name == "type_structure"){
          var type_structure = event.target.value
          var effectif = this.state.effectif
          var region = this.state.region
          this.setState({ resetloc: false})
        }
        else if (event.target.name == "regions"){
          var region = event.target.value
          var effectif = this.state.effectif
          var type_structure = this.state.type_structure
          this.setState({ resetloc: true, zoom: 5})
        }
    
        const body = {
          search_service_executants,search_ministeres,search_blocs,search_type_services, effectif, type_structure,startDate, region
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
      .then(response => this.setState({ autoCompleteResults: response.autoCompleteResults,csp: response.csp, sfact: response.sfact, cgf: response.cgf,search_service_executants: response.search_service_executants, search_ministeres: response.search_ministeres,search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif, type_structure: response.type_structure, se_color: response.se_color,showResults: false, region: response.region, zoom: response.zoom, lat: response.lat, lng: response.lng}))
      .catch(error => console.log(error.message));
    }


    handleChangeStructure(event){
      this.setState({ resetloc: false})
      if (event.target.value == 'Ministere'){
        this.setState({ showSe:  false, showMinistere: true, showBloc:  false, showType:  false, search_blocs: [], search_type_services:[], search_service_executants: [], autoCompleteList: this.state.ministeres,showResults: false }) 
      } 
      else if (event.target.value == 'Bloc'){
      this.setState({ showSe:  false, showMinistere: false, showBloc:  true, showType:  false, search_ministeres: [], search_type_services:[], search_service_executants: [], autoCompleteList: this.state.blocs,showResults: false}) 
      }
      else if (event.target.value == 'Type'){
      this.setState({ showSe:  false, showMinistere: false, showBloc:  false, showType:  true, search_ministeres: [], search_blocs:[], search_service_executants: [], autoCompleteList: this.state.type_services,showResults: false}) 
      }
      else if (event.target.value == 'Service') {
      this.setState({ showSe:  true, showMinistere: false, showBloc:  false, showType:  false, search_ministeres: [], search_type_services:[], search_blocs: [], autoCompleteList: this.state.service_executants,showResults: false}) 
      }
    }

    handleSubmitDate(e){

        this.setState({ startDate: e});
        const url = "/api/v1/service_executants/search_date";
        const autoCompleteResults = this.state.autoCompleteResults;
        const autoCompleteList = this.state.autoCompleteList;
       
        const search_service_executants = this.state.search_service_executants;
        const search_ministeres = this.state.search_ministeres;
        const search_blocs = this.state.search_blocs;
        const search_type_services = this.state.search_type_services;
        const effectif = this.state.effectif;
        const type_structure = this.state.type_structure;
        const showSe = this.state.showSe;
        const showBloc = this.state.showBloc;
        const showMinistere = this.state.showMinistere;
        const showType = this.state.showType;
        const startDate = e;
        const service_executant = this.state.service_executant;
        const region = this.state.region;
    

        const body = {
          autoCompleteResults,search_service_executants,search_ministeres,search_blocs,search_type_services, effectif, type_structure,showSe,showBloc,showMinistere,showType,startDate,service_executant, region
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
      .then(response => this.setState({ autoCompleteResults: response.autoCompleteResults, csp: response.csp, sfact: response.sfact, cgf: response.cgf,search_service_executants: response.search_service_executants, search_ministeres: response.search_ministeres,search_blocs: response.search_blocs, search_type_services: response.search_type_services, effectif: response.effectif, type_structure: response.type_structure, se_color: response.se_color, loading: false, service_executant: response.service_executant,indicateur_executions: response.indicateur_executions, performance: response.performance,resetloc: false  }))
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
      .then(response => this.setState({ service_executant: response.service_executant, showResults: true, indicateur_executions: response.indicateur_executions, performance: response.performance, resetloc: false}))
      .catch(error => console.log(error.message));
       
    };

    onCloseInfo(event) {
    this.setState({ showResults: false });
    }


  render() {
   console.log('ok');
    return (
      <div>
        <Header /> 
        
        <div className="fr-container pr">    
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-lg-12">
              <h1 className="fr-my-5w">Cartographie de la performance globale</h1>
            </div>
          </div>
        
            <Mapsearch autoCompleteResults={this.state.autoCompleteResults} autoCompleteList= {this.state.autoCompleteList} handleChange={this.handleChange} handleChangeStructure={this.handleChangeStructure} showSe={this.state.showSe} showMinistere={this.state.showMinistere} showBloc={this.state.showBloc} showType={this.state.showType} handleSubmit={this.handleSubmit} regions={this.state.regions}/>
        
          
          { this.state.loading ? <div className="loader_box"><div className ="loader"></div></div> :  
            <Mapcontainer handleSubmitDate={this.handleSubmitDate} onMarkerClick2={this.onMarkerClick2}  maxDate={this.state.maxDate} startDate={this.state.startDate} service_executant={this.state.service_executant} autoCompleteResults={this.state.autoCompleteResults} secolor={this.state.se_color} indicateur_n={this.state.indicateur_n} csp={this.state.csp} cgf={this.state.cgf} sfact={this.state.sfact} handleSubmit={this.handleSubmit} showResults={this.state.showResults} performance={this.state.performance} indicateur_executions={this.state.indicateur_executions} onCloseInfo={this.onCloseInfo} zoom={this.state.zoom} lat={this.state.lat} lng={this.state.lng} resetloc={this.state.resetloc}/> 
          }

        </div>
        
  
        <Footer />    
      </div>
    
    );
  }
}
export default Home;
