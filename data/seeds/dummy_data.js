/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('suggestions').del()
  await knex('suggestions').insert([
    { id: 1, movie_name: 'The Shawshank Redemption', like_count: 2, dislike_count: 7, suggestion_by: 'admin' },
    { id: 2, movie_name: 'The Godfather', like_count: 5, dislike_count: 0, suggestion_by: 'admin' },
    { id: 3, movie_name: 'The Godfather: Part II', like_count: 3, dislike_count: 3, suggestion_by: 'admin' },
  ]);
};
