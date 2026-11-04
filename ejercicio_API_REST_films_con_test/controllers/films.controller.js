const fetchFilms = require('../utils/fetchFilms');

const getFilm = async (req, res) => {
    try {

        const data = req.params.title
        let answer = await fetchFilms(data)

        if (answer == null) {
            res.status(404).json({ message: 'Film not found' })
        }else{
            res.status(200).json(answer)
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Error: ${error.stack}` });
    }
}

const createFilm = (req, res) => {
    try {

        const new_film = req.body
        const { Title } = new_film

        if (Title == null) {
            res.status(400).json({ message: 'Falta el Title' })
        }else{
            res.status(200).json({message: `Se ha guardado ${Title}`})
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Error: ${error.stack}` });
    }
}

const editFilm = (req, res) => {
    try {
        const filmData = req.body
        const {Title, id} = filmData

        if (Title == null || id == null) {
            res.status(400).json({ message: 'Falta el Title o el id' })
        }else{
            res.status(200).json({id: id,message: `Se ha actualizado ${Title}`})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Error: ${error.stack}` });
    }
}

const deleteFilm = (req, res) => {
    try {

        const filmData = req.body
        const {id} = filmData

        if (id == null) {
            res.status(400).json({ message: 'Falta el id' })
        }else{
            res.status(200).json({id: id, message: `Se ha borrado la película con ID: ${id}`})
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Error: ${error.stack}` });
    }
}

module.exports = {
    getFilm,
    createFilm,
    editFilm,
    deleteFilm
}