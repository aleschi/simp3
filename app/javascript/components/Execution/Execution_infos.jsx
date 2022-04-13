import React from "react";
import { Link } from "react-router-dom";

export default ({indicateur_n}) => {

    return (
    <div>
    	
      {indicateur_n.map((indicateur, index) => (
        <div key={index}>
        <div className="fr-highlight fr-mb-3w">
          <p className="fr-text--lg fr-text--bold fr-mb-1w">Indicateur {indicateur.name}</p>
          <p className="fr-text--sm fr-mb-1w">
          {indicateur.description}</p>
          <p className="fr-text--sm fr-mb-1w">Unité : {indicateur.type_indicateur} en {indicateur.unite}</p>
          <p className="fr-text--sm">Méthode de calcul : {indicateur.calcul}</p>
          <p className="fr-text--sm fr-hidden">Remarques principales : {indicateur.remarque}</p>
          <button className="fr-btn fr-hidden">Accéder à la liste des indicateurs</button>
        </div>
       
        </div>
      ))}
	 
    </div>
    
    );
};

