const express = require('express');
const app = express();
const path = require('path');
const socketIo = require('socket.io');
const PORT = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(PORT, () => {
    console.log("Running.");
});

//Array de mensagens que armazena as novas mensagens e envia para todos os usuários conectados na sala de chat.
const messages = [];

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New connection.') //A cada nova conexão (aba, navegador)
    socket.emit('update_messages', messages); //Permite que quem acesse o chat já tenha acesso às mensagens existentes.

    socket.on('new_message', (data) => {
        messages.push(data); //recebe tanto o nome do usuário quanto a sua mensagem.
        io.emit('update_messages', messages); //Emite para todos os usuários as novas mensagens
    })
});