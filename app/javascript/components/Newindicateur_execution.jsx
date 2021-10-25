import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropzone from 'react-dropzone';


class Newindicateur_execution extends React.Component {
        constructor() {
          super();
          this.onDrop = (files) => {
            this.setState({files})
          };
          this.state = {
            files: []
          };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
      event.preventDefault();
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
        <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                 Ajouter un fichier 
                </h1>
                <form onSubmit={this.handleSubmit}>
                
                  
                
               <Dropzone accept='.xlsx' onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                  <div className="document-file-input" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div><i className="fas fa-plus-circle"></i></div>
                    <div className="d24"></div>
                    <div> Glissez vos fichiers ici</div> 
                    <div className="d12"></div>
                    <div className="tu">Télécharger depuis votre appareil</div>
                    <div>{files}</div>
                  </div>
                )}
              </Dropzone>
                <button type="submit" className="bouton mt-3">Envoyer</button>
                </form>
                
                <div className="d24"></div>
              </div>
            </div>
        </div>
        <Footer />
        </div>
        );
    }
}
export default Newindicateur_execution;
