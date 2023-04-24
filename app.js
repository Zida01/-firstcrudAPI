const routes = require('./routes/routes.user');
const bodyParser = require('body-parser');
const express = require('express');
//const expressBusboy = require('express-busboy');



const app = express();

app.use(bodyParser.json());
app.use('/profile', express.static('./upload/images'));


app.use(bodyParser.urlencoded({ extended: false }));
//expressBusboy.extend(app);


app.get('/', (req, res) => {
    res.send(' welcome ')

})

app.use('/api/user', routes);




app.listen(3000, (req, res) => {
    console.log(' listening ');
})