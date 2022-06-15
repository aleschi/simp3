import React from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

export class Execution_table extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            indicateur_executions: this.props.indicateur_executions,
            date_croissant: true,
            valeur_croissant: false,
        }
        this.sortTable = this.sortTable.bind(this);
   
    }
    componentDidUpdate(prevProps) {
      if (this.props.indicateur_executions !== prevProps.indicateur_executions) {
        this.setState({indicateur_executions: this.props.indicateur_executions});
      }
    };

    sortTable = (params) => {
   
      const indicateur_executions = this.state.indicateur_executions;
      const date_croissant = this.state.date_croissant;
      const valeur_croissant = this.state.valeur_croissant;
        const body = {
          indicateur_executions,date_croissant,valeur_croissant
        };
        const url = "/api/v1/indicateur_executions/sort_table?search=" + params;
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
      .then(response => this.setState({ indicateur_executions: response.data6, date_croissant: response.date_croissant, valeur_croissant: response.valeur_croissant}))
      .catch(error => console.log(error.message));
    }

    

    render() {


    const headers = ['Date','Service Exécutant','Code Service Exécutant','Ministère',"Organisation Financière ",'Type Service','Valeur' ];
    var data_to_download = [];
    this.state.indicateur_executions.map((indicateur_execution, index) => (
   
      data_to_download.push([indicateur_execution.date,indicateur_execution.service_executant.libelle,indicateur_execution.service_executant.code,indicateur_execution.service_executant.ministere.name,indicateur_execution.service_executant.organisation_financiere.name,indicateur_execution.service_executant.type_service.name,Math.round(indicateur_execution.valeur * 100 ) / 100 ])
            ))

    return (
    <div className="fr-my-3w">
      <h2 className="fr-my-2w">Tableau des valeurs</h2>

      <div className="fr-download"><p><CSVLink data={data_to_download} headers={headers} filename={"table_indicateurs.csv"} className="fr-download__link"> Télécharger le tableau
      <span className="fr-download__detail">CSV</span></CSVLink></p></div>

      <div className="fr-table fr-my-2w fr-table--no-caption">
        <table>
           <caption>Tableau des valeurs</caption>
            <thead>
                <tr>
                  <th scope="col">Date <button onClick={() => {this.sortTable('date')}} id="date"><span className="fr-icon-code-view fr-fi--xs rotate90" aria-hidden="true"></span></button></th>
                  <th scope="col">Service Exécutant</th>
                  <th scope="col">Code Service Exécutant</th>
                  <th scope="col">Ministère</th>
                  <th scope="col">Organisation Financière</th>
                  <th scope="col">Type Service</th>
                    <th scope="col">Valeur Indicateur <button onClick={() => {this.sortTable('valeur')}} id="valeur"><span className="fr-icon-code-view fr-fi--xs rotate90" aria-hidden="true"></span></button></th>
                </tr>
            </thead>
            <tbody>
                {this.state.indicateur_executions.map((indicateur_execution, index) => (
                  <tr key={index}><td>{indicateur_execution.date}</td><td>{indicateur_execution.service_executant.libelle}</td><td>{indicateur_execution.service_executant.code}</td><td>{indicateur_execution.service_executant.ministere.name}</td><td>{indicateur_execution.service_executant.organisation_financiere.name}</td><td>{indicateur_execution.service_executant.type_service.name}</td><td>{Math.round(indicateur_execution.valeur * 100 ) / 100 }{indicateur_execution.indicateur.unite}</td></tr>
                ))}
            
            </tbody>
        </table>
      </div>

  
    </div>
    
    );
    }
}
export default Execution_table;
