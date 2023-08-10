var express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response) {

    response.render('home', {name: 'John Doe'});

});

app.get('/table', function(request, response) {

    response.render('table');

});

app.get('/graph', function(request, response) {

    response.render('graph');

});



app.listen(port);
console.log(`Node server started on port ${port}`);