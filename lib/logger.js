'use strict';


const socketIoClient = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const server = socketIoClient.connect(API_URL);
const events = require('./events/events.js');


events.on('readFile', content => log('Reading the File', content));
events.on('writeFile', content => log('Writing the File', content));
events.on('error', error => log('Ohs nos!! Error!', error));

function log(events, content) {
  let time = new Date();
  console.log({events, time, content});
}

