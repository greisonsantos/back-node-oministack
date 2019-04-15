const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerconfig =require('./config/multer');

const BoxController = require('./controller/BoxController');
const FileController = require('./controller/FileController');


routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post('/boxex/:id/files',multer(multerconfig).single('file'), FileController.store);


module.exports = routes;