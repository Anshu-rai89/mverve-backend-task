const express=require('express');

const movieController=require('../../../controllers/api/v1/movieController');

// using express route
const router=express.Router();

router.get('/getMovies',movieController.showAllMovie);
router.get('/getMoviesByGenre',movieController.showMovieByGenre);
router.delete('/delete/:id',movieController.deleteMovie);
router.put('/update/:id',movieController.updateGenre);
router.post('/addMovie',movieController.create);

module.exports=router;