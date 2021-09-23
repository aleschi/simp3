import React from "react";
import logoUrl from '../../assets/images/logo_ministere.png';

const Header = () => (
	<div>
	  <div className="logo_header">
	    <img src={logoUrl} alt="DB" />
	  </div>
	  <div className="nav_header_box">
	  	<div className="nav_header">
	  		<div className="nav_link nav_link_active"><a>La carte </a></div>
	  		<div className="nav_link"><a>Suivi des indicateurs</a></div>
	  	</div>
	  </div>
    </div>
);

export default Header;


