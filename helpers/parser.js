const { guardar } = require('./operacionesIO');

let stringdata;

fs = require('fs');
var parser = require('xml2json');

fs.readFile('kanjivg.xml', function (err, data) {
  var json = parser.toJson(data);
  guardar(json);
});
