import React from "react";
import { Link } from "react-router-dom";

export default ({ indicateur_executions }) => {

    return (
    <div className="table" >
	    <table className="table-striped">
	      	<thead>
	        <tr>
	        	<th scope="col">Date</th>
	        	<th scope="col">SE</th>
	        	<th scope="col">Ministère</th>
	        	<th scope="col">Indicateur</th>
	          	<th scope="col">Valeur Indicateur</th>
	          	<th scope="col">Unité</th>
	     	
	        </tr>
	      	</thead>

	      	<tbody>
	      	{indicateur_executions.map((indicateur_execution, index) => (
	        <tr key={index}><td>{indicateur_execution.date}</td><td>{indicateur_execution.service_executant.libelle}</td><td>{indicateur_execution.service_executant.ministere.name}</td><td>{indicateur_execution.indicateur.name}</td><td>{indicateur_execution.valeur}</td><td>U</td></tr>
	        	))}
	      	</tbody>
	    </table>


    </div>
    
    );
}

