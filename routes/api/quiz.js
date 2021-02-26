const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const auth = require('../../middleware/auth')
const Quest = require('../../models/Question')




// @route    GET api/quiz/:level
// @desc     Get all questions
// @access   Private
router.get('/:level', auth, async (req, res) => {
  try {
    const questions = await Quest.find({level: req.params.level}).select('-Answer');

    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    POST api/quiz
// @desc     Create a question
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('QuestionStatement', 'Question is required').not().isEmpty(),
      check('Option1', 'All options are required').not().isEmpty(),
      check('Option2', 'All options are required').not().isEmpty(),
      check('Option3', 'All options are required').not().isEmpty(),
      check('Option4', 'All options are required').not().isEmpty(),
      check('Marks', 'Marks are required').not().isEmpty(),
      check('Answer', 'Answer is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newQuestion = new Quest({
        level: req.body.level,
        QuestionStatement: req.body.QuestionStatement,
        Option1: req.body.Option1,
        Option2: req.body.Option2,
        Option3: req.body.Option3,
        Option4: req.body.Option4,
        Marks: req.body.Marks,
        Answer: req.body.Answer
      });

      const Question = await newQuestion.save();
 
      res.json(Question);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



// @route    POST api/quiz/:level/result
// @desc     Get result of the quiz
// @access   Private
router.post(
  '/:level',
  [
    auth
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      
      let result = 0;
      let total = 0;
      const CorrectAnswers = await Quest.find({level: req.params.level}).select('Answer Marks');

      CorrectAnswers.forEach(function(OneAnswer, index){
          if(OneAnswer.Answer == req.body[index]){
            result+= OneAnswer.Marks;    
          }
          total += OneAnswer.Marks;
      });
      const resultObj = {result,total}
      res.json(resultObj);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


module.exports = router;

