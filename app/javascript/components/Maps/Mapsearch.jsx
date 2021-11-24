import React from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({autoCompleteResults,autoCompleteList,csp, sfact,cgf,handleSubmit, handleChange,handleChangeStructure, showSe, showMinistere, showType, showBloc}) => {
	
    return (
    <div className="map_box">
        <div className="align_flex">
          <div className="map_se"><span>{csp}</span><br/>CSP</div>
            <div className="map_se"><span>{sfact}</span><br/>SFACT</div>
            <div className="map_se"><span>{cgf}</span><br/>CGF</div>
      
        </div>
        <div className="d24"></div>
        <div className="box_etiquette">
            <div className="titre_etiquette text-center">Ma recherche </div>
            <div className="d12"></div>
            <div className="texte_etiquette formw">Je souhaite afficher un 
            <select name="type_structure" onChange={handleChangeStructure}>         
                <option value="Service">Service Exécutant</option>
                <option value="Ministere">Ministère</option>
                <option value="Bloc">Organisation financière</option>
                <option value="Type">Type de service</option>                
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

            

            

            <div className="d12"></div>
            <div className="texte_etiquette formw">Afficher
            <select name="type_structure" onChange={ handleChange} >  
                    <option value="ALL">Toutes les structures</option>
                    <option value="CSP">CSP</option>
                    <option value="SFACT">SFACT</option>
                    <option value="CGF">CGF</option>             
            </select></div>

            <div className="d12"></div>
            <div className="texte_etiquette formw">Afficher les SE de
            <select name="effectif" onChange={ handleChange} >  
                    <option value="200">Tous les effectifs</option>
                    <option value="100">Moins de 100 Utilisateurs Chorus</option>
                    <option value="50">Moins de 50 Utilisateurs Chorus</option>
                    <option value="10">Moins de 10 Utilisateurs Chorus</option>
                    <option value="5">Moins de 5 Utilisateurs Chorus</option>                
            </select></div>
            
        </div>   
    </div>
    );

}

