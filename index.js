const express = require('express');
const cors = require('cors');
const chefs = require('./chefs.json');
const recipes = require('./recipes.json');
const app = express();
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to Food and Art Server !")
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/favorite/:id', (req, res) => {
    const favorite = parseInt(req.params.id);
    const findFavorite = recipes.filter( data => parseInt(data.idMeal) === favorite);
    res.send(findFavorite);
})

app.get('/chef/:chef', (req, res) => {
    const name = req.params.chef;
    const chef = chefs.find( chef => chef.name === name);
    res.send(chef)
})

app.get('/recipes/:name', (req, res) => {
    const chef = req.params.name;
    const chefRecipes = recipes.filter( recipe => recipe.chef === chef)
    res.send(chefRecipes)
})

app.listen(port, () => {
    console.log(`My server is running on port ${port}`)
})