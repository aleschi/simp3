import React from "react";
import { Link } from "react-router-dom";

class Execution_search extends React.Component {
  render() {
    return (
    <div className="indicateurs_search_box">
		<div className="box_etiquette">
			<div className="titre_etiquette">Ma recherche </div>
			<div className="d12"></div>
			<form onSubmit={this.onSubmit}>
			<div className="texte_etiquette">Je souhaite visualiser <select></select></div>
			<div className="d12"></div>
			<div className="texte_etiquette">Concernant les </div>
			</form>
		</div>  
    </div>
    
    );
  }
}
export default Execution_search;
