


const Express = require('express');
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch } = require('../controllers/users');


const Router = Express.Router()


Router.get('/', usersGet)

Router.put('/:id', usersPut)

Router.post('/', usersPost)

Router.delete('/', usersDelete)

Router.delete('/', usersPatch)







module.exports = Router;