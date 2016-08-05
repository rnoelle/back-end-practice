var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');
//inner requires
var app = module.exports = express();
var connectionString = "postgres://postgres:Colour45@localhost/Projects";
var massiveInstance = massive.connectSync({connectionString: connectionString});
app.set('db', massiveInstance);
//Controllers
var productCtrl = require('./productCtrl');

//Configuration
var port = 3000;



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/products', productCtrl.getAll);
app.get('/products/:id', productCtrl.getOne);

app.post('/products', productCtrl.create);

app.put('/products', productCtrl.update);

app.delete('/products/:id', productCtrl.delete)


//Start Server
app.listen(port, function () {
  console.log('Listening on port', port);
});
