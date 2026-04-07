const Recipe = require('../models/recipe');

const getRecipes = (req, res) => {
  res.send('Hello World!');
};

const getRecipe = (req, res) => {
  res.send('Hello World!');
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

const editRecipe = (req, res) => {
  res.send('Edit is working!');
};

const deleteRecipe = (req, res) => {
  res.send('Delete is working!');
};

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe };
