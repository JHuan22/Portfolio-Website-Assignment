/*
Name: Jin Huang
StudentId: 301020707
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
//connect to our book model
let Book = require('../models/books');
let bookController = require('../controllers/book');
//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

//GET ROUTE for the book list page - READ OPERATION
router.get('/', bookController.displayBookList);

//GET Route for displaying the Add Page - CREATE Operation
router.get('/add', requireAuth, bookController.displayAddPage);

//POST Route for precessing the Add page - CREATE Operation
router.post('/add', requireAuth, bookController.processAddPage);

//GET Route for displaying the Edit page - UPDATE operation
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

//POST Route for precessing the Edit page - UPDATE Operation
router.post('/edit/:id', requireAuth, bookController.processEditPage);

//GET to perform Deletion - Delete Operation
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;