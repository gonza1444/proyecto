//cree este model, para que, las funciones que hagan, se puedan insertar en la base de datos

const pool = require('../bd');
// pool : referencia a la base de datos

// 1. insertar los datos 

// 1. funcion y 3 lineas
async function createUser(objeto) {
    
    try {
        
        let query ="insert into usuario set ?";
        const rows = await pool.query(query,[objeto]);
        return rows;

    } catch(error) {
        console.log(error);
    }

}

async function authUser(user,password) {
    try {
        console.log("El usuario que llega al model : ", user,  " el password que llega al model : ",password)
        // select * from usuario where mail = 'dileo.francoj@gmail.com' and password = '1234'
        let query = "select * from usuario where mail = ? and password = ?";
        // [{}]
        console.log(query);
        const rows = await pool.query(query,[user,password]);
        return rows;
        // empty set : 0 registros
    } catch(error) {
        console.log(error);
    }
}
module.exports = {createUser, authUser};