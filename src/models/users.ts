import { Request,Response } from "express";
import { pool } from "../database/database";
import { QueryResult } from "pg";

// aca se realizan todos los endpoits necesarios para poder realizar las peticiones al servidor 
const getUserId = async(req: Request,res: Response): Promise<Response> =>{ //endpoint  que trae un usuario por id
        try {
            //let user
               const id = parseInt(req.params.id);
               const response: QueryResult = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);            
               return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
       return res.status(500).json('Error interno en el servidor');
}


}
 const getUsers = async (req: Request,res: Response): Promise<Response> =>{ //endpoint que trae todos los usuarios
   try {
       
         const response: QueryResult = await pool.query('SELECT * FROM usuarios'); 
         return res.status(200).json(response.rows);
       
   } catch (error) {
       console.log(error);
       return res.status(500).json('Error interno en el servidor');
   }
    
}

const createUser = async(req: Request,res: Response): Promise<Response> =>{ //endpoint  crea un usuario 
    try {
          const {nombre,apellido1,apellido2} = req.body;
          const response: QueryResult = await pool.query('INSERT INTO usuarios (nombre,apellido1,apellido2) VALUES($1,$2,$3)',[nombre,apellido1,apellido2]);
         return res.json({
              message: 'Usuario creado correctamente', //muestra un mensaje de exito y muestra el usuario creado
              body: {
                  user:
                  {
                      nombre,
                      apellido1,
                      apellido2
                  }
              }
          })
    } catch (error) {
        console.log(error);
   return res.status(500).json('Error interno en el servidor');
    }
}

const updateUser = async(req: Request,res: Response) =>{ //endpoint  que modifica un usuario de acuerdo a su id
    try {
        const id = parseInt(req.params.id);
        const {nombre,apellido1,apellido2} = req.body;
        await pool.query('UPDATE usuarios SET nombre = $1,apellido1 = $2,apellido2 = $3 WHERE id = $4',[nombre,apellido1,apellido2,id]);
       return res.json({
            message: 'Usuario modificado correctamente',  //muestra un mensaje de exito y muestra el usuario modificado
            body: {
                user:
                {
                    nombre,
                    apellido1,
                    apellido2
                }
            }
        })
  } catch (error) {
      console.log(error);
 return res.status(500).json('Error interno en el servidor');
  }
}

const deleteUser = async(req: Request,res: Response) =>{ //endpoint  que elimina un usuario de acuerdo a su id
    try {
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);            
        res.json(`Usuario ${id} eliminado correctamente`);
    } catch (error) {
        console.log(error);
   return res.status(500).json('Error interno en el servidor');
    }
}
module.exports = {//modo de exportar todos los metodos para ser utilizados en otras partes del proyecto
    getUsers,
    getUserId, 
    createUser,
    updateUser,
    deleteUser
}

