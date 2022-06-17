const db = require('./db-config');

module.exports = {
    getSuggestions,
    getSuggestionById,
    addSuggestion,
    updateSuggestion,
    deleteSuggestion
};

function getSuggestions() {
    return db('suggestions');
};

function getSuggestionById(id) {
    return db('suggestions').where({ id: id }).first();
};

function addSuggestion(newSuggestion) {
    return db('suggestions').insert(newSuggestion);
};

function updateSuggestion(id, newSuggestion) {
    return db('suggestions').where({ id: id }).update(newSuggestion);
};

function deleteSuggestion(id) {
    return db('suggestions').where({ id: id }).del();
};