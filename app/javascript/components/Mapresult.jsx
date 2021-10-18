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
render() {

    return (
    <div className="map_infos">
        {this.state.service_ex.map((service_executant, index) => (
        <div key={index}>
        <div className="box_etiquette">
            <div className="titre_etiquette text-center">{service_executant.libelle}</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Ministère : {service_executant.ministere.name}</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Type : {service_executant.type_service.name}</div>
            <div className="d12"></div>
            <div className="texte_etiquette"><b>{service_executant.effectif}</b> agents</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Dernières données reçues</div>
            <div className="d12"></div>
            <div>
                {this.state.indicateur_executions.map((indicateur_execution, index) => (
                <div key={index} className="texte_etiquette">{indicateur_execution.indicateur.name} : {indicateur_execution.valeur} {indicateur_execution.indicateur.unite} ({indicateur_execution.date})</div>
                ))}
            </div>
        </div>
        </div>
        ))}
    </div>
    );
    }
}

export default Mapresult;