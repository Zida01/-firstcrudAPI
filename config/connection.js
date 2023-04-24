
const Sequelize = require('sequelize');

const db = new Sequelize('blogs', 'postgres', 'olabisi', {
    host: 'localhost',

    dialect: 'postgres',
})
db.authenticate()
    .then(() => console.log('database connected'))
    .catch(err => console.log('errpr ' + err));
// connection to database


module.exports = db; 