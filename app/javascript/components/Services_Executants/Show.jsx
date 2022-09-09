import React,{ useState } from "react";


class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {      
          service_executants: [],     
        };
        this.handleChange = this.handleChange.bind(this);          
    }
    componentDidMount() {
      const url = "/simp3/api/v1/service_executants/show";
      fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ service_executants: response.service_executants, }))
      .catch(error => console.log(error.message));
    }

    handleChange(event) {
        const url = "/simp3/api/v1/service_executants/liste_se";

        const service_executants = event.target.value;

        const body = {
          service_executants
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
      .then(response => this.setState({ service_executants: response.service_executants}))
      .catch(error => console.log(error.message));
    }

  

    
    render() {
    
    return (
    
    <div>
 
        <div className="fr-container pr">    
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-12">
              <h1 className="fr-my-5w">Liste des services exécutants</h1>
            </div>
          </div>

          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-6 fr-col-offset-lg-3">
              <div className="fr-search-bar" id="header-search" role="search">
                <label className="fr-label" htmlFor="search-784-input">
                   Recherche
                </label>
                <input className="fr-input" placeholder="Entrer le nom d'un service exécutant" type="search" id="search-784-input" name="search-784-input" onChange={this.handleChange} />
                <button className="fr-btn" title="Rechercher">
                    Entrer le nom d'un service exécutant
                </button>
              </div>
            </div>
          </div>

          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-12">
        
              { this.state.service_executants.length > 0 ?
              <div className="fr-table fr-my-2w fr-table--no-caption">
              <table>
                 <caption>Liste des services exécutants</caption>
                  <thead>
                      <tr>
                          <th scope="col">Code</th>
                          <th scope="col">Libellé</th>
                          <th scope="col">Ministère</th>
                          <th scope="col">Type de structure</th>
                          <th scope="col">Effectifs</th>
                          <th scope="col">Région</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.state.service_executants.map((service, index) => (
                        <tr key={index}><td>{service.code}</td><td>{service.libelle}</td><td>{ service.ministere.name}</td><td>{service.type_structure}</td><td>{(service.effectif < 5) && <span> Moins de 5</span> }{(service.effectif < 10 && service.effectif >= 5) && <span> Entre 5 et 10</span> } {(service.effectif < 50 && service.effectif >= 10) && <span> Entre 10 et 50</span> }{(service.effectif < 100 && service.effectif >= 50) && <span> Entre 50 et 100</span> }{(service.effectif >= 100) && <span> Plus de 100</span> }</td><td>{service.region}</td></tr>
                    ))}
                  
                  </tbody>
              </table>
              </div>

              : <div className="fr-my-4w fr-mb-12w">Aucun service éxecutant trouvé pour la recherche effectuée.</div> 
              }    
            </div>
          </div>             
        </div>
   
    </div>
    
    );
  }
}
export default Show;