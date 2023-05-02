const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const recipes = require("./data/recipe.json");
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is running...");
});
app.get('/recipe', (req, res) => {
    res.send(recipes);
});
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const recipeDetails = recipes.find(r => r.id === id);
    res.send(recipeDetails)
});
/*
https://chef-recipe-server-rita5cmt1b108514-gmailcom.vercel.app/recipe
app.get('/news', (req, res) => {
    res.send(news);
});
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
});
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)
    }
}); */
app.listen(port, () => {
    console.log(`recipe api running on port: ${port} `);
});