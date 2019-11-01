const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index');
  });


  app.get('/search', (req, res) => {
    res.render('search');
  });

  app.listen(3000, ()=> console.log('Geo-Search project running on port 3000'));
