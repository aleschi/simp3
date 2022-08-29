import React from "react";
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
          {(indicateur.seuil_1 != null) && <p className="fr-text--sm fr-mb-1w">Objectif à atteindre : {(indicateur.name == "IC1" || indicateur.name == "IB4 - 3") ? <span>Plus de {indicateur.seuil_2}{indicateur.unite}</span> : <span>Moins de {indicateur.seuil_1}{indicateur.unite}</span>}</p>}
          <p className="fr-text--sm">Méthode de calcul : {indicateur.calcul}</p>
          
        </div>
       
        </div>
      ))}
	 
    </div>
    
    );
};

