const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

app.use(bodyParser.json())

const Employee = mongoose.model("employee")
const Vote = mongoose.model("voting")
const mondURL = 'mongodb+srv://bTTs:O4Lo6GKdygcS9q2m@empapp-n4xqw.mongodb.net/bTTs?retryWrites=true&w=majority'

//connecting to database

mongoose.connect(mondURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on("error", (err) =>{
    console.log('error', err)
})

mongoose.connection.on("connected", () =>{
    console.log('connected to mongodb')
})

app.get('/',(req,res) => {
    Employee.find({})
    .then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
   })
})

app.get('/:id', (req, res) => {
    Employee.findOne({userId: req.params.id})
    .then(data => {
        res.send(data)
        console.log(data)
    }).catch (err => {
        console.log(err)
    })
})

//post route
app.post('/send-data', (req,res) =>{
   const hvote = new Vote({
       userId: req.body.userId,
       name: req.body.name,
       email: req.body.email,
       phone: req.body.phone,
       salary: req.body.salary,
       position: req.body.position,
       picture: req.body.picture,
       votePresident: req.body.votePresident,
       voteVicePresident: req.body.voteVicePresident,
       voteDepartment: req.body.voteDepartment,
       department: req.body.department
   })
   hvote.save()
   .then(data=>{
       console.log(data)
       res.send(data)
   }).catch(err => {
        console.log(err)
   })
    
})

app.listen(3000, () => {
    console.log('server running')
})


