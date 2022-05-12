//const mysql = require('mysql2');
//require('dotenv').config(); 
import mysql from 'mysql2';
import 'dotenv/config';
let connection =null;
    try {
          connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            ssl:{
                rejectUnauthorized: false
            }
        });
    
        if(connection!=undefined){
            console.log('Conexion establecida');
          console.log(connection);
    
        }else{
            console.log('Conexion fallida');
        }
    } catch (error) {
        console.log('Conexion fallida, ERROR: ',error);
    }
    export default connection;
    
    



