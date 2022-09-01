import React,{ useState }  from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GoogleMap,InfoWindow, Marker} from '@react-google-maps/api';

import Mapresult from "./Mapresult";
const mapStyles = {
	  width: '100%',
	  height: '500px',

	};
import iconR from '../../../assets/images/icon_lieu_rouge2.svg';
import iconJ from '../../../assets/images/icon_lieu_orange.svg';
import iconV from '../../../assets/images/icon_lieu_vert.svg';
import iconN from '../../../assets/images/icon_lieu_noir.svg';
import iconG from '../../../assets/images/icon_lieu_gris.svg';
import iconBl from '../../../assets/images/icon_bleu.svg';
import iconRB from '../../../assets/images/icon_lieu_rouge_big.svg';
import iconJB from '../../../assets/images/icon_lieu_orange_big.svg';
import iconVB from '../../../assets/images/icon_lieu_vert_big.svg';
import iconGB from '../../../assets/images/icon_lieu_gris_big.svg';
import iconBB from '../../../assets/images/icon_lieu_bleu_big.svg';


const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [ { "visibility": "off" }, { "saturation": "-22" }, { "lightness": "-17" }, { "gamma": "1.48" } ] }, { "featureType": "administrative.province", "elementType": "geometry", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.locality", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "visibility": "on" }, { "hue": "#00b3ff" }, { "saturation": "66" }, { "lightness": "43" }, { "gamma": "5.99" }, { "weight": "4.75" } ] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape.natural.landcover", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 }, { "visibility": "off" } ] }, { "featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.local", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#efefef" }, { "visibility": "on" } ] } ]

export class Mapcontainer extends React.Component {

    constructor(props){
        super(props);
    }
    _mapLoaded(mapProps, map) {
        map.setOptions({
          styles: mapStyle,
        })
    };

    displayMarkers = () => {
      
      return this.props.autoCompleteResults.map((result, index) => {
        if (this.props.secolor[result.id] == "vert"){
          var icon=iconV;
          var iconl=iconVB;
          var zindex = 4;
          var label = ""; 
        }
        else if(this.props.secolor[result.id] == "jaune"){
          var icon=iconJ;    
          var iconl=iconJB;   
          var zindex = 3;
          var label = ""; 
        }
        else if(this.props.secolor[result.id] == "rouge"){
          var icon=iconR;  
          var iconl=iconRB;  
          var zindex = 2; 
          var label = ""; 
        }
        else if (this.props.secolor[result.id] == "bleu"){
          var icon=iconBl; 
          var iconl=iconBB;    
          var zindex = 2; 
          var label = "";
        }
        else {
          var icon=iconG; 
          var iconl=iconGB; 
          var zindex = 1;  
          var label = "";  
        }
        return <Marker key={index} id={result.id} label={label} zIndex={zindex} icon={(result.id == this.props.hoverId || result.id == this.props.clickId) ? iconl : icon} optimized={false} position={{
         lat: result.latitude,
         lng: result.longitude
        }}
        onClick={() => {this.props.onMarkerClick2(result.id);} } 
        onMouseOver= {() => {this.props.MouseOver(result.id);} }
        onMouseOut = {this.props.MouseOut}
        />
      })

    };




    displayLegend = () => {
      if (this.props.indicateur_n.length == 0){
        var count_noir = this.props.csp + this.props.sfact + this.props.cgf - this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "rouge")).length - this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "jaune")).length - this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "vert")).length ;
      
        return <div>
        <div className="fr-grid-row fr-grid-row--gutters ">
          <div className="fr-col-3">
            <div className="fr-callout fr-callout--error fr-callout-legend">
              <p className="fr-callout__title fr-callout-text--error">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "rouge")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
              <p className="fr-callout__text fr-text--sm fr-callout-text--error">
                <span className="mapicon"><img src={iconR} alt="icone map rouge" /> Performance Globale {'\u003C'} 60% </span></p>
            </div>
          </div>
          <div className="fr-col-3">
            <div className="fr-callout fr-callout--yellow-tournesol fr-callout-legend">
              <p className="fr-callout__title fr-callout-text--yellow-tournesol">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "jaune")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
              <p className="fr-callout__text fr-text--sm fr-callout-text--yellow-tournesol">
                 <span className="mapicon"><img src={iconJ} alt="icone map orange" /> 60% {'\u003C'}  Performance Globale {'\u003C'} 80% </span></p>
            </div>
          </div>
          <div className="fr-col-3">
            <div className="fr-callout fr-callout--green-emeraude fr-callout-legend">
              <p className="fr-callout__title fr-callout-text--green-emeraude">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "vert")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
              <p className="fr-callout__text fr-text--sm fr-callout-text--green-emeraude">
                <span className="mapicon"><img src={iconV} alt="icone map vert" /> 80% {'\u003C'} Performance Globale </span> </p>
            </div>
          </div>
          <div className="fr-col-3">
            <div className="fr-callout fr-callout-legend">
              <p className="fr-callout__title">{count_noir}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
              <p className="fr-callout__text fr-text--sm">
                <span className="mapicon"><img src={iconG} alt="icone map gris" /> Pas de valeur sur les indicateurs</span></p>
            </div>
          </div>
        </div>
        </div>
      }else{
        return this.props.indicateur_n.map((result, index) => { 
        
          if (result.seuil_1 != null) {
            var count_noir = this.props.csp + this.props.sfact + this.props.cgf - this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "rouge")).length - this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "jaune")).length - this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "vert")).length ;
            if (result.name == 'IB4 - 3' || result.name == 'IC1'){
              return <div key={index}>
              <div className="fr-grid-row fr-grid-row--gutters ">
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout--error fr-callout-legend">
                    <p className="fr-callout__title fr-callout-text--error">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "rouge")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm fr-callout-text--error">
                      <span className="mapicon"><img src={iconR} alt="icone map rouge" /> Valeur indicateur {result.name} {'\u003C'} {result.seuil_1}{result.unite}  </span></p>
                  </div>
                </div>
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout--yellow-tournesol fr-callout-legend">
                    <p className="fr-callout__title fr-callout-text--yellow-tournesol">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "jaune")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm fr-callout-text--yellow-tournesol">
                       <span className="mapicon"><img src={iconJ} alt="icone map orange" /> {result.seuil_1}{result.unite} {'\u003C'}  Valeur indicateur {result.name} {'\u003C'} {result.seuil_2}{result.unite} </span></p>
                  </div>
                </div>
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout--green-emeraude fr-callout-legend">
                    <p className="fr-callout__title fr-callout-text--green-emeraude">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "vert")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm fr-callout-text--green-emeraude">
                      <span className="mapicon"><img src={iconV} alt="icone map vert" /> {result.seuil_2}{result.unite} {'\u003C'} Valeur indicateur {result.name}  </span> </p>
                  </div>
                </div>
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout-legend">
                    <p className="fr-callout__title">{count_noir}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm">
                      <span className="mapicon"><img src={iconG} alt="icone map gris" /> Pas de valeur sur l'indicateur</span></p>
                  </div>
                </div>
              </div>

              </div>
            }
            else{
              return <div key={index}>
              <div className="fr-grid-row fr-grid-row--gutters ">
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout--error fr-callout-legend">
                    <p className="fr-callout__title fr-callout-text--error">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "rouge")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm fr-callout-text--error">
                      <span className="mapicon"><img src={iconR} alt="icone map rouge" /> {result.seuil_2}{result.unite} {'\u003C'} Valeur indicateur {result.name} </span></p>
                  </div>
                </div>
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout--yellow-tournesol fr-callout-legend">
                    <p className="fr-callout__title fr-callout-text--yellow-tournesol">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "jaune")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm fr-callout-text--yellow-tournesol">
                       <span className="mapicon"><img src={iconJ} alt="icone map orange" /> {result.seuil_1}{result.unite} {'\u003C'}  Valeur indicateur {result.name} {'\u003C'} {result.seuil_2}{result.unite} </span></p>
                  </div>
                </div>
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout--green-emeraude fr-callout-legend">
                    <p className="fr-callout__title fr-callout-text--green-emeraude">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "vert")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm fr-callout-text--green-emeraude">
                      <span className="mapicon"><img src={iconV} alt="icone map vert" /> Valeur indicateur {result.name} {'\u003C'} {result.seuil_1}{result.unite}  </span> </p>
                  </div>
                </div>
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout-legend">
                    <p className="fr-callout__title">{count_noir}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm">
                      <span className="mapicon"><img src={iconG} alt="icone map gris" /> Pas de valeur sur l'indicateur</span></p>
                  </div>
                </div>
              </div>
            

              </div>
            }
          } else {
            var count_noir = this.props.csp + this.props.sfact + this.props.cgf - this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "bleu")).length ;
            return <div key={index}>
              <div className="fr-grid-row fr-grid-row--gutters ">              
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout--blue-ecume fr-callout-legend">
                    <p className="fr-callout__title fr-callout-text--blue-ecume ">{this.props.autoCompleteResults.filter(result => (this.props.secolor[result.id] == "bleu")).length}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm fr-callout-text--blue-ecume ">
                      <span className="mapicon"><img src={iconBl} alt="icone map bleu" /> Services avec valeur sur l'indicateur </span> </p>
                  </div>
                </div>
                <div className="fr-col-3">
                  <div className="fr-callout fr-callout-legend">
                    <p className="fr-callout__title">{count_noir}/{this.props.csp + this.props.sfact + this.props.cgf}</p>
                    <p className="fr-callout__text fr-text--sm">
                      <span className="mapicon"><img src={iconG} alt="icone map gris" /> Pas de valeur sur l'indicateur</span></p>
                  </div>
                </div>
              </div>
             
            </div>
          }
        })
      }
    
    }

 
    render() {
      
    
      return (
      <div className="fr-grid-row fr-grid-row--gutters fr-mt-4w">
        <div className="fr-col-12 fr-hidden-sm">
          <div className="align_flex">
            <div className="map_se"><span>{this.props.csp}</span><br/>CSP</div>
            <div className="map_se"><span>{this.props.sfact}</span><br/>SFACT</div>
            <div className="map_se"><span>{this.props.cgf}</span><br/>CGF</div>    
          </div>
        </div>
        <div className="fr-col-12 fr-col-lg-8">
          <div className="map_map">        
            <div className="map_date_box fr-select-group">    
              <label htmlFor="datep" className="fr-label" >Afficher le mois de </label>        
              <DatePicker className="fr-select" id="datep" locale="fr" selected={this.props.startDate} maxDate={this.props.maxDate} minDate={new Date(2022,0,1)} onChange= {this.props.handleSubmitDate} dateFormat="MMMM yyyy" showMonthYearPicker />
            </div>

             
            <div className="map"> 
              <GoogleMap
                mapContainerStyle={mapStyles}
                center={(this.props.resetloc) && {lat: this.props.lat, lng: this.props.lng} }
                zoom={this.props.zoom}
                options={{zoomControl:true,streetViewControl: false,styles: mapStyle, mapTypeControl: false, fullscreenControl: false, gestureHandling: "greedy"}}
                
              > 
              {this.displayMarkers()}       
              </GoogleMap>
            </div>
            
            
            <div className="fr-my-3w">
            {this.displayLegend()} 
            </div>
          </div>
        </div>

        <div className="fr-col-12 fr-col-lg-4">
          <div className="fr-hidden fr-unhidden-sm">
          <div className="align_flex">
            <div className="map_se"><span>{this.props.csp}</span><br/>CSP</div>
            <div className="map_se"><span>{this.props.sfact}</span><br/>SFACT</div>
            <div className="map_se"><span>{this.props.cgf}</span><br/>CGF</div>    
          </div>
          </div>
         { (this.props.showResults || this.props.showHover) ? <Mapresult indicateur_n={this.props.indicateur_n} service_executant={this.props.service_executant} indicateur_executions={this.props.indicateur_executions} performance={this.props.performance} onCloseInfo={this.props.onCloseInfo} startDate={this.props.startDate} /> : null }
        </div>
      </div>
      );
    }
}

export default React.memo(Mapcontainer);


