'use strict';

const server = require('socket.io')(3000);

server.on('writeFile', (socket) => {
  console.log('File Saved', socket.id);

  socket.on('writeFile', message =>{
    socket.emit('writeFile', message);
  });
});



console.log('Server is up on 3000');