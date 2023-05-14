'use strict';

const express = require('express');
const { Food } = require('../src/models/index');
const router = express.Router();

// Routes
router.get('/food', getFood);
router.post('/food', addFood);
router.get('/food/:id', getOneFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


// localhost:3000/food
async function getFood(req, res) {
    let food = await Food.findAll();
    res.status(200).json(food);
}

async function addFood(req, res) {
    let newFood = req.body;
    console.log('new food', newFood);
    let food = await Food.create(newFood);
    res.status(201).json(food);
}

async function getOneFood(req, res) {
    let foodId = parseInt(req.params.id);
    let getFood = await Food.findOne({ where: { id: foodId } })
    res.status(200).json(getFood);
}

async function updateFood(req, res) {
    let foodId = parseInt(req.params.id);
    let newObj = req.body;
    let getFood = await Food.findOne({ where: { id: foodId } });
    let updateFood = await getFood.update(newObj);
    res.status(200).json(updateFood);
}

async function deleteFood(req, res) {
    let foodId = parseInt(req.params.id);
    let getFood = await Food.destroy({ where: { id: foodId } });
    res.status(200).json(getFood);
}

module.exports = router;