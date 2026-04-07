const Recipe = require('../models/recipe');

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time, coverImage } = req.body;

    if (!title || !ingredients || !instructions || !time || !coverImage) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newRecipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      time,
      coverImage
    });

    res.status(201).json(newRecipe);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, ingredients, instructions, time, coverImage } = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { title, ingredients, instructions, time, coverImage },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(updatedRecipe);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json({ message: 'Recipe deleted successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe };
