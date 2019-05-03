
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {title: 'happiness', description: 'hard to find', inventory: 99, price: 99.99},
        {title: 'sadness', description: 'easy to find', inventory: 99, price: 99.99},
        {title: 'Loch Ness', description: 'don\'t know where to find', inventory: 1, price: 9999}
      ]);
    });
};
