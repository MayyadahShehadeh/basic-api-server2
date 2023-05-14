'use strict';

const {Sequelize, DataTypes} = require('sequelize'); // npm i pg sequelize
const POSTGRES_URL = process.env.DATABASE_URL;

const food = require('./food');

let sequelizeOptions={}

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);



module.exports={
db:sequelize, //for real connection and will use it in index.js
Food:food(sequelize,DataTypes) // for creating the table and will use it in our routes
}