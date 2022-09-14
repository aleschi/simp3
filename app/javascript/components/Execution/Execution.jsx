import React,{ useState } from "react";
import Chart from "./Chart";
import Execution_search from "./Execution_search";
import Execution_table from "./Execution_table";
import Execution_infos from "./Execution_infos";

class Execution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
          indicateurs: [],
     
          indicateur_executions: [],
          indicateur_n: [],
          service_executant_n: [],
          search_indicateur: 'IA1',
          indicateur_name: '',
          search_service_executants: [],
          search_ministeres: [],
          search_blocs: [],

          showSe: true,
          showMinistere: false,
          showBloc: false,
          data_inter_ministerielle: [],
         
          autoCompleteList: [],
          liste_se_empty: [],
          liste_se_empty_arr: [],

          regions: [],
          region: "ALL",
          loading: true,
          loader: false,

          min:0,
          max:null,
      
        };

       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);   
      
      
    }
    componentDidMount() {
      const url = "/simp3/api/v1/indicateur_executions/index";
      fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ indicateurs: response.indicateurs, indicateur_n: response.indicateur_n, indicateur_name: response.indicateur_name, 
        data_inter_ministerielle: response.data_inter_ministerielle, autoCompleteList: response.autoCompleteList, regions: response.regions, loading: false,
         min: response.min, max: response.max  }))
      .catch(error => console.log(error.message));
    }

    handleChange(event) {
        const url = "/simp3/api/v1/indicateur_executions/search";

        const search_indicateur = event.target.value;
        const search_service_executants = this.state.search_service_executants;
        const search_ministeres = this.state.search_ministeres;
        const search_blocs = this.state.search_blocs;
        const region = this.state.region;
        const showSe = this.state.showSe;
        const showMinistere = this.state.showMinistere;
        const showBloc = this.state.showBloc;

        this.setState({ loader: true})

        const body = {
          search_indicateur, search_service_executants,search_ministeres, search_blocs,region,showSe, showMinistere, showBloc
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
      .then(response => this.setState({ indicateur_executions: response.indicateur_executions, indicateur_n: response.indicateur_n, service_executant_n: response.service_executant_n, 
        search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,search_service_executants: response.search_service_executants,
        search_ministeres: response.search_ministeres, data_inter_ministerielle: response.data_inter_ministerielle, liste_se_empty_arr: response.liste_se_empty_arr, 
        liste_se_empty: response.liste_se_empty,loader: false, min: response.min, max: response.max }))
      .catch(error => console.log(error.message));
    }



    handleChange2(event){
      
      const url = "/simp3/api/v1/indicateur_executions/search";
      const search_indicateur = this.state.search_indicateur;
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
         search_indicateur, search_service_executants,search_ministeres, search_blocs,region, showSe, showMinistere, showBloc
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
      .then(response => this.setState({ data_inter_ministerielle: response.data_inter_ministerielle, region: response.region, 
        autoCompleteList: response.autoCompleteList, showSe: showSe,showMinistere: showMinistere, showBloc: showBloc, loader: false }))
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
        const url = "/simp3/api/v1/indicateur_executions/search";
        const search_indicateur = this.state.search_indicateur;
        const region = this.state.region;
        const showSe = this.state.showSe;
        const showMinistere = this.state.showMinistere;
        const showBloc = this.state.showBloc
        this.setState({ loader: true})
        

        const body = {
          search_indicateur, search_service_executants,search_ministeres, search_blocs, region, showSe, showMinistere, showBloc
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
      .then(response => this.setState({ indicateur_executions: response.indicateur_executions, indicateur_n: response.indicateur_n, 
        service_executant_n: response.service_executant_n, search_indicateur: response.search_indicateur, indicateur_name: response.indicateur_name,
        search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres, search_blocs: response.search_blocs,
        data_inter_ministerielle: response.data_inter_ministerielle, liste_se_empty_arr: response.liste_se_empty_arr, liste_se_empty: response.liste_se_empty, 
        loader: false, min: response.min, max: response.max}))
      .catch(error => console.log(error.message));
    }

    
    render() {
    
    return (
    
    <div>
 
        <div className="fr-container pr">    
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-12">
              <h1 className="fr-my-5w">Suivi temporel des indicateurs</h1>
            </div>
          </div>
        
          <Execution_search handleChange={this.handleChange} handleSubmit={this.handleSubmit} regions={this.state.regions} handleChange2={this.handleChange2}
            indicateurs={this.state.indicateurs} showSe={this.state.showSe} showMinistere={this.state.showMinistere} showBloc={this.state.showBloc}
            autoCompleteList={this.state.autoCompleteList} />

          { this.state.liste_se_empty_arr.length > 0 && 
            <div className="fr-alert fr-alert--error fr-mt-3w">
              <p className="fr-alert__title fr-hidden"></p>
              <p>Services exécutants qui ne suivent pas cet indicateur : {this.state.liste_se_empty.map((se, index) => ( 
              <span key={index}>{se.libelle} - </span>
              ))}</p>
            </div>
          }
          { this.state.loader && <div className="loader_box"><div className ="loader"></div></div> }

          { this.state.loading ? <div className="loader_box"><div className ="loader"></div></div> : 
            <div>
            <div className="fr-grid-row fr-grid-row--gutters fr-my-4w">
                
              <div className="fr-col-12 fr-col-lg-8">
                <Chart indicateur_executions={this.state.indicateur_executions} indicateur_n={this.state.indicateur_n} search_indicateur={this.state.search_indicateur} 
                service_executant_n={this.state.service_executant_n} indicateur_name= {this.state.indicateur_name} data_inter_ministerielle={this.state.data_inter_ministerielle}
                min={this.state.min} max={this.state.max}/>

                
              </div>
              <div className="fr-col-12 fr-col-lg-4">
                <Execution_infos indicateur_n={this.state.indicateur_n}/>
              </div>
            </div>
            {this.state.indicateur_executions.length > 0 && 
            <div className="fr-grid-row fr-grid-row--gutters fr-mb-4w">
              <div className="fr-col-12">
                <Execution_table indicateur_executions={this.state.indicateur_executions}/>
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