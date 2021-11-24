import React from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ handleChange, handleChangeStructure, handleSubmit, indicateurs, service_executants, ministeres, showSe, showMinistere,search_service_executants,search_ministeres,autoCompleteList,term }) => {

	    return (

	    <div className="indicateurs_search_box">
			<div className="box_etiquette">
				<div className="titre_etiquette text-center">Ma recherche </div>
				<div className="d12"></div>
		
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
		                      
				</select></div>

				<div className="d12"></div>
				<div className="texte_etiquette formw">
				Ma recherche concerne 
				{ showSe ? 
				<div className="form_checkbox">
		            <Autocomplete
				      multiple
				      id="se"
				      className="search_checkbox" 
				      options={autoCompleteList}
				      disableCloseOnSelect

				      onChange={(event, value) => handleSubmit(event, value)}
				      getOptionLabel={(option) => option.libelle}
				      renderOption={(props, option, { selected }) => (
				        <li {...props} className="checkbox_li" id={option.id}>
				          <Checkbox
				            icon={icon}
				            checkedIcon={checkedIcon}
				            style={{ marginRight: 8 }}
				            checked={selected}
				          />
				          {option.libelle}
				        </li>
				      )}
				      style={{ width: 500 }}
				      renderInput={(params) => (
				        <TextField {...params} label="Recherchez un service exécutant" placeholder="Ajoutez un service" />
				      )}
				    />
		        </div>
				
				: null}

				{ showMinistere ? 
				<div className="form_checkbox">	
		            <Autocomplete
				      multiple
				      id="checkboxes-tags-demo"
				      className="search_checkbox" 
				      options={autoCompleteList}
				      disableCloseOnSelect
				      onChange={(event, value) => handleSubmit(event, value)}
				      getOptionLabel={(option) => option.name}
				      renderOption={(props, option, { selected }) => (
				        <li {...props} className="checkbox_li">
				          <Checkbox
				            icon={icon}
				            checkedIcon={checkedIcon}
				            style={{ marginRight: 8 }}
				            checked={selected}
				          />
				          {option.name}
				        </li>
				      )}
				      style={{ width: 500 }}
				      renderInput={(params) => (
				        <TextField {...params} label="Recherchez un ministère" placeholder="Ajoutez un ministère" />
				      )}
				    />
		        </div>
				: null}

				
				</div>
				<div className="d24"></div>
				
			</div>  
	    </div>
	    
	    );

};
