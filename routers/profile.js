const express = require('express');
const router = express.Router();

router.get('/me', (req, res) => {
  res.send('here user will see the profile');
});
  patch('/me', (req, res) => {
  res.send('here user will can change the profile');
});

module.exports = router;

