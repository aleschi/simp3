import React from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({autoCompleteResults,autoCompleteList,handleSubmit, handleChange,handleChangeStructure, showSe, showMinistere, showType, showBloc}) => {
	
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
              <label htmlFor="choixservice" className="fr-label" >Je souhaite afficher un </label>
              <select className="fr-select"  name="type_structure" id="choixservice" onChange={handleChangeStructure}>         
                  <option value="Service">Service Exécutant</option>
                  <option value="Ministere">Ministère</option>
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

              { showBloc ? 
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

          <div className="fr-col-12 fr-col-lg-4">
            <div className="fr-select-group">
              <label htmlFor="structure" className="fr-label" >Afficher </label>
              <select className="fr-select" id="structure" name="type_structure" onChange={ handleChange} >  
                      <option value="ALL">Toutes les structures</option>
                      <option value="CSP">CSP</option>
                      <option value="SFACT">SFACT</option>
                      <option value="CGF">CGF</option>             
              </select>
            </div>
          </div>
        </div>

        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 fr-col-lg-4">
            <div className="fr-select-group">
              <label htmlFor="se" className="fr-label" >Afficher les SE de </label>
              <select className="fr-select" id="se" name="effectif" onChange={ handleChange} >  
                      <option value="200">Tous les effectifs</option>
                      <option value="101">Plus de 100 Utilisateurs Chorus</option>
                      <option value="100">Entre 50 de 100 Utilisateurs Chorus</option>
                      <option value="50">Entre 10 de 50 Utilisateurs Chorus</option>
                      <option value="10">Entre 5 et 10 Utilisateurs Chorus</option>
                      <option value="5">Moins de 5 Utilisateurs Chorus</option>                
              </select>
            </div>
          </div>
        </div>
            
    
    </div>
    );

}

