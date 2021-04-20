const express = require('express')
const path = require('path');

const server = express()
require('dotenv').config()
require('colors');

//  require database connection
require('./db').local_db_connect()

// parse urls to json 
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// cors security middleware
server.use(require('./restrictOrigin'));


// setting view engin to ejs 
server.set('view engine', 'ejs')

// setting views folder at public folder
server.set('views', path.join(__dirname, '../src/views'));


// serving static files [css / js / images]
server.use(express.static(path.join(__dirname, '../public')));






module.exports = server