import React from "react";



class Newservice_executant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          file_csv: null,
          se: [],
          se_empty: [],
          regions: [],
          se_regions_vide: [],
          se_lat_vide: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount() {
    const url = "/api/v1/service_executants/se_empty";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ se_empty: response.se_empty, se: response.se, regions: response.regions, se_regions_vide: response.se_regions_vide, se_lat_vide: response.se_lat_vide  }))
      .catch(() => this.props.history.push("/"));
    }

    changeHandler(event){
      this.setState({ file_csv: event.target.files[0] });
    };

    handleSubmit(event) {
      event.preventDefault();
        const url = "/api/v1/service_executants/import_ministere";
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
  
        return (
        <div>

        <div className="fr-container pr">    
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-lg-8">
            <h1 className="fr-my-5w">Ajouter un fichier </h1>
            <div className="fr-mb-5w">
            <div>{this.state.se.length}</div>
            <div>{this.state.se_empty.length}</div>
            <div>Régions: {this.state.regions}</div>
            {this.state.se_empty.map((se, index) => (
            <div key={index}>{se.libelle}</div>
            ))}
            </div>
            <div>SE régions empty :{this.state.se_regions_vide}</div>
            <div>SE lat empty :{this.state.se_lat_vide}</div>
            <div className="fr-mb-5w">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Envoyer un fichier :
                    <input type="file" ref={this.fileInput} name="file" accept='.xlsx' onChange={this.changeHandler}/>
                  </label>
                  <br />
                  <div><button type="submit" className="fr-btn">Envoyer</button></div>
                </form>
            </div>
                
            </div>
          </div>
        </div>
        
        </div>
        );
    }
}
export default Newservice_executant;
