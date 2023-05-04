const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const recipes = require("./data/recipe.json");
const cors = require('cors');

//app.use(cors());
const corsConfig = {
    origin: '*',
    Credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig));
app.get('/', (req, res) => {
    res.send("Server is running...");
});
app.get('/recipe', (req, res) => {
    res.send(recipes);
});
app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const recipeDetails = recipes?.find(r => r.id == id);
    res.send(recipeDetails)
});
app.listen(port, () => {
    console.log(`recipe api running on port: ${port} `);
});