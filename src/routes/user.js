const express = require ('express')
const router = express.Router()
const User = require('../models/usermodel')


router.get('/',function(req,res){
	User.find(function(err, users) {
    	res.send(users)
	})
	
})
router.post('/',function(req,res){
	if (req.body.name != ""){
	User.create(req.body).then((company)=>{
		res.send(company)	
	}).catch((err)=>{
		res.status(422).send({"error":err.message})
	})}
})

router.put('/:id',function(req,res){
	console.log(req.body.name)
	User.findByIdAndUpdate({ "_id" : req.params.id},req.body).then((company)=>{
		res.send(company)	
	}).catch((err)=>{
		res.status(422).send({"error":err.message})
	})
})

router.delete('/:id',function(req,res){
	User.deleteOne({ "_id" : req.params.id}).then((company)=>{
		res.send(company)	
	}).catch((err)=>{
		res.status(500).send({"error":err.message})
	})
})

module.exports = router