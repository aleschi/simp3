import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
import MultiSelect from "./MultiSelect";

export default ({ handleChange, handleChangeStructure, handleSubmit, indicateurs, showSe, showMinistere,autoCompleteList, regions,handleChangeRegion }) => {
const [value, setValue] = useState([]);
	    return (

			<div>
				<div className="fr-grid-row fr-grid-row--gutters">
		          <div className="fr-col-12 fr-col-lg-12">      
		            <h2 className="fr-mb-3w">Ma recherche </h2>
		          </div>
		        </div>
		        <div className="fr-grid-row fr-grid-row--gutters">
		          	<div className="fr-col-12 fr-col-lg-4">
						<div className="fr-select-group">
						<label htmlFor="indicateur" className="fr-label" >Je souhaite visualiser l'indicateur </label>
						<select className="fr-select" id="indicateur" name="search_indicateur" onChange={handleChange} required>
							{indicateurs.map((indicateur, index) => (
				              <option key={index} value={indicateur.name}>{indicateur.name} - {indicateur.description}</option>
				            ))}
						</select>
						</div>
					</div>

					<div className="fr-col-12 fr-col-lg-4">
						<div className="fr-select-group">
						<label htmlFor="choixservice" className="fr-label" >Concernant les </label>
						<select className="fr-select" id="choixservice" name="type_structure" onChange={handleChangeStructure}>					
				            <option value="Service">Services Exécutants</option>
				            <option value="Ministere">Ministères</option>
				                      
						</select>
						</div>
					</div>

					<div className="fr-col-12 fr-col-lg-4">
						<div className="fr-select-group">
						<label htmlFor="regions" className="fr-label" >Sur la région </label>
						<select className="fr-select" id="regions" name="regions" onChange={handleChangeRegion}>	<option value="ALL">Toutes les régions</option>  
		                    { regions.map((region, index) => (
		                      <option key={index} value={region}>{region}</option>   
		                      ))            
		                    }                
						</select>
						</div>
					</div>
				</div>
				<div className="fr-grid-row fr-grid-row--gutters">
					<div className="fr-col-12 fr-col-lg-4"> 

						<div className="fr-select-group">
						<div className="fr-label" >Ma recherche concerne </div>
						{ showSe ? 
							<div className="form_checkbox">
								<MultiSelect
							      items={autoCompleteList}
							      label="Recherchez un service exécutant"
							      placeholder="Ajoutez un service"
							      onChange={setValue}
							      handleSubmit={handleSubmit}
							    />
							</div>
						
						: null}

						{ showMinistere ? 
						<div className="form_checkbox">	
				            <Autocomplete
						      multiple
						      limitTags={1}
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
					</div>
					
				</div>
 
	    </div>
	    
	    );

};
