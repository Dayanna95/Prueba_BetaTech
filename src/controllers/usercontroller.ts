import { Request,Response } from "express";
const usersModel = require('../models/users')
 

 const getUsuarios = async (req: Request,res: Response) =>{    //metodo del controlador que busca a todos los usuarios 
   try {         
          return await usersModel.getUsers(req,res);
   } catch (error) {
       console.log(error);
       return res.status(500).json('Error interno');
   }    
}


 const getUsuario = async (req: Request,res: Response) =>{ //metodo del controlador que busca a un usuario de acuerdo a su id 
    try {         
          return await usersModel.getUserId(req,res);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }    
 }

 const createUsuario = async (req: Request,res: Response) =>{ //metodo del controlador que crea usuarios
    try {         
          return await usersModel.createUser(req,res);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }    
 }

 const deleteUsuario = async (req: Request,res: Response) =>{ //metodo del controlador elimina a los usuarios de acuerdo a su id
    try {         
          return await usersModel.deleteUser(req,res);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }    
 }

 
 const updateUsuario = async (req: Request,res: Response) =>{ //metodo del controlador que modifica a los usuarios 
    try {         
          return await usersModel.updateUser(req,res);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }    
 }

module.exports = {  //modo de exportar todos los metodos para ser utilizados en otras partes del proyecto
    getUsuario,
    getUsuarios,
    createUsuario,
    deleteUsuario,
    updateUsuario
   
}