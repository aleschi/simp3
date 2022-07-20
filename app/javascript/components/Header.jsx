import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	      isLoggedIn: false,
	      isAdmin: false,
	     };	    
	}
	
    componentDidMount() {
      const url = "/check_user_status";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ isLoggedIn: response.isLoggedIn, isAdmin: response.isAdmin }))
        .catch(() => this.props.history.push("/"));
  }


    render() {
    return (  
    	<header role="banner" className="fr-header">
		    <div className="fr-header__body">
		        <div className="fr-container">
		            <div className="fr-header__body-row">
		                <div className="fr-header__brand fr-enlarge-link">
		                    <div className="fr-header__brand-top">
		                        <div className="fr-header__logo">
		                            <p className="fr-logo">
		                                Ministère
                                		<br/>de l'économie,<br/>des finances<br/>et de la souveraineté<br/> industrielle et numérique
		                            </p>
		                        </div>
		                        <div className="fr-header__navbar">
		                            <button className="fr-btn--menu fr-btn fr-link" data-fr-opened="false" aria-controls="modal-833" aria-haspopup="menu" title="Menu" id="fr-btn-menu-mobile">
		                                Menu
		                            </button>
		                        </div>
		                    </div>
		                    <div className="fr-header__service">
		                        <Link to="/" title="Accueil - Datason | Direction du Budget">
		                            <p className="fr-header__service-title">SIMP3 <span className="fr-badge fr-badge--success fr-badge--no-icon">BETA</span></p>
		                        </Link>
		                        <p className="fr-header__service-tagline">Suivi des indicateurs MP3</p>
		                    </div>
		                </div>
		                <div className="fr-header__tools">
		                    <div className="fr-header__tools-links">
		                        <ul className="fr-links-group">
		                        	<li>
		                                <button className="fr-link fr-fi-theme-fill fr-link--icon-left" aria-controls="fr-theme-modal" data-fr-opened="false">Paramètres d'affichage</button>
		                            </li>
		                          
		                            <li className="fr-shortcuts__item">
		                                <a className="fr-link fr-fi-logout-box-r-line" data-method="delete" href="/logout">Se déconnecter</a>
		                            </li>
		                           
		                        </ul>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div className="fr-header__menu fr-modal" id="modal-833" aria-labelledby="fr-btn-menu-mobile">
		        <div className="fr-container">
		            <button className="fr-btn--close fr-link" aria-controls="modal-833">Fermer</button>
		            <div className="fr-header__menu-links">
		            	
		            </div>
		            <nav className="fr-nav" id="navigation-832" role="navigation" aria-label="Menu principal">
		                <ul className="fr-nav__list">
		                    <li className="fr-nav__item">
		                        <NavLink exact to='/' activeClassName="fr-nav__link" className="fr-nav__link" target="_self" >Cartographie de la performance globale</NavLink>
		                    </li>
		                    <li className="fr-nav__item">
		                        <NavLink exact to="/cartographie_performance" activeClassName="fr-nav__link" className="fr-nav__link" target="_self">Cartographie par indicateur</NavLink>
		                    </li>
		                    <li className="fr-nav__item">
		                        <NavLink exact to="/indicateur_executions" activeClassName="fr-nav__link" className="fr-nav__link" target="_self">Suivi temporel des indicateurs</NavLink>
		                    </li>
		                    <li className="fr-nav__item">
		                        <NavLink exact to="/indicateurs" activeClassName="fr-nav__link" className="fr-nav__link" target="_self">Liste des indicateurs</NavLink>
		                    </li>
		                </ul>
		            </nav>
		        </div>
		    </div>
		</header>

		
    );
    }
}

export default Header;


