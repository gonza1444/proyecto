const pool = require('./../bd'); // pool es una constante de noticiasModel que almacena la referencia de la conexion del archivo bd.js

// consultar todas las noticias
async function getProductos() {
    try {
        
        let consulta =  "select * from producto";
        // rows contiene el resultado de la consulta (array de objetos)
        let rows =  await pool.query(consulta);
        return rows;
    } catch(error) {
        console.log(error);
    }
    
}

// traigo una noticia puntual : 3
/*async function getProducto(id) {
    // solo las funciones async tienen bloque try ´catch
    try {
        let query = "select * from productos where id_producto = ?";
        let rows = await pool.query(query,[id]);
        return rows; 
    } catch(error){
        console.log(error);
    }
    
}
*/

/*async function updateNoticia(obj,id) {
    try {
        // id : Primary key de la tabla. Importante para actualizar una sola noticia
        let query = "update noticia set ? where id_n = ?"
        let rows = await pool.query(query,[obj,id]);
        return rows;
    } catch(error) {
        throw error;
    }
}*/



// Las llaves me permiten exportacion multiple de funciones
module.exports = {getProductos}