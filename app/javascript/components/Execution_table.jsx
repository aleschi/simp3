import React from "react";
import { Link } from "react-router-dom";

export default ({ indicateur_executions }) => {

    return (
    <div className="table" >
	    <table className="table-striped">
	      	<thead>
	        <tr>
	        	<th scope="col">Date</th>
	        	<th scope="col">Service Exécutant</th>
	        	<th scope="col">Code Service Exécutant</th>
	        	<th scope="col">Ministère</th>
	        	<th scope="col">Organisation Financière</th>
	        	<th scope="col">Type Service</th>
	          	<th scope="col">Valeur Indicateur</th>
	          	
	     	
	        </tr>
	      	</thead>

	      	<tbody>
	      	{indicateur_executions.map((indicateur_execution, index) => (
	        <tr key={index}><td>{indicateur_execution.date}</td><td>{indicateur_execution.service_executant.libelle}</td><td>{indicateur_execution.service_executant.code}</td><td>{indicateur_execution.service_executant.ministere.name}</td><td>{indicateur_execution.service_executant.organisation_financiere.name}</td><td>{indicateur_execution.service_executant.type_service.name}</td><td>{indicateur_execution.valeur}{indicateur_execution.indicateur.unite}</td></tr>
	        	))}
	      	</tbody>
	    </table>


    </div>
    
    );
}

