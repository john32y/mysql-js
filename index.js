// import the mysql2 libary
import mysql from 'mysql2';
import connectionInfo from './secretStuff.js';

// connect to our mysql database (give it our credentials)
const connection = mysql.createConnection(connectionInfo)

//run a simple query to get 2 movies
connection.query(
    'SELECT * FROM MovieTable',
    function handleResults(error, results){
        console.log(error)
        console.table(results)
        connection.destroy()
    }
)


