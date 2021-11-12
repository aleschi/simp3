import React from "react";


export default ({autoCompleteResults,autoCompleteList, getAutoCompleteResults,term,csp, sfact,cgf,handleChange,handleChangeStructure, showSe, showMinistere, showType, showBloc}) => {
	
    return (
    <div className="map_box">
        <div className="align_flex">
          <div className="map_se"><span>{csp}</span><br/>CSP</div>
            <div className="map_se"><span>{sfact}</span><br/>SFACT</div>
            <div className="map_se"><span>{cgf}</span><br/>CGF</div>
      
        </div>
        <div className="d24"></div>
        <div className="box_etiquette">
          <form>
            <div className="texte_etiquette formw">Je souhaite afficher un 
            <select name="type_structure" onChange={handleChangeStructure}>         
                <option value="Service">Service Exécutant</option>
                <option value="Ministere">Ministère</option>
                <option value="Bloc">Organisation financière</option>
                <option value="Type">Type de service</option>                
            </select></div>
            <div className="d12"></div>
            

            { showSe ?
            <div>
            <div className="form"><input className="search_bar" value={term} onChange={ getAutoCompleteResults} type='text' name="search_service_executants" placeholder='Recherchez un service exécutant' /></div> 
            <div className="search_results">
              <div className="titre_etiquette">Liste des services exécutants ({autoCompleteList.length}) </div>
              <div className="d12"></div>
              {autoCompleteList.map((response, index) => {
                return <div key={index}>
                  <button className="list_name" onClick={getAutoCompleteResults} name="search_service_executants" value={response.libelle} >{response.libelle}</button>
                </div> 
              })}
            </div>
            </div>
            : null }

            { showMinistere ?
            <div>
            <div className="form"><input className="search_bar" onChange={ getAutoCompleteResults} type='text' name="search_ministeres" placeholder='Recherchez un ministère' /></div> 
            <div className="search_results">
              <div className="titre_etiquette">Liste des Ministères ({autoCompleteList.length})</div>
              <div className="d12"></div>
              {autoCompleteList.map((response, index) => {
                return <div key={index}>
                  <button className="list_name" onClick={getAutoCompleteResults} name="search_ministeres" value={response.name} >{response.name}</button>
                </div> 
              })}
            </div>
            </div>
            : null }

            { showBloc ?
            <div>
            <div className="form"><input className="search_bar" onChange={ getAutoCompleteResults} type='text' name="search_blocs" placeholder='Recherchez un ministère' /></div> 
            <div className="search_results">
              <div className="titre_etiquette">Liste des Organisations financières ({autoCompleteList.length})</div>
              <div className="d12"></div>
              {autoCompleteList.map((response, index) => {
                return <div key={index}>
                  <button className="list_name" onClick={getAutoCompleteResults} name="search_blocs" value={response.name} >{response.name}</button>
                </div> 
              })}
            </div>
            </div>
            : null }

            { showType ?
            <div>
            <div className="form"><input className="search_bar" onChange={ getAutoCompleteResults} type='text' name="search_types" placeholder='Recherchez un type de service' /></div> 
            <div className="search_results">
              <div className="titre_etiquette">Liste des Types de Service ({autoCompleteList.length})</div>
              <div className="d12"></div>
              {autoCompleteList.map((response, index) => {
                return <div key={index}>
                  <button className="list_name" onClick={getAutoCompleteResults} name="search_types" value={response.name} >{response.name}</button>
                </div> 
              })}
            </div>
            </div>
            : null }

            <div className="d12"></div>
            <div className="texte_etiquette formw">Afficher uniquement les
            <select name="type_structure" onChange={ getAutoCompleteResults} >  
                    <option value="ALL">Toutes les structures</option>
                    <option value="CSP">CSP</option>
                    <option value="SFACT">SFACT</option>
                    <option value="CGF">CGF</option>             
            </select></div>

            <div className="d12"></div>
            <div className="texte_etiquette formw">Afficher les SE de moins de 
            <select name="effectif" onChange={ getAutoCompleteResults} >  
                    <option value="200">200 personnes</option>
                    <option value="100">100 personnes</option>
                    <option value="50">50 personnes</option>
                    <option value="10">10 personnes</option>
                    <option value="5">5 personnes</option>                
            </select></div>
            
        	</form>  
        </div>   
    </div>
    );

}

