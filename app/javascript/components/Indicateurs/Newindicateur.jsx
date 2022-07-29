import React from "react";

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
          .then(response => window.location.href = "/indicateurs")
          .catch(error => console.log(error.message));
    }

    render() {
  
        return (
        

        <div className="fr-container">    
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-12">
              <h1 className="fr-my-5w">Ajouter un fichier </h1>
              <div className="fr-mb-5w">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Envoyer un fichier :
                    <input type="file" ref={this.fileInput} name="file" accept='.xlsx' onChange={this.changeHandler}/>
                  </label>
                  <br />
                  <button type="submit" className="fr-btn mt-3">Envoyer</button>
                </form>
              </div>
                
            </div>
          </div>
        </div>
   
      
        );
    }
}
export default Newindicateur;
