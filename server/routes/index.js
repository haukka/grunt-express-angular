var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/todolist');
});

router.get('/todolist', function(req, res, next) {
  res.render('todo', { title: 'todo' });
});

router.all('*', function(req, res) {
  res.redirect("/");
});

module.exports = router;
