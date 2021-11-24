import React from "react";


export class Mapresult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            service_ex: this.props.service_ex,
            indicateur_executions: this.props.indicateur_executions,
            showind: 0,
        }
        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
    }
    componentDidUpdate(prevProps) {
      if (this.props.service_ex !== prevProps.service_ex) {
        this.setState({service_ex: this.props.service_ex, indicateur_executions: this.props.indicateur_executions});
      }
    }
    handlePopoverOpen(event){   
      this.setState({ showind: event.target.id}); 
    }
    handlePopoverClose(event){
      this.setState({showind: 0});
    }

    displayInd = () => {
    return this.state.indicateur_executions.map((indicateur_execution, index) => {
    if (indicateur_execution.valeur == null ){
    return <span key={index}  className="box_indn" id={indicateur_execution.indicateur.id}  onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : X {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</span>
    }
    else if (indicateur_execution.valeur <= indicateur_execution.indicateur.seuil_1 ){
      return <span key={index}  className="box_indv" id={indicateur_execution.indicateur.id} onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</span>
     }
     else if(indicateur_execution.valeur > indicateur_execution.indicateur.seuil_1 && indicateur_execution.valeur < indicateur_execution.indicateur.seuil_2 ){
     return <span key={index}  className="box_indj" id={indicateur_execution.indicateur.id} onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</span>

     }
     else if(indicateur_execution.valeur >= indicateur_execution.indicateur.seuil_2 ){
      return <span key={index}  className="box_indr" id={indicateur_execution.indicateur.id} onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</span>
     }
     else {
     return <span key={index}  className="box_indn" id={indicateur_execution.indicateur.id}  onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</span>
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