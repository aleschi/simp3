import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mapcontainer from "../components/Mapcontainer";
import Mapresult from "../components/Mapresult";
import Mapsearch from "../components/Mapsearch";
import Chart from "../components/Chart";

class Home extends React.Component {
  render() {
    return (
    <div>
        <Header /> 
        <div className="map_component">
        <Mapsearch />
        <Mapcontainer /> 
        <Mapresult />
        </div>
  
        <Footer />    
    </div>
    
    );
  }
}
export default Home;
