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

router.post('/', (req, res) => {
  db.post(req.body)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not create the project." })
    })
});

router.get('/:id', (req, res) => {
  db.getByID(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not retrieved the project at the specified ID." });
    })
});

module.exports = router;