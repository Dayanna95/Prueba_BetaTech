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
const usersModel = require('../models/users');
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return usersModel.getUsers(req, res);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }
});
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return usersModel.getUserId(req, res);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }
});
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return usersModel.createUser(req, res);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }
});
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return usersModel.deleteUser(req, res);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }
});
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return usersModel.updateUser(req, res);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Error interno');
    }
});
module.exports = {
    getUsuario,
    getUsuarios,
    createUsuario,
    deleteUsuario,
    updateUsuario
};
