/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('suggestions', table => {
        table.increments('id').primary();
        table.string('movie_name').notNullable();
        table.integer('like_count').defaultTo(0);
        table.integer('dislike_count').defaultTo(0);
        table.string('suggestion_by').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('suggestions');
};
