const Sequelize = require('sequelize');
const db = require('../config/connection');

const user = db.define('userblogs', {
    title: {
        type: Sequelize.STRING,
        allowNULL: false

    },

    description: {
        type: Sequelize.STRING,
        allowNULL: false

    },

    Newcomment: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    // for upload url and docx images etc 

    attachment: {
        type: Sequelize.STRING,
        allowNULL: false
    },



});

module.exports = user;
