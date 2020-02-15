const express= require ('express');
const UserController = require('../controllers/userController');

const api = express.Router();

api.post('/sign-up',UserController.signUp);
api.post('/login',UserController.logIn);

module.exports = api;