import React from "react";
import logoUrl from '../../assets/images/logo_ministere2.svg';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'react-bootstrap';

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
		<div>
		  	<div className="logo_header">
		    	<img src={logoUrl} alt="DB" />
		  	</div>
		  	<div className="nav_header_box">
			  	<div className="nav_header">
			  		<div className="nav_link"><NavLink exact to='/' activeClassName="nav_link nav_link_active">Cartographie des services exécutants</NavLink></div>
			  		<div className="nav_link"><NavLink exact to='/cartographie_performance' activeClassName="nav_link nav_link_active">Cartographie des performances</NavLink></div>
			  		<div className="nav_link"><NavLink exact to='/indicateur_executions' activeClassName="nav_link nav_link_active">Suivi des indicateurs</NavLink></div>
			  		<div className="nav_link"><NavLink exact to='/indicateurs' activeClassName="nav_link nav_link_active">Liste des indicateurs</NavLink></div>
			  		
			  		
			  		
			  		
			  		<Dropdown className="user_dropdown">
			  			<Dropdown.Toggle  className="user_dropdown_button"><i className="fas fa-user-circle"></i></Dropdown.Toggle>
			  			<Dropdown.Menu className="">
			  				{this.state.isAdmin ? <div className="nav_link"><Link to='/indicateur_executions/new'>Ajouter un document</Link></div> : null }
			  				{this.state.isLoggedIn ? <div className="nav_link"><a rel="nofollow" data-method="delete" href="/logout" >Se déconnecter</a></div> : null }
			  			</Dropdown.Menu>
			  		</Dropdown>

			  	</div>
		  	</div>
	    </div>
    );
    }
}

export default Header;


