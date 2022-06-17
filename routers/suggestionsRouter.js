const router = require('express').Router();
const { getSuggestions, getSuggestionById, addSuggestion, updateSuggestion, deleteSuggestion } = require('../data/data-model');

router.get('/', (req, res, next) => {
    getSuggestions().then(suggestions => {
        res.status(200).json(suggestions);
    }).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error getting suggestions"
        });
    });
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    getSuggestionById(id).then(suggestion => {
        if (suggestion) {
            res.status(200).json(suggestion);
        }
        next({
            statusCode: 400,
            errorMessage: "Suggestion not found"
        });
    }).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error getting suggestion"
        });
    });
});

router.post('/', (req, res, next) => {
    const suggestion = req.body;
    if (!suggestion.movie_name || !suggestion.like_count || !suggestion.dislike_count || !suggestion.suggestion_by) {
        next({
            statusCode: 400,
            errorMessage: "Invalid suggestion"
        });
    }
    addSuggestion(suggestion).then(newSuggestion => {
        res.status(201).send(`User added with id: ${newSuggestion.id}`);
    }).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error adding suggestion"
        });
    }
    );
});

router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const suggestion = req.body;

    if (!suggestion.movie_name || !suggestion.like_count || !suggestion.dislike_count || !suggestion.suggestion_by) {
        next({
            statusCode: 400,
            errorMessage: "Invalid suggestion"
        });
    }

    updateSuggestion(id, suggestion).then(updatedSuggestion => {
        res.status(200).send(`Suggestion modified with id: ${id}`);
    }
    ).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error updating suggestion"
        });
    }
    );
});

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    deleteSuggestion(id).then((deleted) => {
        if (deleted) {
            res.status(204).send(`Suggestion deleted with id: ${id}`);
        }
        next({
            statusCode: 400,
            errorMessage: "Suggestion not found"
        });
    }
    ).catch(err => {
        next({
            statusCode: 500,
            errorMessage: "Error deleting suggestion"
        });
    }
    );
})

module.exports = router;