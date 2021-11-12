import React from "react";
import { Link } from "react-router-dom";

export default ({indicateur_n}) => {

    return (
    <div className="indicateurs_infos_box" >
    	
      {indicateur_n.map((indicateur, index) => (
        <div key={index}>
        <div className="box_etiquette">
          <div className="titre_etiquette">Indicateur {indicateur.name}</div>
          <div className="d12"></div>
          <div className="texte_etiquette">{indicateur.description}</div>
          <div className="d12"></div>
          <div className="texte_etiquette">Information à afficher : {indicateur.type_indicateur}</div>
          <div className="d12"></div>
          <div className="texte_etiquette">Unité : {indicateur.unite}</div>
          <div className="d12"></div>
          <div className="texte_etiquette italic">Méthode de calcul : {indicateur.calcul}</div>
          <div className="d12"></div>
          <div className="texte_etiquette">Remarques principales : {indicateur.remarque}</div>
        </div>
        <div className="d24"></div>
        </div>
      ))}
	 
    </div>
    
    );
};

