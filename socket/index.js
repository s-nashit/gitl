express = require('express');
path = require('path')
app = express();
port = 3000;
server = app.listen(port, ()=>{
    console.log('Listening on port: ' + port);
});
io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

socketsConnected = new Set()

io.on('connection', onConnected)

// io.on('connection', (socket) => {
//     console.log('connected')
// })

function onConnected(socket){
    console.log('connected')
    console.log(socket.id)
    socketsConnected.add(socket.id)

    io.emit('clients-total', socketsConnected.size)


    socket.on('disconnect', ()=>{
        console.log('disconnected', socket.id)
        socketsConnected.delete(socket.id)
        io.emit('clients-total', socketsConnected.size)
    })
}