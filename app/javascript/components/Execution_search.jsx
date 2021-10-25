import React from "react";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'react-bootstrap';

export default ({ handleChange,handleChange2,handleChange3,handleChange4,handleChange5, handleChangeStructure, handleSubmit, indicateurs, service_executants, ministeres,blocs,type_services, showSe, showMinistere, showType, showBloc,search_service_executants }) => {
	
	    return (

	    <div className="indicateurs_search_box">
			<div className="box_etiquette">
				<div className="titre_etiquette text-center">Ma recherche </div>
				<div className="d12"></div>
				<form onSubmit={handleSubmit}>
				<div className="texte_etiquette formw">Je souhaite visualiser l'indicateur 
				<select name="search_indicateur" onChange={handleChange} required>
					{indicateurs.map((indicateur, index) => (
		              <option key={index} value={indicateur.name}>{indicateur.name}</option>
		            ))}
				</select></div>

				<div className="d12"></div>
				<div className="texte_etiquette formw">Concernant les 
				<select name="type_structure" onChange={handleChangeStructure}>					
		            <option value="Service">Services Exécutants</option>
		            <option value="Ministere">Ministères</option>
		            <option value="Bloc">BLOC</option>
		            <option value="Type">TYPE</option>		            
				</select></div>

				<div className="d12"></div>
				<div className="texte_etiquette formw">
				Ma recherche concerne 
				
				<Dropdown>
				  	<Dropdown.Toggle  className="dropdown_btn">
				    Sélectionner
				  	</Dropdown.Toggle>

  					<Dropdown.Menu className="dropwdown_menu_btn">
  					{ showSe ? 
    					service_executants.map((service, index) => (
						<div key={index} className="texte_etiquette">	<label >
							<input type="checkbox" name="search_service_executants" onChange={handleChange2} defaultChecked = {search_service_executants === service.id} id={service.libelle} value={service.id} /> {service.libelle}
							</label></div>
			            ))

			            : null }
			        { showMinistere ? 
			            ministeres.map((ministere, index) => (
						<div key={index} className="texte_etiquette">	<label >
							<input type="checkbox" name="search_ministeres" onChange={handleChange3} id={ministere.name} value={ministere.id} /> {ministere.name}
							</label></div>
			            ))
			            : null

			            }
			        { showBloc ? 
			            blocs.map((bloc, index) => (
						<div key={index} className="texte_etiquette">	<label >
							<input type="checkbox" name="search_blocs" onChange={handleChange4} id={bloc.name} value={bloc.id} /> {bloc.name}
							</label></div>
			            ))
			            : null

			            }
			        { showType ? 
			            type_services.map((type, index) => (
						<div key={index} className="texte_etiquette">	<label >
							<input type="checkbox" name="search_type_services" onChange={handleChange5} id={type.name} value={type.id} /> {type.name}
							</label></div>
			            ))
			            : null

			            }
  					</Dropdown.Menu>
				</Dropdown>
				</div>
				<div className="d24"></div>
				<div className="text-center"><button className="bouton" type="submit">Valider</button></div>
				</form>
			</div>  
	    </div>
	    
	    );

};
