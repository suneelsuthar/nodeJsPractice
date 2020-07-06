let express = require('express')
let route = express.Router()

route.use('/',require('../controllers/getPost'))
route.use('/',require('../controllers/addPost'))

module.exports = route

