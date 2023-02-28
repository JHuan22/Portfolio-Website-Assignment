/*
Name: Jin Huang
Student ID: 301020707
*/
let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/index',indexController.displayHomePage);

router.get('/about',indexController.displayAboutPage);

router.get('/products',indexController.displayProductsPage);

router.get('/services',indexController.displayServicesPage);

router.get('/contact',indexController.displayContactPage);

/*GET Router for displaying the login page*/
router.get('/login',indexController.displayLoginPage);

/*POST Router for processing the Login page*/
router.post('/login',indexController.processLoginPage);

/*GET Router for displaying the register page*/
router.get('/register',indexController.displayRegisterPage);

/*POST Router for processing the reigster page*/
router.post('/register',indexController.processRegisterPage);

/*GET to perform user Logout*/
router.get('/logout', indexController.performLogout);

module.exports = router;

/*router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


module.exports = router;
*/
