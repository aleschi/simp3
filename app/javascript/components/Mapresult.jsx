import React from "react";


export class Mapresult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            service_ex: this.props.service_ex,
        }
    }
    componentDidUpdate(prevProps) {
      if (this.props.service_ex !== prevProps.service_ex) {
        this.setState({service_ex: this.props.service_ex});
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
            <div className="texte_etiquette">Ministère :{service_executant.ministere_id}</div>
            <div className="d12"></div>
            <div className="texte_etiquette">X agents</div>
            <div className="d12"></div>
            <div className="texte_etiquette">Dernières données reçues</div>
        </div>
        </div>
        ))}
    </div>
    );
    }
}

export default Mapresult;