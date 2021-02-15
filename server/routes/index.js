const router = require('express').Router();
const Controller = require('../controllers');

router
  .get('/', (req, res) => 
    res.json({ message: 'Api Hello' })
  )

  .get('/getNilai', Controller.getNilai)

  .put('/setNilai', Controller.setNilai)

module.exports = router;