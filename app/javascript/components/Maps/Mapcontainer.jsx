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
        this.state = {
            autoCompleteResults: this.props.autoCompleteResults,
            service_ex: this.props.service_executant,
            secolor: this.props.secolor,
            indicateur_n: this.props.indicateur_n,
            indicateur_executions: [],
            showResults: false,
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
            startDate: this.props.startDate,
            maxDate: this.props.maxDate,
            csp: this.props.csp,
            sfact: this.props.sfact,
            cgf: this.props.cgf,
            performance: null,
        }
      this.onCloseInfo = this.onCloseInfo.bind(this);  
   
    }
    componentDidUpdate(prevProps) {
      if (this.props.autoCompleteResults !== prevProps.autoCompleteResults) {
        this.setState({autoCompleteResults: this.props.autoCompleteResults});
      }
      if (this.props.service_ex !== prevProps.service_ex) {
        this.setState({service_ex: this.props.service_ex});
      }
      if (this.props.secolor !== prevProps.secolor) {
        this.setState({secolor: this.props.secolor});
      }
      if (this.props.indicateur_n !== prevProps.indicateur_n) {
        this.setState({indicateur_n: this.props.indicateur_n});
      }
      if (this.props.cgf !== prevProps.cgf) {
      this.setState({cgf: this.props.cgf});
      }
      if (this.props.sfact !== prevProps.sfact) {
      this.setState({sfact: this.props.sfact});
      }
      if (this.props.csp !== prevProps.csp) {
      this.setState({csp: this.props.csp});
      }
      if (this.props.startDate !== prevProps.startDate) {
      this.setState({startDate: this.props.startDate});
      }
    }
    
    onCloseInfo(event) {
    this.setState({ showResults: false });
    }

    onMarkerClick2= (props, marker, e) => { 
       
   
        const url = "/api/v1/service_executants/search_marker?q=" + props.id;
        const token = document.querySelector('meta[name="csrf-token"]').content;
        const startDate = this.state.startDate;
        const body = {
          startDate
        };
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
        body: JSON.stringify(body)
        })
        .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ service_ex: response.service_executant, showResults: true, indicateur_executions: response.indicateur_executions, performance: response.performance}))
      .catch(error => console.log(error.message));
       
    };

    onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
    };
  
    _mapLoaded(mapProps, map) {
        map.setOptions({
        styles: mapStyle
        })
    };

    displayMarkers = () => {
    return this.state.autoCompleteResults.map((result, index) => {
      if (this.state.secolor[result.id] == "vert"){
      return <Marker key={index} id={result.id} icon={iconV} name={result.libelle} position={{
       lat: result.latitude,
       lng: result.longitude
     }}
     onClick={this.onMarkerClick2} />
     }
     else if(this.state.secolor[result.id] == "jaune"){
     return <Marker key={index} id={result.id} icon={iconJ} name={result.libelle} position={{
       lat: result.latitude,
       lng: result.longitude
     }}
     onClick={this.onMarkerClick2} />

     }
     else if(this.state.secolor[result.id] == "rouge"){
      return <Marker key={index} id={result.id} icon={iconR} name={result.libelle} position={{
       lat: result.latitude,
       lng: result.longitude
     }}
     onClick={this.onMarkerClick2} />
     }
     else if (this.state.secolor[result.id] == "bleu"){
      return <Marker key={index} id={result.id} icon={iconB} name={result.libelle} position={{
       lat: result.latitude,
       lng: result.longitude
     }}
     onClick={this.onMarkerClick2} />
     }
     else if (this.state.secolor[result.id] == "noir"){
      return <Marker key={index} id={result.id} icon={iconG} name={result.libelle} position={{
       lat: result.latitude,
       lng: result.longitude
     }}
     onClick={this.onMarkerClick2} />
     }
     else {
     return <Marker key={index} id={result.id} icon={iconG} name={result.libelle} position={{
       lat: result.latitude,
       lng: result.longitude
     }}
     onClick={this.onMarkerClick2} />
     }
    })

    };

   

    displayLegend = () => {
     
    if (this.state.indicateur_n.length == 0){
      return <div><div className="map_legende">
          <span className="mapicon"><img src={iconR} alt="icone map" /> Performance Globale {'\u003C'} 30 </span>
          <span className="mapicon"><img src={iconJ} alt="icone map" /> 30 {'\u003C'}  Performance Globale {'\u003C'} 40 </span>
          <span className="mapicon"><img src={iconV} alt="icone map" /> 40 {'\u003C'} Performance Globale </span> 
          <span className="mapicon"><img src={iconG} alt="icone map" />Pas de valeur </span>
      </div><div className="d12"></div><div className="map_legende"><span>1 marqueur = 1 service exécutant</span></div></div>
    }else{
      return this.state.indicateur_n.map((result, index) => { 
      
        if (result.seuil_1 != null) {
        if (result.name == 'IB4 - 2' || result.name == 'IB4 - 3' || result.name == 'IB4 - 4'){
          return <div key={index}>

         <div className="map_legende">
          <span className="mapicon"><img src={iconR} alt="icone map" /> Indicateur {result.name} {'\u003C'} {result.seuil_1}{result.unite}  </span>
          <span className="mapicon"><img src={iconJ} alt="icone map" /> {result.seuil_1}{result.unite} {'\u003C'}  Indicateur {result.name} {'\u003C'} {result.seuil_2}{result.unite} </span>
          <span className="mapicon"><img src={iconV} alt="icone map" /> {result.seuil_2}{result.unite} {'\u003C'} Indicateur {result.name} </span>
          <span className="mapicon"><img src={iconG} alt="icone map" /> Pas de valeur </span>
        </div>
        <div className="d12"></div><div className="map_legende"><span>1 marqueur = 1 service exécutant</span></div>
        </div>
        }
        else{
         return <div key={index}>

         <div className="map_legende">
          <span className="mapicon"><img src={iconV} alt="icone map" /> Indicateur {result.name} {'\u003C'} {result.seuil_1}{result.unite}  </span>
          <span className="mapicon"><img src={iconJ} alt="icone map" /> {result.seuil_1}{result.unite} {'\u003C'}  Indicateur {result.name} {'\u003C'} {result.seuil_2}{result.unite} </span>
          <span className="mapicon"><img src={iconR} alt="icone map" /> {result.seuil_2}{result.unite} {'\u003C'} Indicateur {result.name} </span>
          <span className="mapicon"><img src={iconG} alt="icone map" /> Pas de valeur </span>
        </div>
        <div className="d12"></div><div className="map_legende"><span>1 marqueur = 1 service exécutant</span></div>
        </div>
        }
      } else {
        return <div key={index}>

          <div className="d12"></div><div className="map_legende"><span><span className="fr-icon-map-pin-2-fill cgris fr-fi--sm" aria-hidden="true"></span> 1 marqueur = 1 service exécutant</span></div>
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
            <div className="map_se"><span>{this.state.csp}</span><br/>CSP</div>
            <div className="map_se"><span>{this.state.sfact}</span><br/>SFACT</div>
            <div className="map_se"><span>{this.state.cgf}</span><br/>CGF</div>    
          </div>
        </div>
        <div className="fr-col-12 fr-col-lg-8">
          <div className="map_map">        
            <div className="map_date_box">
             
              <div><DatePicker locale="fr" selected={this.state.startDate} maxDate={this.state.maxDate} minDate={new Date(2022,0,1)} onChange= {this.props.handleSubmitDate} dateFormat="MMMM yyyy" showMonthYearPicker /></div>
            </div>
            <div className="d12"></div>
            <div className="map">
    	        <Map
    	          google={this.props.google}
    	          zoom={5}
    	          style={mapStyles}
    	          streetViewControl={false}
                mapTypeControl={false}
    	          initialCenter={{ lat: 48.52, lng: 2.19}}
    	          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
    	        >
    	        {this.displayMarkers()}  
    	        
    	        <InfoWindow
    	          marker={this.state.activeMarker}
    	          visible={this.state.showingInfoWindow}
    	          onClose={this.onClose}
    	        >
    	          <div>
    	            <h4>{this.state.selectedPlace.name}</h4>
    	          </div>
    	        </InfoWindow>
    	        </Map>
            </div>
            <div className="fr-my-3w">
            {this.displayLegend()} 
            </div>
          </div>
        </div>

        <div className="fr-col-12 fr-col-lg-4">
          <div className="fr-hidden fr-unhidden-sm">
          <div className="align_flex">
            <div className="map_se"><span>{this.state.csp}</span><br/>CSP</div>
            <div className="map_se"><span>{this.state.sfact}</span><br/>SFACT</div>
            <div className="map_se"><span>{this.state.cgf}</span><br/>CGF</div>    
          </div>
          </div>
         { this.state.showResults ? <Mapresult service_ex={this.state.service_ex} indicateur_executions={this.state.indicateur_executions} performance={this.state.performance} onCloseInfo={this.onCloseInfo} startDate={this.state.startDate} /> : null }
        </div>
      </div>
      );
   }
}
export default GoogleApiWrapper({
       apiKey: ('AIzaSyCBEVHq2EbsHz4m37nb6nG-Fh-5PxK5o98'),
     
})(Mapcontainer)


