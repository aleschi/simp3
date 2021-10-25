import React from "react";
import { Link } from "react-router-dom";

export default ({ indicateur_executions,sortTable }) => {

    return (
    <div className="table" >
	    <table className="table-striped">
	      	<thead>
	        <tr>
	        	<th scope="col">Date <button onClick={sortTable} name="date"><i className="fas fa-sort"></i></button></th>
	        	<th scope="col">Service Exécutant</th>
	        	<th scope="col">Code Service Exécutant</th>
	        	<th scope="col">Ministère</th>
	        	<th scope="col">Organisation Financière</th>
	        	<th scope="col">Type Service</th>
	          	<th scope="col">Valeur Indicateur <button onClick={sortTable} name="valeur"><i className="fas fa-sort"></i></button></th>
	          	
	     	
	        </tr>
	      	</thead>

	      	<tbody>
	      	{indicateur_executions.map((indicateur_execution, index) => (
	        <tr key={index}><td>{indicateur_execution.date}</td><td>{indicateur_execution.service_executant.libelle}</td><td>{indicateur_execution.service_executant.code}</td><td>{indicateur_execution.service_executant.ministere.name}</td><td>{indicateur_execution.service_executant.organisation_financiere.name}</td><td>{indicateur_execution.service_executant.type_service.name}</td><td>{Math.round(indicateur_execution.valeur * 100 ) / 100 }{indicateur_execution.indicateur.unite}</td></tr>
	        	))}
	      	</tbody>
	    </table>


    </div>
    
    );
}

