import React from "react";

import Header from "../Header";
import Footer from "../Footer";

class Newindicateur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          file_csv: null,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event){
      this.setState({ file_csv: event.target.files[0] });
    };

    handleSubmit(event) {
      event.preventDefault();
        const url = "/api/v1/indicateurs/import";
        const formData = new FormData();

        formData.append('file', this.state.file_csv);

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          
          body: formData
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
    console.log(this.state.file_csv);
        return (
        <div>
        <Header />
        <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                 Ajouter un fichier 
                </h1>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Envoyer un fichier :
                    <input type="file" ref={this.fileInput} name="file" accept='.csv' onChange={this.changeHandler}/>
                  </label>
                  <br />
                  <button type="submit" className="bouton mt-3">Envoyer</button>
                </form>
                <div className="d24"></div>
                <div className="d24"></div>
                
              </div>
            </div>
        </div>
        <Footer />
        </div>
        );
    }
}
export default Newindicateur;
