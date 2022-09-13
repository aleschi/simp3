import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
import MultiSelect from "./MultiSelect";

export default ({ handleChange, handleSubmit, showSe, showMinistere,showBloc,autoCompleteList, regions }) => {
const [value, setValue] = useState([]);
	    return (

			<div>
				<div className="fr-grid-row fr-grid-row--gutters">
		          <div className="fr-col-12 fr-col-lg-12">      
		            <h2 className="fr-mb-3w">Filtrer la recherche </h2>
		          </div>
		        </div>
		        <div className="fr-grid-row fr-grid-row--gutters">

		        	<div className="fr-col-12 fr-col-lg-4">
						<div className="fr-select-group">
						<label htmlFor="regions" className="fr-label" >Région </label>
						<select className="fr-select" id="regions" name="regions" onChange={handleChange}>	<option value="ALL">Toutes les régions</option>  
		                    { regions.map((region, index) => (
		                      <option key={index} value={region}>{region}</option>   
		                      ))            
		                    }                
						</select>
						</div>
					</div>
		       
					<div className="fr-col-12 fr-col-lg-4">
						<div className="fr-select-group">
						<label htmlFor="choixservice" className="fr-label" >Secteur</label>
						<select className="fr-select" id="choixservice" name="secteur" onChange={handleChange}>					
				            <option value="Service">Service Exécutant</option>
				            <option value="Ministere">Ministère</option>
				            <option value="Bloc">Organisation financière</option>      
						</select>
						</div>
					</div>

					
					<div className="fr-col-12 fr-col-lg-4"> 

						<div className="fr-select-group">
						<div className="fr-label" >Rechercher </div>
						
						<div className="form_checkbox">
							{ showSe && 
								<MultiSelect
							      items={autoCompleteList}
							      label="Recherchez un service exécutant"
							      placeholder="Ajoutez un service"
							      onChange={setValue}
							      handleSubmit={handleSubmit}
							    />
							}

							{ showMinistere && 
				            <Autocomplete
						      multiple
						      limitTags={1}
						      className="search_checkbox" 
						      options={autoCompleteList}
						      disableCloseOnSelect
						      noOptionsText={'Aucune option'}
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
							}
							{ showBloc && 
				            <Autocomplete
						      multiple
						      limitTags={1}
						      className="search_checkbox" 
						      options={autoCompleteList}
						      disableCloseOnSelect
						      noOptionsText={'Aucune option'}
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
						        <TextField {...params} label="Recherchez une organisation" placeholder="Ajoutez une organisation" />
						      )}
						    />
							}
				        </div>
						
						
						</div>
					</div>

					
				</div>
 
	    </div>
	    
	    );

};
