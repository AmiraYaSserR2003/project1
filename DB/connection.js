import mysql2 from 'mysql2'
const db_connection = mysql2.createConnection({
    host :"localhost",
    database:"online_Shopping",
    user:"root",
    password:""
})

export default db_connection