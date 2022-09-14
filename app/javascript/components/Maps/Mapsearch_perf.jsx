import React from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ handleChange, handleChangeI, handleSubmit, indicateurs, showSe, showMinistere, showBloc, autoCompleteList,regions}) => {
	
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
						<label htmlFor="indicateur" className="fr-label" >Indicateur</label> 
						<select className="fr-select" name="search_indicateur" id="indicateur" onChange={handleChangeI} required>
							{indicateurs.map((indicateur, index) => (
				              <option key={index} value={indicateur.name}>{indicateur.name} - {indicateur.description}</option>
				            ))}
						</select>
					</div>
				</div>
				<div className="fr-col-12 fr-col-lg-4">
		            <div className="fr-select-group">
		              <label htmlFor="region" className="fr-label" >Région </label>
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
						<label htmlFor="choixservice" className="fr-label" >Secteur </label>
						<select className="fr-select" name="secteur" id="choixservice" onChange={handleChange}>					
				            <option value="Service">Service Exécutant</option>
				            <option value="Ministere">Ministère</option>
				            <option value="Bloc">Organisation financière</option>
				            
						</select>
					</div>
				</div>

				
			</div>
		<div className="fr-grid-row fr-grid-row--gutters">
			

	        <div className="fr-col-12 fr-col-lg-4">
				<div className="fr-select-group">
				<label htmlFor="structure" className="fr-label" >Type de structure </label>
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
				<label htmlFor="se" className="fr-label" >Effectifs</label>
				<select className="fr-select" name="effectif" id="se" onChange={handleChange} >
					<option value="200">Tous les effectifs</option>
					<option value="101">Plus de 100 Utilisateurs Chorus</option>
                    <option value="100">Entre 50 et 100 Utilisateurs Chorus</option>
                    <option value="50">Entre 10 et 50 Utilisateurs Chorus</option>
                    <option value="10">Entre 5 et 10 Utilisateurs Chorus</option>
                    <option value="5">Moins de 5 Utilisateurs Chorus</option>  	            
				</select></div>
			</div>  

			<div className="fr-col-12 fr-col-lg-4">
					
					
					{ showSe ? 
					<div className="fr-select-group">
						<div className="fr-label" >Rechercher </div>
						<div className="form_checkbox">
				            <Autocomplete
						      multiple
						      limitTags={1}
						      noOptionsText={'Aucune option'}
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
			        </div>
					
					: null}

					{ showMinistere ? 
					<div className="fr-select-group">
						<div className="fr-label" >Rechercher </div>
						<div className="form_checkbox">	
				            <Autocomplete
						      multiple
						      limitTags={1}
							  noOptionsText={'Aucune option'}
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
			        </div>
					: null}

					{ showBloc ? 
					<div className="fr-select-group">
						<div className="fr-label" >Rechercher</div>
						<div className="form_checkbox">	
				            <Autocomplete
						      multiple
						      limitTags={1}
							  noOptionsText={'Aucune option'}
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
			        </div>
					: null}
									
				</div>
	    </div>

	    </div>
	    
	    );

};
