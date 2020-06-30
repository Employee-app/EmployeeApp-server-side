const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
        userId: {type: String, unique: true},
        name: String,
        email: String,
        phone: String,
        picture: String,
        salary: String,
        position: String,
        
})

mongoose.model("employee", EmployeeSchema)

const VoteSchema = new mongoose.Schema({
        votePresident: {type: String},
        voteVicePresident: {type: String},
        voteDepartment: {type: String},
        userId: String,
        department: String,
})

mongoose.model("voting", VoteSchema)