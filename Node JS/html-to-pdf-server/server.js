var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.php', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('./timeTable.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});