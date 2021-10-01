import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Newindicateur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          description: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/indicateurs/create";
        const { name, description } = this.state;

    if (name.length == 0)
      return;

    const body = {
      name,
      description
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
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
      .then(response => this.props.history.push(`/indicateurs`))
      .catch(error => console.log(error.message));
  }
    render() {
        return (
        <div>
        <Header />
        <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Ajouter un indicateur
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form">
                    <label htmlFor="recipeName">Nom</label>
                    <input
                      type="text"
                      name="name"
                      id="indicateurName"
                      
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="d24"></div>
                  <div className="form">
                  <label htmlFor="description">Description</label>
                  <textarea
                  
                    id="description"
                    name="description"
                    rows="5"
                    required
                    onChange={this.onChange}
                  />
                  </div>
                  <div className="d24"></div>
                  <button type="submit" className="bouton mt-3">
                    Ajouter
                  </button>
                  <div className="d24"></div>
                 
                </form>
              </div>
            </div>
        </div>
        <Footer />
        </div>
        );
    }
}
export default Newindicateur;
