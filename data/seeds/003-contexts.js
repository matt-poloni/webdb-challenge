
exports.seed = function(knex, Promise) {
  return knex('contexts').truncate()
    .then(function () {
      return knex('contexts').insert([
        {
          id: 1,
          name: 'at computer',
        },
      ]);
    });
};
