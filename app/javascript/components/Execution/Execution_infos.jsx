import React from "react";
import { Link } from "react-router-dom";

export default ({indicateur_n}) => {

    return (
    <div>
    	
      {indicateur_n.map((indicateur, index) => (
        <div key={index}>
        <div className="fr-callout fr-fi-information-line">
          <p className="fr-callout__title">Indicateur {indicateur.name}</p>
          <p className="fr-callout__text">
          {indicateur.description}</p>
          <p className="fr-callout__text">Unité : {indicateur.type_indicateur} en {indicateur.unite}</p>
          <p className="fr-callout__text fr-hidden">Méthode de calcul : {indicateur.calcul}</p>
          <p className="fr-callout__text fr-hidden">Remarques principales : {indicateur.remarque}</p>
          <button className="fr-btn fr-hidden">Accéder à la liste des indicateurs</button>
        </div>
        <div className="d24"></div>
        </div>
      ))}
	 
    </div>
    
    );
};

