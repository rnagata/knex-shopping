
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'red@black.com', password: 'one'},
        {email: 'green@gray.com', password: 'two'},
        {email: 'blue@white.com', password: 'three'}
      ]);
    });
};
