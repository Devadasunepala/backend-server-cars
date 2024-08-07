const mongoose=require('mongoose');
const Data=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    carname:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    carvarient:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("Usersdata",Data);
