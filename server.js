// ou era criar um diretorio src e por todo o codigo dentro.
// como o codigo ja estava criado optei pelo index.js
// e o procfile com o caminho para o index.js


const express = require('express');
const app = express();

app.get('/',(req,res) => res.send('Ola Tester!'));

app.listen(process.env.PORT /3001);
