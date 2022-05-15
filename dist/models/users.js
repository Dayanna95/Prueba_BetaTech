"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
// aca se realizan todos los endpoits necesarios para poder realizar las peticiones al servidor 
const getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //let user
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno en el servidor');
    }
});
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM usuarios');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno en el servidor');
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido1, apellido2 } = req.body;
        const response = yield database_1.pool.query('INSERT INTO usuarios (nombre,apellido1,apellido2) VALUES($1,$2,$3)', [nombre, apellido1, apellido2]);
        return res.json({
            message: 'Usuario creado correctamente',
            body: {
                user: {
                    nombre,
                    apellido1,
                    apellido2
                }
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno en el servidor');
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido1, apellido2 } = req.body;
        yield database_1.pool.query('UPDATE usuarios SET nombre = $1,apellido1 = $2,apellido2 = $3 WHERE id = $4', [nombre, apellido1, apellido2, id]);
        return res.json({
            message: 'Usuario modificado correctamente',
            body: {
                user: {
                    nombre,
                    apellido1,
                    apellido2
                }
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno en el servidor');
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
        res.json(`Usuario ${id} eliminado correctamente`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno en el servidor');
    }
});
module.exports = {
    getUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser
};
