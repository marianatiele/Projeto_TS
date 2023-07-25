const mongoose = require('../database/conexao.js')

const userShema = new mongoose.Schema({
   nome:{
        type: String,
        require: true,
    },
    email:{
        type:String,
        unique: true,
        require: true,
        lowrcase: true
    },
    telefone:{
        type:Number,
        require:true,
        
    },
    mensagem:{
        type:String,
        require:true,
        
    },
    createdAt:{
        type:Date,
        default: Date.new
    },


});

//passando o model
const user = mongoose.model('user', userShema)

module.exports = user;