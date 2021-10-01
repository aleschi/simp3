import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chart from "../components/Chart";
import Execution_search from "../components/Execution_search";
import Execution_table from "../components/Execution_table";
import Execution_infos from "../components/Execution_infos";

class Execution extends React.Component {
  render() {
    return (
    <div>
        <Header /> 
        <div className="indicateurs_component">
            <Execution_search />
            <div className="indicateurs_chart_box">
                <Chart/>
                <Execution_table />
            </div>
            <Execution_infos />
        </div>
        <Footer />    
    </div>
    
    );
  }
}
export default Execution;
