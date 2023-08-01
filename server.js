const express = require('express');
const path = require ('path');
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3000;



const app = express();
const server = require('http').createServer(app);//http protocolo
const io = require('socket.io')(server);//wss protocolo

 
app.use(express.static(path.join(__dirname, 'public')));// diretório para arquivos publico (front--end)
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require ('ejs').renderFile);
app.set('view engine', 'html');

app.use('/',(req,res)=>{
    res.render('index.html');
});

let messages= []; 

io.on('connection', socket => {
    socket.emit('previousMessage', messages);
    socket.on('sendMessage', data =>{
        data.id= "historico"
        messages.push(data);
         socket.broadcast.emit('receivedMessage', data);
    }); 
 
});




server.listen(PORT, () => {    console.log(`Conectado a porta ${ PORT }`);});

//server.listen(port, () => console.log(`Listening on port ${port}`));


 