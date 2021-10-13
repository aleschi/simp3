import React from "react";


export default ({autoCompleteResults,getAutoCompleteResults,term}) => {
	
    return (
    <div className="map_box">
        <div className="align_flex">
          <div className="map_se"><span>X</span><br/>CSP</div>
          <div className="map_se"><span>X</span><br/>SFACT</div>
          <div className="map_se"><span>X</span><br/>CGF</div>
          <div className="map_se"><span>X</span><br/>Comptables</div>
        </div>
        <div className="d24"></div>
        <div className="form">
          <input className="search_bar" value={ term } onChange={ getAutoCompleteResults} type='text' placeholder='Recherchez un service exécutant' />
          <div className="search_results">
            <div className="titre_etiquette">Liste des services exécutants</div>
            <div className="d12"></div>
            {autoCompleteResults.map((response, index) => {
              return <div key={index}>
                {response.libelle}
              </div> 
            })}
          </div>
      	</div>     
    </div>
    );

}

