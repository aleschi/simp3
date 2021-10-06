import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

   deleteIndicateur() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/indicateurs/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/indicateurs"))
      .catch(error => console.log(error.message));
  }

   render() {
    const { indicateurs } = this.state;
    const allIndicateurs = indicateurs.map((indicateur, index) => (
      <div key={index}>
        <div className="col-md-12">
              <div>{indicateur.name}</div>
              <div>{indicateur.description}</div>
              <div>
              <button type="button" className="" onClick={this.deleteIndicateur}>
                Supprimer
              </button>
        </div>
        </div>
        <div className="d24"></div>
      </div>
    ));
    const noIndicateur = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <div>
           <Link to="/indicateurs/new">Ajouter un indicateur</Link>
        </div>
      </div>
    );

    return (
      <>
      <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-12 ">
              <h1 className="display-4">Liste des indicateurs ({indicateurs.length})</h1>
              <div className="d24"></div> 
              <div className="">
                <Link to="/indicateurs/new" className="bouton">
                  Ajouter un indicateur
                </Link>
              </div>
              <div className="d24"></div> 
              <div>
                {indicateurs.length > 0 ? allIndicateurs : noIndicateur}
              </div>
              <div className="d24"></div> 
            </div>            
          </div>
        </div>
      <Footer />
      </>
    );
  }
}
export default Indicateurs;
