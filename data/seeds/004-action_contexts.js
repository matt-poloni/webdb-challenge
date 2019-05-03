
exports.seed = function(knex, Promise) {
  return knex('action_contexts').truncate()
    .then(function () {
      return knex('action_contexts').insert([
        {
          id: 1,
          action_id: 1,
          context_id: 1
        },
        {
          id: 2,
          action_id: 2,
          context_id: 1
        },
        {
          id: 3,
          action_id: 3,
          context_id: 1
        },
        {
          id: 4,
          action_id: 4,
          context_id: 1
        },
        {
          id: 5,
          action_id: 5,
          context_id: 1
        },
      ]);
    });
};
