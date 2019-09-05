'use strict';

const {readFile, writeFile} = require('fs');
const events = require('./events/events.js');
require('./logger');

/**
 * Reads Files
 * @param text
 * @returns {Promise<void>}
 */
const readFileAsync = async (text) => {
  await readFile('./elephant.text', 'utf8', (error, data) => {
    console.log(text, data);
    if (error) {throw error}
    events.emit('writeUpperCase', data);
  });
};

/**
 * Converts the text to uppercase
 * @param text
 */
const textToUpperCase = (text) => {
  let uppercase = text.toString().toUpperCase();
  events.emit('writeFile', uppercase);

};

/**
 * writes back to files
 * @param text
 * @returns {Promise<void>}
 */
const writeFileAsync = async (text) => {
  await writeFile('./elephant.text', Buffer.from(text), (error, data) => {
    if (error) {throw error}
    return true;

  });
};

/**
 * Fuck I dont know, it does something.
 * @param file
 */
const alterFile = (file) => {
  events.emit('readFile', file);
};


module.exports = {
  readFileAsync,
  writeFileAsync,
  textToUpperCase,
  alterFile,
};
