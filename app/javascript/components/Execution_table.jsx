import React from "react";
import { Link } from "react-router-dom";

class Execution_table extends React.Component {
  render() {
    return (
    <div className="table" >
	    <table className="table-striped">
	      	<thead>
	        <tr>
	          <th scope="col">Indicateur</th>
	          <th scope="col">Indicateur2</th>
	        </tr>
	      	</thead>

	      	<tbody>
	        <tr><td>Valeur</td><td>Valeur2</td></tr>
	      	</tbody>
	    </table>
    </div>
    
    );
  }
}
export default Execution_table;
