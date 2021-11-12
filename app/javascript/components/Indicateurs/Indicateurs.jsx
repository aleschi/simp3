import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

class Indicateurs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicateurs: []
    };
  }

  componentDidMount() {
      const url = "/api/v1/indicateurs/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ indicateurs: response.data1 }))
        .catch(() => this.props.history.push("/"));
  }


   render() {

    const noIndicateur = (
        <div className="texte_etiquette">Aucun indicateur</div>  
    );

    return (
      <>
      <Header />
      
      <div className="pd24">    
  
        {this.state.indicateurs.length > 0 ?  
        <div className="table" >
          <table className="table-striped">
            <thead>
              <tr>
                <th scope="col">Indicateur</th>
                <th scope="col">Libellé</th>
                <th scope="col">Type</th>
                <th scope="col">Unité</th>
                <th scope="col">Seuil 1</th>
                <th scope="col">Seuil 2</th>
              </tr>
            </thead>

            <tbody>
              {this.state.indicateurs.map((indicateur, index) => (
              <tr key={index}><td>{indicateur.name}</td><td>{indicateur.description}</td><td>{indicateur.type_indicateur}</td><td>{indicateur.unite}</td><td>{indicateur.seuil_1}</td><td>{indicateur.seuil_2}</td></tr>
                ))}
              </tbody>
          </table>
          </div>
            : noIndicateur }
       
          <div className="d24"></div> 
        </div>
      <Footer />
      </>
    );
  }
}
export default Indicateurs;
