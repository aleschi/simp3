import React from "react";
import logoUrl from '../../assets/images/logo_ministere.png';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
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
			  	</div>
		  	</div>
	    </div>
    );
    }
}

export default Header;


