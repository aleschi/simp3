import React,{ useState } from "react";
import Chart_globale from "./Chart_globale";
import Execution_search_globale from "./Execution_search_globale";
import Execution_table_globale from "./Execution_table_globale";


class Execution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
          indicateur_executions: [],
         
          service_executant_n: [],     
          search_service_executants: [],
          search_ministeres: [],
          search_blocs: [],

          showSe: true,
          showMinistere: false,
          showBloc: false,
       
          autoCompleteList: [],
          liste_se_empty: [],
          liste_se_empty_arr: [],

          regions: [],
          region: "ALL",
          loading: true,
          loader: false,

          date_min: '',
      
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);  
      
      
    }
    componentDidMount() {
      const url = "/simp3/api/v1/service_executants/index_chart";
      fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({autoCompleteList: response.autoCompleteList, regions: response.regions, loading: false, date_min: response.date_min }))
      .catch(error => console.log(error.message));
    }


    handleChange(event){
      
      const url = "/simp3/api/v1/service_executants/search_globale";

      const search_service_executants = []
      const search_ministeres = []
      const search_blocs = []
      var showSe = this.state.showSe;
      var showMinistere = this.state.showMinistere;
      var showBloc = this.state.showBloc;
      if (this.state.search_service_executants.length > 0 || this.state.search_ministeres.length > 0 || this.state.search_blocs.length > 0){
        this.setState({ showSe: null, showMinistere: null, showBloc: null})
      }
      this.setState({ indicateur_executions: [], service_executant_n: [], liste_se_empty_arr: [], liste_se_empty: [],search_service_executants: [],
        search_ministeres: [], search_blocs: []  })
      if (event.target.name == "regions"){
        var region = event.target.value;
      }else if (event.target.name == "secteur"){
          var region = this.state.region
          if (event.target.value == 'Ministere'){
            this.setState({ showSe:  false, showMinistere: true, showBloc:  false,}) 
            showSe = false 
            showMinistere = true 
            showBloc = false
          } 
          else if (event.target.value == 'Bloc'){
            this.setState({ showSe:  false, showMinistere: false, showBloc:  true, }) 
            showSe = false 
            showMinistere = false 
            showBloc = true
          }
          else if (event.target.value == 'Service') {
            this.setState({ showSe:  true, showMinistere: false, showBloc:  false, }) 
            showSe = true 
            showMinistere = false 
            showBloc = false
          }
        }

      const body = {
         search_service_executants,search_ministeres, search_blocs,region, showSe, showMinistere, showBloc
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
      .then(response => this.setState({ region: response.region, autoCompleteList: response.autoCompleteList, 
        showSe: showSe,showMinistere: showMinistere, showBloc: showBloc, loader: false}))
      .catch(error => console.log(error.message));
    }



    handleSubmit(event, value) {
        event.preventDefault();
        const search_service_executants = new Array() 
        const search_ministeres = new Array()
        const search_blocs = new Array()

        if (this.state.showSe){                
          value.filter(el => el.id != "all").forEach(el => search_service_executants.push(el.id))     
        }
        else if (this.state.showMinistere){                   
          value.forEach(el => search_ministeres.push(el.id))
        }
        else if (this.state.showBloc){                   
          value.forEach(el => search_blocs.push(el.id))
        }

        const url = "/simp3/api/v1/service_executants/search_globale";

        const region = this.state.region;
        const showSe = this.state.showSe;
        const showMinistere = this.state.showMinistere;
        const showBloc = this.state.showBloc
        this.setState({ loader: true})
        
        const body = {
          search_service_executants,search_ministeres, search_blocs, region, showSe, showMinistere, showBloc
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
      .then(response => this.setState({ indicateur_executions: response.indicateur_executions,service_executant_n: response.service_executant_n,
        search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres, search_blocs: response.search_blocs,
        liste_se_empty_arr: response.liste_se_empty_arr, liste_se_empty: response.liste_se_empty, loader: false}))
      .catch(error => console.log(error.message));
    }

    
    render() {

    return (
    
    <div>
 
        <div className="fr-container pr">    
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-12">
              <h1 className="fr-my-5w">Suivi temporel de la performance globale</h1>
            </div>
          </div>
        
            <Execution_search_globale handleChange={this.handleChange} handleSubmit={this.handleSubmit} 
            showSe={this.state.showSe} showMinistere={this.state.showMinistere} showBloc={this.state.showBloc} autoCompleteList={this.state.autoCompleteList}
            regions={this.state.regions}/>

            { this.state.liste_se_empty_arr.length > 0 && 
            <div className="fr-alert fr-alert--error fr-mt-3w">
              <p className="fr-alert__title fr-hidden"></p>
              <p>Services exécutants qui n'ont pas de performance globale : {this.state.liste_se_empty.map((se, index) => ( 
              <span key={index}>{se.libelle} - </span>
              ))}</p>
            </div>
          }
          { this.state.loader && <div className="loader_box"><div className ="loader"></div></div> }

          { this.state.loading ? <div className="loader_box"><div className ="loader"></div></div> : 
            <div>
              <div className="fr-grid-row fr-grid-row--gutters fr-my-4w">              
                  <div className="fr-col-12 fr-col-lg-12">
                    <Chart_globale indicateur_executions={this.state.indicateur_executions} service_executant_n={this.state.service_executant_n} 
                    date_min={this.state.date_min}/>         
                  </div>
              </div>
              {this.state.indicateur_executions.length > 0 && 
              <div className="fr-grid-row fr-grid-row--gutters fr-mb-4w">
                <div className="fr-col-12">
                  <Execution_table_globale indicateur_executions={this.state.indicateur_executions}/>
                </div>
              </div>
              }
            </div>
          }
                 
        </div>
   
    </div>
    
    );
  }
}
export default Execution;