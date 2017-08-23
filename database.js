let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'toure',
    password: 'kadiy',
    database: 'first_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM small_doggo',
    function(err, rows, fields) {
        if (err) {
            throw err;
        }
        /*
        let retour = results.map(function(valeur){
            return{
                id: valeur.id,
                name:valeur.name,
                race: valeur.race,
                isGood: valeur.is_good
            };
            */
        //return retour;
    })
connection = rows;
console.log(rows);


connection.end();
/*
module.exports = {
    getAllDoggos: getAllDoggos
}
*/
//creation de mini-serveur renvoyant message 'hello!', serveur lançée sur le port 8080
//let http: objet javascript permettant de lancer un serveur web
let http = require('http');
let server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('hello !');
    //response.end(JSON.stringify(chiens)); --> pour afficher les chiens;
});
server.listen(8080);