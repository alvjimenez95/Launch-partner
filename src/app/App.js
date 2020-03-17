import React from 'react'
import {render} from 'react-dom'
import MainNav from './MainNav'
import UserCard from './UserCard'
import UserForm from './UserForm'

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			users : [],
			_id:"",
			name : "",
			profile:"",
			profilepic:""
		}
		this.getUsers =this.getUsers.bind(this)
		this.addUser = this.addUser.bind(this)
		this.deleteUser =this.deleteUser.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.uploadFile = this.uploadFile.bind(this)

	}
	uploadFile(e){
		if(e.target.files != null){
			const formdata = new FormData()
			formdata.append("profilepic", e.target.files[0])
			fetch('api/upload',{
				method:'POST',
				body : formdata
			}).then(res=>res.json())
			.then(result=>{
				this.setState({profilepic:result.fileName})
				M.toast({html: 'File Uploaded!'})
			})
			.catch(err=>console.log(err))
		}
	}
	addUser(e){
		e.preventDefault()
		fetch('/api/users', {
        	method: 'POST',
        	body: JSON.stringify({"name":this.state.name, 
        						"profile":this.state.profile, 
        						"profilePic": this.state.profilepic}),
        	headers: {
          	'Accept': 'application/json',
          	'Content-Type': 'application/json'
        	}})
        .then(res=>res.json())
        .then(result=>{
        	console.log(result)
        	this.setState({profile:"",name:"",profilepic:""})
        	M.toast({html: 'User Added'});
        	this.getUsers()
        })
        .catch(err=>console.log(err))
	}
	deleteUser(_id){
		fetch('/api/users/' + _id, {
        	method: 'DELETE',
        	headers: {
          	'Accept': 'application/json',
          	'Content-Type': 'application/json'
        }})
        .then(res=>res.json())
        .then(result=>{
        	console.log(result)
        	M.toast({html: 'User deleted!'});
        	this.getUsers()
        })
        .catch(err=>console.log(err))
	}
	editUser(_id){
		fetch('/api/users/' + _id, {
        	method: 'PUT',
        	headers: {
        	body: JSON.stringify({"name":this.state.name, "profile":this.state.profile}),
          	'Accept': 'application/json',
          	'Content-Type': 'application/json'
        }})
        .then(res=>res.json())
        .then(result=>{
        	console.log(result)
        	this.getUsers()
        })
        .catch(err=>console.log(err))
	}
	getUsers(){
		fetch('/api/users')
		.then(res=>res.json())
		.then(result => {
			this.setState({"users":result})
		})
		.catch(err=>console.log(err))
	}
	handleChange(e){
		const {name, value} = e.target
		this.setState({[name]:value})
		
	}
	componentDidMount(){
		this.getUsers()
	}
	render(){
		return(
			<div>
				<MainNav />
				<UserForm handleAddUser = {this.addUser} handleChange={this.handleChange} 
					name={this.state.name} profile={this.state.profile} handleUpload={this.uploadFile} />
				<div className="container center-align">
				{this.state.users.map(user=>(
					<UserCard key={user._id} user={user} 
						handleDeleteUser ={this.deleteUser}
						handleEditUser={this.editUser}/>
					))}
				</div>

			</div>
		) 
	}

}

export default App