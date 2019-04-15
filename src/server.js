const express= require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

app.use(cors());

const app= express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//criando real time
io.on('connection', socket =>{

     socket.on('connectRoom', box =>{
         socket.join(box);
     })
});

// use insere um modulo dentro do express
mongoose.connect('mongodb://localhost:27017/oministack',{useNewUrlParser: true});

//middleware
app.use((req, res)=>{
   req.io= io;
   return next();
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/files', express.static(path.resolve(__dirname, '..','tmp')));


app.use(require('./routes'));

server.listen(8000)