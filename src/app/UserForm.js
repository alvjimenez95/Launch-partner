import React from 'react'


export default function UserForm(props){

	return(
		<div className="container">
			<form className="col s12 m4" 
				onSubmit={(props._id==="")? props.handleAddUser : props.handleUpdateUser}>
		      <div className="row">
		        <div className="input-field col s12 ">
		          <input name="name" type="text" onChange={props.handleChange} value={props.name}/>
		          <label className="active" htmlFor="name">Name</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <textarea name="profile" className="materialize-textarea" onChange={props.handleChange} value={props.profile}/>
		          <label className="active" htmlFor="profile">profile</label>
		        </div>
		      </div>
		      <div className="row">
		          <div className="file-field input-field">
				      <div className="btn">
				        <span>Profile Pic <i className="material-icons right">camera_alt</i></span>
				        <input type="file" name="profilepic" accept="image/*" onChange={props.handleUpload} />
				      </div>
				      <div className="file-path-wrapper">
        					<input className="file-path validate" type="text"/>
      				  </div>
				   </div>
		      </div>
		      <div className="row">
		      	{(props._id ==="") ? 
		      	<button className="btn waves-effect waves-light lime" type="submit" >
		      		Submit
		      		<i className="material-icons right">send</i>
		      	</button>
		      	:
		      	<button className="btn waves-effect waves-light lime" type="submit" >
		      		Edit
		      		<i className="material-icons right">edit</i>
		      	</button>
		      	}
		      	<button className="btn waves-effect waves-light red" type="cancel" >
		      		Cancel
		      		<i className="material-icons right">clear</i>
		      	</button>
		      </div>
			</form>
		</div>
		)
}