const express = require ('express')
const mongoose = require('mongoose')
const path = require('path')
const userRouter = require('./routes/user')
const fileupload = require('express-fileupload')
//Settings
const port = process.env.PORT || 3000
const URI = "mongodb+srv://toolboxdev-admin:A4310Hboi@toolboxdev-cluster-nkc6n.mongodb.net/test?retryWrites=true&w=majority"

const app = new(express)

//Database connection
mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true})
	.then(db => console.log("Database connected succesfully..."))
	.catch(err => console.log(err))
//Middleware
app.use(express.json())
app.use(fileupload())
//static files 

app.use(express.static(path.join(__dirname,'/public')))

//upload endpoint
app.post('/api/upload', (req,res)=>{
	
	if(req.profilepic===null){
		return res.status(400).json({msg:"no file was uploaded"})
	}
	const file = req.files.profilepic

	file.mv(`${__dirname}/public/uploads/${file.name}`,err=>{
		if(err){
		console.log(err)
		res.status(500).json({msg:err})
		}
		res.json({fileName: file.name})
	})
})

//app.get('/', function (req, res) {
  //res.json({ "status":"this is an awesome app"});
//});
//Routes
app.use('/api/users',userRouter)
//start the server
app.listen(port, function () {
  console.log('Launch partner app listening on port 3000!');
});