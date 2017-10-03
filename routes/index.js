var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hello World!' });
});

router.get('/userlist', function(req, res) {
	var db = req.db;
	// console.log( db );
	var collection = db.get('usercollection');
	// var collection = db.usercollection;
	// console.log( collection.count() );

	collection.find({}, {}, function(e, docs){
		res.render('userlist', { 
			'userlist': docs
		});
	});
});

router.get('/newuser', function(req, res, next) {
  res.render('newuser', { title: 'Add New User' });
});

router.post('/adduser', function(req, res){
	var db = req.db;
	
	// Get our form values. These rely on the "name" attributes
	var userName = req.body.username;
	var userEmail = req.body.useremail;
	var userExcuse = req.body.userexcuse;

	// Set our collection
	var collection = db.get('usercollection');

	// submit to DB
	collection.insert({
		'username' : userName,
		'email' : userEmail,
		'excuse' : userExcuse
	}, function(err, doc){
		if (err) {
			// if it failed, return error
			res.send("there was a problem adding the information to the database");
		} else {
			// forward to success page if successfully added
			res.redirect('userlist');
		}
	});
});

module.exports = router;
