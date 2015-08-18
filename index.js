var express = require('express');


var app = express();
var log = require('debug')('withevan');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(process.env.PORT || 3000, function () {
    var address = server.address();
    log('Server listening at %s', address.port);
});
