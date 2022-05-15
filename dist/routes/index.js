"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const usersController = require('../controllers/usercontroller');
// aca se declaran las rutas para probar los endpoints 
router.get('/usuarios', usersController.getUsuarios);
router.get('/usuarios/:id', usersController.getUsuario);
router.post('/usuarios', usersController.createUsuario);
router.put('/usuarios/:id', usersController.updateUsuario);
router.delete('/usuarios/:id', usersController.deleteUsuario);
exports.default = router;
