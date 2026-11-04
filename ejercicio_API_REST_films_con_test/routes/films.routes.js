const router = require('express').Router();
const filmsController = require('../controllers/films.controller');

// http://localhost:3000/api/film/Inception.
router.get("/:title", filmsController.getFilm);

//{ "Title": "Titanic" }
router.post("/", filmsController.createFilm);

//Edita
router.put("/", filmsController.editFilm);

//Elimina
router.delete("/", filmsController.deleteFilm);

module.exports = router;