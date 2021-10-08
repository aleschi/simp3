import React from "react";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'react-bootstrap';

export default ({ handleChange,handleChange2, handleSubmit, indicateurs, service_executants }) => {
	
	    return (

	    <div className="indicateurs_search_box">
			<div className="box_etiquette">
				<div className="titre_etiquette text-center">Ma recherche </div>
				<div className="d12"></div>
				<form onSubmit={handleSubmit}>
				<div className="texte_etiquette formw">Je souhaite visualiser l'indicateur 
				<select name="search_indicateur" onChange={handleChange}>
					{indicateurs.map((indicateur, index) => (
		              <option key={index} value={indicateur.name}>{indicateur.name}</option>
		            ))}
				</select></div>

				<div className="d12"></div>
				<div className="texte_etiquette formw">Concernant les 
				<select>					
		            <option value="Ministere">Services Executants</option>
		            <option value="Ministere">Ministères</option>
		            <option value="Ministere">BLOC</option>
		            <option value="Ministere">TYPE</option>		            
				</select></div>

				<div className="d12"></div>
				<div className="texte_etiquette formw">
				Ma recherche concerne 
				

				</div>
				<Dropdown>
  <Dropdown.Toggle id="dropdown-basic" className="dropdown_btn">
    Sélectionner un Service Ex
  </Dropdown.Toggle>

  <Dropdown.Menu className="dropwdown_menu_btn">
    {service_executants.map((service, index) => (
						<div key={index} className="texte_etiquette">	<label >
							<input type="checkbox" name="search_service_executants" onChange={handleChange2} id={service.libelle} value={service.id} />{service.libelle}
							</label></div>
			            ))}
  </Dropdown.Menu>
</Dropdown>
				<div className="d24"></div>
				<button className="bouton" type="submit">Valider</button>
				</form>
			</div>  
	    </div>
	    
	    );

};
