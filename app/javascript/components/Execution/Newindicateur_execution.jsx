import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Dropzone from 'react-dropzone';


class Newindicateur_execution extends React.Component {
        constructor() {
          super();
          this.onDrop = (files) => {
            this.setState({files})
          };
          this.state = {
            files: [],
            loading: false,
          };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true });

        const url = "/api/v1/indicateur_executions/import";
        const formData = new FormData();

        formData.append('file', this.state.files[0]);

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
          .then(response => this.props.history.push(`/`))
          .catch(error => console.log(error.message));
    }


    render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name}
      </li>
    ));


        return (
        <div>
        <Header />
        <div className="d32"></div>
            <div className="row loader_box">
              <div className="col-sm-12 col-lg-6 offset-lg-3">

              { this.state.loading ? <div className="loader_box"><div className="texte_etiquette text-center">Chargement des données en cours.. Cela peut prendre quelques minutes. </div><div className="d24"></div> <div className ="loader"></div></div> : 
                <div>
                <h1 className="font-weight-normal mb-5 text-center">
                 Ajouter un fichier 
                </h1>
                <form onSubmit={this.handleSubmit}> 
                 <Dropzone accept='.xlsx' onDrop={this.onDrop}>
                  {({getRootProps, getInputProps}) => (
                    <div className="document-file-input" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div><i className="fas fa-plus-circle"></i></div>
                      <div className="d24"></div>
                      <div className="cgris"> Glissez votre fichier ici</div> 
                      <div className="d12"></div>
                      <div className="tu cgris">Ou téléchargez-le depuis votre appareil</div>
                      <div className="d12"></div>
                      <div className="texte_light cgris">(fichier .xlsx uniquement)</div>
                      <div>{files}</div>
                    </div>
                  )}
                  </Dropzone>
                  <div className="text-center"><button type="submit" className="bouton">Envoyer</button></div>
                </form>               
                <div className="d32"></div>
                </div>
              }
              </div>
            </div>
      
        <Footer />
        </div>
        );
    }
}
export default Newindicateur_execution;
