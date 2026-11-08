const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('here user can will see a folders');
});

router.get('//:folder', (req, res) => {
  res.send('here user will can see the folder');
});

router.patch('/:folder', (req, res) => {
  res.send('here user will can change the folders');
});

router.post('/', (req, res) => {
  res.send('here user will create the folders');
});

module.exports = router;

