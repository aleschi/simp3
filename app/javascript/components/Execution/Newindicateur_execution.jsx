import React from "react";

import Dropzone from 'react-dropzone';
import Moment from 'moment';

class Newindicateur_execution extends React.Component {
        constructor() {
          super();
          this.onDrop = (files) => {
            this.setState({files})
          };
          this.state = {
            files: [],
            loading: false,
            date_fichier: false,
          };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    const url = "/api/v1/indicateur_executions/new";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ date_fichier: response.date_fichier }))
      .catch(error => console.log(error.message));
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
          .then(response => window.location.href = "/cartographie_performance")
          .catch(error => console.log(error.message));
    }


    render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name}
      </li>
    ));
    const acceptedfiles = {
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
  }

        return (
        

        <div className="fr-container pr">    
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 fr-col-lg-8">
            <h1 className="fr-my-5w">Ajouter un fichier </h1>
            { this.state.date_fichier ? 
                <p className="fr-mb-5w">Mois importés : {this.state.date_fichier.map((date,index) => (
                  <span key={index}>{Moment(date).locale("fr").format('MMMM YYYY')} ; </span>
                ))}</p>          
            : null }


              { this.state.loading ? <div><p className="fr-my-5w text-center">Chargement des données en cours.. Cela peut prendre quelques minutes. </p> <div className="loader_box"><div className ="loader"></div></div></div> : 
                <div className="fr-mb-5w">
                <form onSubmit={this.handleSubmit}> 
                 <Dropzone maxFiles={1} accept={acceptedfiles} onDrop={this.onDrop}>
                  {({getRootProps, getInputProps}) => (
                    <div className="document-file-input" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div><span className="fr-fi-add-circle-fill cbleu" aria-hidden="true"></span></div>
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
                  <div><button type="submit" className="fr-btn">Envoyer</button></div>
                </form>               
              
                </div>
              }
             </div>
            </div>
        </div>
     
        
        );
    }
}
export default Newindicateur_execution;
