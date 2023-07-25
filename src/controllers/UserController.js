const Express = require('express')
const User  = require('../models/user.js')



module.exports =  {
    async index(req, res){
        const usuario = await User.find()
        
        if(usuario == '' || usuario == null){
           
            return res.status(200).send({message: 'Nenhum Mensagem'})
        }
        return res.status(200).send({usuario});

    },
    async store(req, res){
        try{
           const {nome,email, telefone, mensagem} = req.body;
        const user = await User.create({
            nome,email, telefone, mensagem});
            return res.status(200).send({
            status:1,
            message: 'Mensagem Enviada com Sucesso !', user })
        }catch(error){
            return res.status(400).send({error:'Falhou'})
        }
    },
    async update(req, res){
       
    },




    async delete(req, res){
    
    
    }



}