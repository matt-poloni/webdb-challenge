
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          description: 'Create a forked copy',
          notes: null,
          completed: true,
          project_id: 5,
        },
        {
          id: 2,
          description: 'Add PM as collaborator',
          notes: null,
          completed: true,
          project_id: 5,
        },
        {
          id: 3,
          description: 'Clone your own version',
          notes: null,
          completed: true,
          project_id: 5,
        },
        {
          id: 4,
          description: 'Create a new branch',
          notes: null,
          completed: true,
          project_id: 5,
        },
        {
          id: 5,
          description: 'Push commits',
          notes: null,
          completed: true,
          project_id: 5,
        },
      ]);
    });
};
