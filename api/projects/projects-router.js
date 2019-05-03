const router = require('express').Router();

const db = require('./projectsModel');

router.get('/', (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieve the projects data." });
    })
});

module.exports = router;