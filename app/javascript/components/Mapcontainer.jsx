import React from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Mapresult from "../components/Mapresult";
const mapStyles = {
	  width: '45%',
	  height: '400px',

	};
const imager = {
                          path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
                          fillColor: '#42BAB3',
                          fillOpacity: 1,
                          scale: 0.5,
                          strokeColor: '#42BAB3',
                          strokeWeight: 1,
                        };
const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.country", "elementType": "labels", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [ { "visibility": "on" }, { "saturation": "-22" }, { "lightness": "-17" }, { "gamma": "1.48" } ] }, { "featureType": "administrative.province", "elementType": "geometry", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.locality", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "visibility": "on" }, { "hue": "#00b3ff" }, { "saturation": "66" }, { "lightness": "43" }, { "gamma": "5.99" }, { "weight": "4.75" } ] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape.natural.landcover", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 }, { "visibility": "off" } ] }, { "featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.local", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#efefef" }, { "visibility": "on" } ] } ]


export class Mapcontainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            autoCompleteResults: this.props.autoCompleteResults,
            service_ex: this.props.service_executant,
            indicateur_executions: [],
            showResults: false,
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
            startDate: new Date(),
        }
        this.handledateChange = this.handledateChange.bind(this);
   
    }
    componentDidUpdate(prevProps) {
      if (this.props.autoCompleteResults !== prevProps.autoCompleteResults) {
        this.setState({autoCompleteResults: this.props.autoCompleteResults});
      }
    }
    
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

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
      .then(response => this.setState({ service_ex: response.service_executant, showResults: true, indicateur_executions: response.indicateur_executions}))
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
      return <Marker key={index} id={result.id} icon={imager} name={result.libelle} position={{
       lat: result.latitude,
       lng: result.longitude
     }}
     onClick={this.onMarkerClick2} />
    })
    };

    handledateChange(event){
      this.setState({ startDate: event});

      const url = "/api/v1/service_executants/date_update";
        const token = document.querySelector('meta[name="csrf-token"]').content;
        const startDate = event;
        const service_ex = this.state.service_ex;
        const indicateur_executions = this.state.indicateur_executions
        const body = {
          startDate,indicateur_executions,service_ex
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
      .then(response => this.setState({ service_ex: response.service_executant, indicateur_executions: response.indicateur_executions}))
      .catch(error => console.log(error.message));
    }

    

    render() {
    
      return (
        <div className="map_map align_flex">
        <div className="map_center">
          <div>
            <div className="texte_etiquette">Date <i className="fas fa-caret-down"></i></div>
            <div><DatePicker locale="fr" selected={this.state.startDate} maxDate={new Date()} onChange= {this.handledateChange} dateFormat="MMMM yyyy" showMonthYearPicker /></div>
          </div>
          <div className="d12"></div>
          <div className="map">
  	        <Map
  	          google={this.props.google}
  	          zoom={5}
  	          style={mapStyles}
  	          
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
          <div className="d12"></div>
          <div className="map_legende">
          <span><i className="fas fa-map-marker cvert"></i> Indicateur {'\u003C'} Seuil 1 </span>
          <span><i className="fas fa-map-marker cjaune"></i> Seuil 1 {'\u003C'}  Indicateur {'\u003C'} Seuil 2 </span>
          <span><i className="fas fa-map-marker crouge"></i> Seuil 2 {'\u003C'} Indicateur </span>
          </div>
        </div>
        
         { this.state.showResults ? <Mapresult service_ex={this.state.service_ex} indicateur_executions={this.state.indicateur_executions}/> : null }
        </div>
      );
   }
}
export default GoogleApiWrapper({
       apiKey: ('AIzaSyCzB6sn07VIK_DzRsbm87THvZtEO1qPaNg'),
     
})(Mapcontainer)


