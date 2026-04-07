const  express = require('express');
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require('../controllers/recipe');
const router = express.Router();

router.get('/',getRecipes); //get all recipes
router.get('/:id',getRecipe); //get recipe by id  
router.post('/',addRecipe); //create a new recipe
router.put('/:id',editRecipe); //update a recipe by id
router.delete('/:id',deleteRecipe); //delete a recipe by id   


module.exports = router;