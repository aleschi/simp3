import React,{ useState } from "react";
import Chart_globale from "./Chart_globale";
import Execution_search_globale from "./Execution_search_globale";
import Execution_table_globale from "./Execution_table_globale";


class Execution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          ministeres: [],
          service_executants: [],     
          indicateur_executions: [],
         
          service_executant_n: [],     
          search_service_executants: [],
          search_ministeres: [],

          showSe: true,
          showMinistere: false,
       
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
        this.handleChangeStructure = this.handleChangeStructure.bind(this);
        this.handleChangeRegion = this.handleChangeRegion.bind(this);   
      
      
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
      .then(response => this.setState({  ministeres: response.ministeres, service_executants: response.service_executants, 
        autoCompleteList: response.autoCompleteList, regions: response.regions, loading: false, date_min: response.date_min }))
      .catch(error => console.log(error.message));
    }


    handleChangeStructure(event){
      if (event.target.value == 'Ministere'){
        this.setState({ showSe:  false, showMinistere: true,  search_service_executants: [], autoCompleteList: this.state.ministeres, indicateur_executions: [], 
          service_executant_n: [], liste_se_empty_arr: [], liste_se_empty: []  }) 
      } 
      else if (event.target.value == 'Service') {
      this.setState({ showSe:  true, showMinistere: false, search_ministeres: [], autoCompleteList: this.state.service_executants,indicateur_executions: [], 
        service_executant_n: [], liste_se_empty_arr: [], liste_se_empty: []  }) 
      }
    }

    handleChangeRegion(event){
      
      const url = "/simp3/api/v1/service_executants/search_globale";

      const region = event.target.value;

      const search_service_executants = this.state.search_service_executants;
      const search_ministeres = this.state.search_ministeres;
      const showSe = this.state.showSe;
      const showMinistere = this.state.showMinistere;
      this.setState({ showSe: null, showMinistere: null, loader: true, indicateur_executions: [], service_executant_n: [], liste_se_empty_arr: [], 
        liste_se_empty: [],search_service_executants: [],search_ministeres: []  })

      const body = {
         search_service_executants,search_ministeres, region, showSe
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
        ministeres: response.ministeres, service_executants: response.service_executants, showSe: showSe,showMinistere: showMinistere, loader: false }))
      .catch(error => console.log(error.message));
    }



    handleSubmit(event, value) {
        event.preventDefault();
        const search_service_executants = new Array() 
        const search_ministeres = new Array()

        if (this.state.showSe){
          value.filter(el => el.id != "all").forEach(el => search_service_executants.push(el.id));  
        }
        else{                   
          value.forEach(el => search_ministeres.push(el.id))
        } 

        const url = "/simp3/api/v1/service_executants/search_globale";

        const region = this.state.region;
        const showSe = this.state.showSe;
        this.setState({ loader: true})
        
        const body = {
          search_service_executants,search_ministeres, region, showSe
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
        search_service_executants: response.search_service_executants,search_ministeres: response.search_ministeres,
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
        
            <Execution_search_globale handleChangeStructure={this.handleChangeStructure} handleSubmit={this.handleSubmit} 
            showSe={this.state.showSe} showMinistere={this.state.showMinistere} autoCompleteList={this.state.autoCompleteList}
            regions={this.state.regions} handleChangeRegion={this.handleChangeRegion}/>

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