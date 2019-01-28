const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.set('port', (process.env.PORT || 80));
app.use(express.static('public'));

app.listen(app.get('port'));

app.get('/', (req,res)=>res.render('home.ejs'));
