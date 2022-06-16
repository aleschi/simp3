import React from "react";
import Moment from 'moment';

export class Mapresult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            service_ex: this.props.service_ex,
            indicateur_executions: this.props.indicateur_executions,
            showind: 0,
            startDate: this.props.startDate,
            performance: this.props.performance,
        }
        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
    }
    componentDidUpdate(prevProps) {
      if (this.props.service_ex !== prevProps.service_ex) {
        this.setState({service_ex: this.props.service_ex, indicateur_executions: this.props.indicateur_executions, performance: this.props.performance});
      }
    }
    handlePopoverOpen(event){   
      this.setState({ showind: event.target.id}); 
    }
    handlePopoverClose(event){
      this.setState({showind: 0});
    }

    displayInd = () => {
    if (this.state.indicateur_executions.length == 0){
    return  <div className="fr-text--sm fr-mb-3v">Aucune donnée pour ce mois-ci</div>
    }
    else {
    return this.state.indicateur_executions.map((indicateur_execution, index) => {
    if (indicateur_execution.valeur == null){
      return <p key={index} className="fr-badge fr-mr-0-5v fr-mb-0-5v pr" id={indicateur_execution.indicateur.id}  onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : X {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
    }
    else if (indicateur_execution.valeur == null || indicateur_execution.indicateur.seuil_1 == null){
      return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
    }
    else if (indicateur_execution.point == 3 ){
      return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--green-emeraude pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
     }
     else if(indicateur_execution.point == 2 ){
     return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--yellow-tournesol pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>

     }
     else if(indicateur_execution.point == 1 ){
      return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--pink-tuile pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
     }
     else {
     return <p key={index}  className="fr-badge fr-mr-0-5v pr" id={indicateur_execution.indicateur.id}  onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
     }
    })
    }

    };
render() {
 
    return (
    <div className="fr-my-3w">
        {this.state.service_ex.map((service_executant, index) => (
        <div key={index}>
          <div className="fr-card fr-card--no-arrow fr-card-pointer">
            <div className="fr-card__body fr-pb-0">
              <div><button className="fr-btn--close fr-btn fr-link" onClick={this.props.onCloseInfo}>Fermer</button></div>
              <div className="fr-card__content">
              <h3 className="fr-card__title card_title">{service_executant.libelle}</h3>
              
              <div className="fr-text--sm fr-mb-3v">Ministère : {service_executant.ministere.name}</div>
             
              <div className="fr-text--sm fr-mb-3v">Type de service : {service_executant.type_service.name}</div>
             
              <div className="fr-text--sm fr-mb-3v">Organisation Financière : {service_executant.organisation_financiere.name}</div>
      
              <div className="fr-text--sm fr-mb-3v">Type de structure : {service_executant.type_structure}</div>
            
              <div className="fr-text--sm fr-mb-3v"><b>{service_executant.effectif}</b> utilisateurs Chorus</div>

              <div className="fr-text--sm fr-mb-3v">Performance globale du service : {this.state.performance}</div>
            
              <div className="fr-text--sm fr-mb-3v"><b>Valeurs des indicateurs sur le mois ({Moment(this.state.startDate).format('MM/YYYY')}) </b></div>
             
              <div className="fr-mb-3w">
                  {this.displayInd()} 
                
              </div>
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>
    );
    }
}

export default Mapresult;