import React from "react";


export default ({autoCompleteResults,getAutoCompleteResults,term}) => {
	
    return (
    <div className="map_box">
        <div className="form">
        <input value={ term } onChange={ getAutoCompleteResults} type='text' placeholder='Search...' />
        {autoCompleteResults.map((response, index) => {
          return <div key={index}>
            {response.libelle}
          </div>
        })}
      	</div>     
    </div>
    );

}

