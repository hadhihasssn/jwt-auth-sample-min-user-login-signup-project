const { Router } = require("express");
const authContoller = require('../controllers/authContoller')
const Route = Router()

Route.get('/signup/', authContoller.signup_get)
Route.post('/signup/',authContoller.signup_post)
Route.get('/login/', authContoller.login_get)
Route.post('/login/',authContoller.login_post   )

module.exports = Route