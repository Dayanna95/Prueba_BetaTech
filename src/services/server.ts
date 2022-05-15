import   express  from "express";    //aca se crea la conexion del servidor 
const app = express ();
import routesIndex from "../routes/index";
app.use(express.json());                            //convierte los datos en formato json desde la api
app.use(express.urlencoded({extended: false}));    //convierte los datos en formato json desde formulario
app.use(routesIndex)
app.listen(3000, () => {console.log("Servidor corriendo en el puerto 3000")})