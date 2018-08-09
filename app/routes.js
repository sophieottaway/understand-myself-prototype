const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

//Quiz Object Constructor
function Quiz(name, description, status, action,url) {
    this.name = name;
    this.status = status;
    this.description = description;
    this.actionDisplay = action;
    this.url = url;
}

router.get('/', function(req, res) {
 //Create Quizzes
  req.session.quiz1 = new Quiz(
    "Skills",
    "Identify activities you’re good at",
    "Not yet started",
    "Start"
  );
  req.session.quiz2 = new Quiz(
    "Interests",
    "Explore areas of work you’re interested in",
    "Not yet started",
    "Start");
  req.session.quiz3 = new Quiz(
    "Personal Style",
    "Understand how you prefer to work",
    "Not yet started",
    "Start"
  );
  req.session.quiz4 = new Quiz(
    "Motivation",
    "Identify what you want from work",
    "Not yet started",
    "Start"
  );
    res.render('index', req.session);
});

router.post('/', function(req, res) {
  res.redirect('all-tests');
});

router.get('/all-tests', function(req, res) {
  res.render('all-tests', req.session);
});
