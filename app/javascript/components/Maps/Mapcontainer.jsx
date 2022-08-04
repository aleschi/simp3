import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Mapresult from "./Mapresult";
const mapStyles = {
	  width: '100%',
	  height: '500px',

	};
import iconR from '../../../assets/images/icon_lieu_rouge.svg';
import iconJ from '../../../assets/images/icon_lieu_jaune.svg';
import iconV from '../../../assets/images/icon_lieu_vert.svg';
import iconN from '../../../assets/images/icon_lieu_noir.svg';
import iconG from '../../../assets/images/icon_lieu_gris.svg';


const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.country", "elementType": "labels", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [ { "visibility": "on" }, { "saturation": "-22" }, { "lightness": "-17" }, { "gamma": "1.48" } ] }, { "featureType": "administrative.province", "elementType": "geometry", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.locality", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "visibility": "on" }, { "hue": "#00b3ff" }, { "saturation": "66" }, { "lightness": "43" }, { "gamma": "5.99" }, { "weight": "4.75" } ] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape.natural.landcover", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 }, { "visibility": "off" } ] }, { "featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.local", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#efefef" }, { "visibility": "on" } ] } ]


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
        return <Marker key={index} id={result.id} icon={iconV} name={result.libelle} optimized={false} position={{
         lat: result.latitude,
         lng: result.longitude
        }}
        onClick={this.props.onMarkerClick2} />
        }
        else if(this.props.secolor[result.id] == "jaune"){
        return <Marker key={index} id={result.id} icon={iconJ} name={result.libelle} optimized={false} position={{
         lat: result.latitude,
         lng: result.longitude
        }}
        onClick={this.props.onMarkerClick2} />
        }
        else if(this.props.secolor[result.id] == "rouge"){
        return <Marker key={index} id={result.id} icon={iconR} name={result.libelle} optimized={false} position={{
         lat: result.latitude,
         lng: result.longitude
        }}
        onClick={this.props.onMarkerClick2} />
        }
        else if (this.props.secolor[result.id] == "noir"){
        return <Marker key={index} id={result.id} icon={iconG} name={result.libelle} optimized={false} position={{
         lat: result.latitude,
         lng: result.longitude
        }}
        onClick={this.props.onMarkerClick2} />
        }
        else {
        return <Marker key={index} id={result.id} icon={iconG} name={result.libelle} optimized={false} position={{
         lat: result.latitude,
         lng: result.longitude
        }}
        onClick={this.props.onMarkerClick2} />
        }
      })

    };

    displayLegend = () => {
     
      if (this.props.indicateur_n.length == 0){
        return <div><div className="map_legende">
            <span className="mapicon"><img src={iconR} alt="icone map vert" /> Performance Globale {'\u003C'} 60% </span>
            <span className="mapicon"><img src={iconJ} alt="icone map orange" /> 60% {'\u003C'}  Performance Globale {'\u003C'} 80% </span>
            <span className="mapicon"><img src={iconV} alt="icone map rouge" /> 80% {'\u003C'} Performance Globale </span> 
            <span className="mapicon"><img src={iconG} alt="icone map gris" /> Pas de valeur </span>
        </div><div className="d12"></div><div className="map_legende"><span>1 marqueur = 1 service exécutant</span></div></div>
      }else{
        return this.props.indicateur_n.map((result, index) => { 
        
          if (result.seuil_1 != null) {
            if (result.name == 'IB4 - 2' || result.name == 'IB4 - 3' || result.name == 'IB4 - 4'){
              return <div key={index}>
              <div className="map_legende">
                <span className="mapicon"><img src={iconR} alt="icone map rouge" /> Indicateur {result.name} {'\u003C'} {result.seuil_1}{result.unite}  </span>
                <span className="mapicon"><img src={iconJ} alt="icone map orange" /> {result.seuil_1}{result.unite} {'\u003C'}  Indicateur {result.name} {'\u003C'} {result.seuil_2}{result.unite} </span>
                <span className="mapicon"><img src={iconV} alt="icone map vert" /> {result.seuil_2}{result.unite} {'\u003C'} Indicateur {result.name} </span>
                <span className="mapicon"><img src={iconG} alt="icone map gris" /> Pas de valeur </span>
              </div>
              <div className="d12"></div><div className="map_legende"><span>1 marqueur = 1 service exécutant</span></div>
              </div>
            }
            else{
              return <div key={index}>
              <div className="map_legende">
                <span className="mapicon"><img src={iconV} alt="icone map vert" /> Indicateur {result.name} {'\u003C'} {result.seuil_1}{result.unite}  </span>
                <span className="mapicon"><img src={iconJ} alt="icone map orange" /> {result.seuil_1}{result.unite} {'\u003C'}  Indicateur {result.name} {'\u003C'} {result.seuil_2}{result.unite} </span>
                <span className="mapicon"><img src={iconR} alt="icone map rouge" /> {result.seuil_2}{result.unite} {'\u003C'} Indicateur {result.name} </span>
                <span className="mapicon"><img src={iconG} alt="icone map gris" /> Pas de valeur </span>
              </div>
              <div className="d12"></div><div className="map_legende"><span>1 marqueur = 1 service exécutant</span></div>
              </div>
            }
          } else {
            return <div key={index}>
              <div className="d12"></div><div className="map_legende"><span className="mapicon"><img src={iconG} alt="icone map legende" />  1 marqueur = 1 service exécutant</span></div>
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

            { this.props.resetloc ? 
            <div className="map">           
              <Map
                google={this.props.google}
                zoom={this.props.zoom}
                style={mapStyles}
                streetViewControl={false}
                mapTypeControl={false}
                initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
                center={{lat: this.props.lat, lng: this.props.lng}}
                onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                          
              >         
              {this.displayMarkers()}                
              </Map>
            </div>
            :
            <div className="map">           
              <Map
                google={this.props.google}
                zoom={this.props.zoom}
                style={mapStyles}
                streetViewControl={false}
                mapTypeControl={false}
                initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
              
                onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}

              >         
              {this.displayMarkers()}                
              </Map>

            </div>
            }
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
         { this.props.showResults ? <Mapresult service_executant={this.props.service_executant} indicateur_executions={this.props.indicateur_executions} performance={this.props.performance} onCloseInfo={this.props.onCloseInfo} startDate={this.props.startDate} /> : null }
        </div>
      </div>
      );
   }
}
export default GoogleApiWrapper({
       apiKey: ('AIzaSyCBEVHq2EbsHz4m37nb6nG-Fh-5PxK5o98'),
       language: 'fr',
     
})(Mapcontainer)


