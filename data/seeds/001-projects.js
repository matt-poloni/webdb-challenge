
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          name: 'webdb-i-challenge',
          description: null,
          completed: true,
        },
        {
          id: 2,
          name: 'webdb-ii-challenge',
          description: null,
          completed: true,
        },
        {
          id: 3,
          name: 'webdb-iii-challenge',
          description: null,
          completed: true,
        },
        {
          id: 4,
          name: 'webdb-iv-challenge',
          description: null,
          completed: true,
        },
        {
          id: 5,
          name: 'webdb-challenge',
          description: null,
          completed: false,
        },
      ]);
    });
};
