import React from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ handleChange, handleChangeStructure, handleSubmit, indicateurs, service_executants, ministeres,blocs,type_services, showSe, showMinistere, showType, showBloc, autoCompleteList,regions}) => {
	
	    return (

	    <div>
			<div className="fr-grid-row fr-grid-row--gutters">
	          <div className="fr-col-12 fr-col-lg-12">      	       
	            <h3 className="fr-mb-3w">Ma recherche </h3>
	          </div>
	        </div>

	        <div className="fr-grid-row fr-grid-row--gutters">
	          	<div className="fr-col-12 fr-col-lg-4">
				
					<div className="fr-select-group">
						<label htmlFor="indicateur" className="fr-label" >Je souhaite visualiser l'indicateur</label> 
						<select className="fr-select" name="search_indicateur" id="indicateur" onChange={handleChange} required>
							{indicateurs.map((indicateur, index) => (
				              <option key={index} value={indicateur.name}>{indicateur.name} - {indicateur.description}</option>
				            ))}
						</select>
					</div>
				</div>
				<div className="fr-col-12 fr-col-lg-4">
					<div className="fr-select-group">
						<label htmlFor="choixservice" className="fr-label" >Concernant les </label>
						<select className="fr-select" name="type_structure" id="choixservice" onChange={handleChangeStructure}>					
				            <option value="Service">Services Exécutants</option>
				            <option value="Ministere">Ministères</option>
				            <option value="Bloc">Organisation financière</option>
				            <option value="Type">Type de service</option>		            
						</select>
					</div>
				</div>

				<div className="fr-col-12 fr-col-lg-4">
					<div className="fr-select-group">
					<label htmlFor="choix" className="fr-label" >Ma recherche concerne </label>
					{ showSe ? 
					<div className="form_checkbox">
			            <Autocomplete
					      multiple
					      limitTags={1}
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
					      limitTags={1}
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

					{ showBloc ? 
					<div className="form_checkbox">	
			            <Autocomplete
					      multiple
					      limitTags={1}
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
					        <TextField {...params} label="Recherchez une Organisation" placeholder="Ajoutez un Organisation" />
					      )}
					    />
			        </div>
					: null}

					{ showType ? 
					<div className="form_checkbox">	
			            <Autocomplete
					      multiple
					      id="checkboxes-tags-demo"
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
					        <TextField {...params} label="Recherchez un type de service" placeholder="Ajoutez un type" />
					      )}
					    />
			        </div>
					: null}
					
					</div>
				</div>
			</div>
		<div className="fr-grid-row fr-grid-row--gutters">
			<div className="fr-col-12 fr-col-lg-4">
	            <div className="fr-select-group">
	              <label htmlFor="region" className="fr-label" >Afficher les services de la région </label>
	              <select className="fr-select" id="region" name="regions" onChange={ handleChange} >
	                    <option value="ALL">Toutes les régions</option>  
	                    { regions.map((region, index) => (
	                      <option key={index} value={region}>{region}</option>   
	                      ))            
	                    }
	              </select>
	            </div>
          	</div>

	        <div className="fr-col-12 fr-col-lg-4">
				<div className="fr-select-group">
				<label htmlFor="structure" className="fr-label" >Afficher </label>
	            <select className="fr-select" name="type_structure" id="structure" onChange={handleChange} >  
	                    <option value="ALL">Toutes les structures</option>
	                    <option value="CSP">CSP</option>
	                    <option value="SFACT">SFACT</option>
	                    <option value="CGF">CGF</option>             
	            </select>
	            </div>
	        </div>
	        <div className="fr-col-12 fr-col-lg-4">
				<div className="fr-select-group">
				<label htmlFor="se" className="fr-label" >Afficher les services exécutants de </label>
				<select className="fr-select" name="effectif" id="se" onChange={handleChange} >
					<option value="200">Tous les effectifs</option>
					<option value="101">Plus de 100 Utilisateurs Chorus</option>
                    <option value="100">Entre 50 et 100 Utilisateurs Chorus</option>
                    <option value="50">Entre 10 et 50 Utilisateurs Chorus</option>
                    <option value="10">Entre 5 et 10 Utilisateurs Chorus</option>
                    <option value="5">Moins de 5 Utilisateurs Chorus</option>  	            
				</select></div>
			</div>  
	    </div>

	    </div>
	    
	    );

};
