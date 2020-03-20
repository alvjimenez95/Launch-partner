import React from 'react'


export default function UserCard (props){
	return(
		  <div className="row">
		    
		      <div className="card hoverable">
		        <div className="card-image">
		          <img className="circle responsive-img" src={ "./uploads/" + props.user.profilePic}  />
		          <span className="card-title">{props.user.name}</span>
		        </div>
		        <div className="card-content">
		          <p>{props.user.profile}
			   
				    </p>
		         
		        </div>

		        <div className="lime card-action">
		          <button className="btn-floating" onClick={() => props.handleEditUser(props.user)} >
		         	 <i className="material-icons">edit</i>
		          </button>
		          <button className="btn-floating pl-2"onClick={() => props.handleDeleteUser(props.user._id)} >
		          	<i className="material-icons">delete</i>
		          </button>
		        </div>
		      </div>
		    
		  </div>
		)
}