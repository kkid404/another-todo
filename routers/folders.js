const express = require('express');
const router = express.Router();

const db = require('../data/data.js')

router.get('/', (req, res) => {
  res.send('here user can will see a folders');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM folders WHERE id = $1', [id])
});

router.patch('/:id', (req, res) => {
  res.send('here user will can change the folders');
});

router.post('/', (req, res) => {
  res.send('here user will create the folders');
});

module.exports = router;

