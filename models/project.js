const { default: mongoose } = require("mongoose");


const projectSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true,
        unique: true
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
    },
    status : {
        type: String,
        required: true
    },
    stage : {
        type: Number,
        required: true
    },
    createdAt :{
        type:String, 
        required: true
    },
    createdBy : {
      type:String,
        required: true
    }
},{ timestamps: true });

module.exports = mongoose.model('Project',projectSchema);