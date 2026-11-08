const express = require('express');
const router = express.Router();

router.get('/folders', (req, res) => {
  res.send('here user can will see a folders');
});

router.get('/folders/:folder', (req, res) => {
  res.send('here user will can see the folder');
});

router.patch('/folders/:folder', (req, res) => {
  res.send('here user will can change the folders');
});

router.post('/folders', (req, res) => {
  res.send('here user will create the folders');
});

module.exports = router;

