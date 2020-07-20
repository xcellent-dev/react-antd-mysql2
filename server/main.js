import express from 'express';
import path from 'path';

import mysql from 'mysql2';
import dotenv from 'dotenv';

import api from './routes';
import bodyParser from 'body-parser'; // PARSE HTML BODY

//if development environment, turn on Dev Server
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
const devPort = 4000;

const app = express();
const port = 3000;

dotenv.load();
/* msyql connection */
const connection = mysql.createConnection({host: process.env.DBHOST,
  user: process.env.DBUSER, password: process.env.DBPASSWORD,
  database: process.env.DATABASE});


app.use('/', express.static( path.join(__dirname, './../public') ));

app.use(bodyParser.json());

/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.post('/test', function(request, response) {

    console.log(request.body);

  if(request.body.contents === "") {
      return response.status(400).json({
          error: "EMPTY CONTENTS",
          code: 2
      });
  }

  // CREATE NEW MEMO
  let question = request.body.contents.question;
  let answer = request.body.contents.answer;
  let hint = request.body.contents.hint;

  let query = 'insert into `test_table_new` (question, answer, hint) values ("'+question+'","'+answer+'", "'+hint+'")';
  
  connection.query(query,
  function(err, results, fields) {
    if (err) {
       return response.status(400).json({
            error: "CONNECTION ERROR",
            code: 2
        });
    } else {
      return response.json({ success: true });  
    }
  }); 
});


/* handle error */
app.use( function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
} )

app.listen(port, ()=>{
	console.log('listeing', port);
})


//if development environment, turn on Dev Server
if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}