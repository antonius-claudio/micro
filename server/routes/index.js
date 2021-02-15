const router = require('express').Router();
const Controller = require('../controllers');

router
  .get('/', (req, res) => 
    res.status(200).json({ message: 'Api Hello' })
  )

  .get('/getNilai', Controller.getNilai)

  .put('/setNilai', Controller.setNilai)

module.exports = router;