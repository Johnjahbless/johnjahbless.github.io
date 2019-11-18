const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index');
  });


  app.listen(PORT, ()=> console.log(`Geo Search project running on port  ${PORT}`));
