const router = require('express').Router();

const db = require('./actionsModel');

router.get('/', (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieve the actions data." });
    })
});

module.exports = router;