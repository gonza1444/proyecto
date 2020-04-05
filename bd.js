const mysql = require('mysql');
const util = require('util');
// Grupo de conexiones SQL que se ejecutan dentro de mi servidor
// 1. cuantas conexiones maximas (hilos) soporta la conexion? 10
// 2. host (localhost),
// 3. user
// 4. password
// 5. database
// Colas : FIFO (FIRST INPUT FIRST OUPUT)
let pool = mysql.createConnection({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'joy_intimates'  
});
// pool es un nombre de fantasia creado por el profesor que determina la referencia a la conexion con la base de datos de parametros impuestos dentro del objeto
//referencia a la conexion true | false 
// pool nos habilita a realizar consultas a una tabla

pool.query = util.promisify(pool.query);

// cuando yo haga una consulta a la tabla me aseguro que pool.query se comporta de forma async await
module.exports = pool;