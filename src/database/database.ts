import {Pool} from "pg";

export const pool = new Pool({ //conexión a la base de datos
  user: 'postgres',  
  host: 'localhost',
  password:'1234', //esta es la contraseña de mi bd, favor reemplazar de ser necesario
  database:'bdpt_betatech', // nombre de la base de datos
  port: 5432
})