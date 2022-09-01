import React from "react";
import Moment from 'moment';

export class Mapresult extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            showind: 0,           
        }
        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
    }

    handlePopoverOpen(event){   
      this.setState({ showind: event.target.id}); 
    }
    handlePopoverClose(event){
      this.setState({showind: 0});
    }

    displayInd = () => {
      if (this.props.indicateur_n.length == 0){

        if (this.props.indicateur_executions.length == 0){
          return  <div className="fr-text--sm fr-mb-3v">Aucune donnée pour ce mois-ci</div>
        } else {
        return this.props.indicateur_executions.map((indicateur_execution, index) => {
          if (indicateur_execution.valeur == null){
            return <p key={index} className="fr-badge fr-mr-0-5v fr-mb-0-5v pr" id={indicateur_execution.indicateur.id}  onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : X {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
          }
          else if (indicateur_execution.point == 3 ){
            return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--green-emeraude pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
           }
           else if(indicateur_execution.point == 2 ){
           return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--yellow-tournesol pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>

           }
           else if(indicateur_execution.point == 1 ){
            return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--error fr-badge--no-icon pr " id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
           }
           else {
           return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--blue-ecume pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
           }
        })
        }
      }
      else {
        if (this.props.indicateur_executions.filter(indicateur_execution => indicateur_execution.indicateur.id == this.props.indicateur_n[0].id).length == 0){
          return  <div className="fr-text--sm fr-mb-3v">Aucune donnée sur cet indicateur pour ce mois-ci</div>
        }else{
        return this.props.indicateur_executions.filter(indicateur_execution => indicateur_execution.indicateur.id == this.props.indicateur_n[0].id).map((indicateur_execution, index) => {
          if (indicateur_execution.valeur == null){
            return <p key={index} className="fr-badge fr-mr-0-5v fr-mb-0-5v pr" id={indicateur_execution.indicateur.id}  onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : X {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
          }
          else if (indicateur_execution.point == 3 ){
            return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--green-emeraude pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
           }
           else if(indicateur_execution.point == 2 ){
           return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--yellow-tournesol " id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>

           }
           else if(indicateur_execution.point == 1 ){
            return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--error fr-badge--no-icon pr " id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose} >{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
           }
           else {
           return <p key={index}  className="fr-mr-0-5v fr-mb-0-5v fr-badge fr-badge--blue-ecume pr" id={indicateur_execution.indicateur.id} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>{indicateur_execution.indicateur.name} : {Math.round(indicateur_execution.valeur * 100) / 100} {indicateur_execution.indicateur.unite} { (this.state.showind==indicateur_execution.indicateur.id) ? <span className="box_ind_hover">{indicateur_execution.indicateur.name}: {indicateur_execution.indicateur.description}</span> : null }</p>
           }
        })
        }
      }
    };

render() {
 
    return (
    <div className="fr-my-3w">
        {this.props.service_executant.map((service_executant, index) => (
        <div key={index}>
          <div className="fr-card fr-card--no-arrow fr-card-pointer">
            <div className="fr-card__body fr-pb-0">
              <div className="tr"><button className="fr-btn--close fr-btn fr-link" onClick={this.props.onCloseInfo}>Fermer</button></div>
              <div className="fr-card__content">
              <h3 className="fr-card__title card_title">{service_executant.libelle}</h3>
              
              <div className="fr-text--sm fr-mb-3v">Ministère : {service_executant.ministere.name}</div>
             
              <div className="fr-text--sm fr-mb-3v">Organisation Financière : {service_executant.organisation_financiere.name}</div>
      
              <div className="fr-text--sm fr-mb-3v">Type de structure : {service_executant.type_structure}</div>
            
              <div className="fr-text--sm fr-mb-3v">Utilisateurs Chorus : 
              {(service_executant.effectif < 5) && <span> Moins de 5</span> }{(service_executant.effectif < 10 && service_executant.effectif >= 5) && <span> Entre 5 et 10</span> } {(service_executant.effectif < 50 && service_executant.effectif >= 10) && <span> Entre 10 et 50</span> }{(service_executant.effectif < 100 && service_executant.effectif >= 50) && <span> Entre 50 et 100</span> }{(service_executant.effectif >= 100) && <span> Plus de 100</span> }</div>

              <div className="fr-text--sm fr-mb-3v">Performance globale du service : {(this.props.performance < 60) && <span className="fr-badge fr-badge--error fr-badge--no-icon" > {this.props.performance}%</span>}{(this.props.performance >= 60 && this.props.performance < 80) && <span className="fr-badge fr-badge--yellow-tournesol" > {this.props.performance}%</span>}
              {(this.props.performance >= 80) && <span className="fr-badge fr-badge--green-emeraude" > {this.props.performance}%</span>}</div>
            
              <div className="fr-text--sm fr-mb-3v"><b>{(this.props.indicateur_n.length == 0) ? <span>Valeurs des indicateurs</span> : <span>Valeur de l'indicateur</span>} sur le mois ({Moment(this.props.startDate).format('MM/YYYY')}) </b></div>
             
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