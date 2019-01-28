const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('public'));

app.listen(process.env.PORT || 80);

app.get('/', (req,res)=>res.render('home.ejs'));
