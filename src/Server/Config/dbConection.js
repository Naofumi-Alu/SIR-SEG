import mysql from 'mysql';


const dbConection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'SIRSEG_CONTENT'
});



export default dbConection;
