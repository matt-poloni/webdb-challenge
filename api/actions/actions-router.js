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

// router.get('/:id', (req, res) => {
//   db.getByID(req.params.id)
//     .then(action => {
//       res.status(200).json(action);
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ error: "Could not retrieved the action at the specified ID." });
//     })
// });

router.put('/:id', (req, res) => {
  db.put(req.params.id, req.body)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not update the action at the specified ID." });
    })
});

router.delete('/:id', (req, res) => {
  db.del(req.params.id)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not delete the action at the specified ID." });
    })
});

module.exports = router;