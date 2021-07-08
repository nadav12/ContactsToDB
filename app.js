var express = require('express');
var app = express();
var getData = require('./controllers/getData');
getData(app);
// serve the react app files
//make sure to npm run build the ui-react before the next line for production
app.use(express.static(`${__dirname}/ui-react/build`));


const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Example app listening on port ' + port +'!');
});
