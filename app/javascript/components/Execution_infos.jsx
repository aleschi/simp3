import React from "react";
import { Link } from "react-router-dom";

export default ({indicateurs, indicateur_n}) => {

    return (
    <div className="indicateurs_infos_box" >
    	
      {indicateur_n.map((indicateur, index) => (
        <div key={index}>
        <div className="box_classique">
          <div className="titre_etiquette">Indicateur {indicateur.name}</div>
          <div className="d12"></div>
          <div className="texte_etiquette">{indicateur.description}</div>
        </div>
        <div className="d24"></div>
        </div>
      ))}
	 
    </div>
    
    );
};

