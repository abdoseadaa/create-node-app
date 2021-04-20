const router = require('express').Router()


router.get('/', require('../controllers/root').root)


module.exports = router