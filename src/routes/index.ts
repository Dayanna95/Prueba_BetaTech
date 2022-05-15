import { Router } from "express";
const router = Router();
const usersController = require('../controllers/usercontroller')

// aca se declaran las rutas para probar los endpoints 

router.get('/usuarios',usersController.getUsuarios)
router.get('/usuarios/:id',usersController.getUsuario)
router.post('/usuarios',usersController.createUsuario)
router.put('/usuarios/:id',usersController.updateUsuario)
router.delete('/usuarios/:id',usersController.deleteUsuario)
export default router;