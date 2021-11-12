import React from "react";


export class Mapresult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            service_ex: this.props.service_ex,
            indicateur_executions: this.props.indicateur_executions
        }
    }
    componentDidUpdate(prevProps) {
      if (this.props.service_ex !== prevProps.service_ex) {
        this.setState({service_ex: this.props.service_ex, indicateur_executions: this.props.indicateur_executions});
      }
    }
    displayInd = () => {
    return this.state.indicateur_executions.map((indicateur_execution, index) => {
    if (indicateur_execution.valeur == null ){
    return <span key={index}  className="box_indn">{indicateur_execution.indicateur.name} : X {indicateur_execution.indicateur.unite} </span>
    }
    else if (indicateur_execution.valeur <= indicateur_execution.indicateur.seuil_1 ){
      return <span key={index}  className="box_indv">{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} </span>
     }
     else if(indicateur_execution.valeur > indicateur_execution.indicateur.seuil_1 && indicateur_execution.valeur < indicateur_execution.indicateur.seuil_2 ){
     return <span key={index}  className="box_indj">{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} </span>

     }
     else if(indicateur_execution.valeur >= indicateur_execution.indicateur.seuil_2 ){
      return <span key={index}  className="box_indr">{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} </span>
     }
     else {
     return <span key={index}  className="box_indn">{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} </span>
     }
    })

    };
render() {

    return (
    <div className="map_infos">
        {this.state.service_ex.map((service_executant, index) => (
        <div key={index}>
        <div className="box_etiquette">
            <div><button className="button_close" onClick={this.props.onCloseInfo}><i className="far fa-times-circle"></i></button></div>
            <div className="titre_etiquette text-center">{service_executant.libelle}</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Ministère : {service_executant.ministere.name}</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Type de service : {service_executant.type_service.name}</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Organisation Financière : {service_executant.organisation_financiere.name}</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Type de structure : {service_executant.type_structure}</div>
            <div className="d12"></div>
            <div className="texte_etiquette"><b>{service_executant.effectif}</b> agents</div>
            <div className="d12"></div>
            <div className="align_flex">
                <div className="box_infor">5 EJ</div><div className="box_infor">3 SF</div><div className="box_infor">1 DP</div>
            </div>
            <div className="d12"></div>
            <div className="texte_etiquette">Dernières données reçues </div>
            <div className="d12"></div>
            <div>
                {this.displayInd()} 
              
            </div>
        </div>
        </div>
        ))}
    </div>
    );
    }
}

export default Mapresult;