
import React from 'react';


export default function MainNav() {
  return (
    <React.Fragment>
      <nav>
	    <div className="nav-wrapper lime lighten-1">
	      <a href="#!" className="brand-logo"><i className="material-icons">collections</i>Lauch Partner app</a>
	      <ul className="right">
	      	<li>
	      		<a href="#" ><i className="large material-icons">add_circle_outline</i>Add New User</a>
	      	</li>
	      </ul>
	    </div>
	  </nav>
    </React.Fragment>
  );
}