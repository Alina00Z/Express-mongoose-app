const {Router} = require("express");
const aliRouter = Router();
const aliTodo = require("../models/todo");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

aliRouter.get('/', async (req, res) => {
  const todos = await aliTodo.find({}).lean();
  res.render('index', {
    title: 'TODOS LIST',
    todos,
  });
  
  
})
aliRouter.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
  });
})

aliRouter.post('/create', urlencodedParser, async(req, res) => {
  const todo = new aliTodo({
    title: req.body.title
  })
  await todo.save();
  res.redirect("/");
})
aliRouter.post('/completed', urlencodedParser, async (req, res) => {
  const todo = await aliTodo.findById(req.body.id);
  todo.completed = !!req.body.completedCheckbox;
  await todo.save();
  res.redirect('/');
})



module.exports = aliRouter;