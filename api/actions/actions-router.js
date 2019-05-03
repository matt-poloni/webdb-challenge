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

router.post('/', (req, res) => {
  db.post(req.body)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not create the action." })
    })
});

module.exports = router;