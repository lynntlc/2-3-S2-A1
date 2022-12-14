const express = require('express')
const router = express.Router()
// 載入首頁路由
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')

router.use('/', home)
router.use('/restaurants', restaurants)

module.exports = router
