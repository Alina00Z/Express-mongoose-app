const aliExpress = require("express");
const aliMongoose = require("mongoose");
const aliExpress_hbs = require("express-handlebars");
const aliTodosRouter = require('./routes/todos');
const path = require('path');
const ALI_PORT = process.env.PORT || 3000;
const aliApp = aliExpress();

const aliHbs = aliExpress_hbs.create({
  defaultLayout: "main",
  extname: 'hbs',
})

aliApp.engine('hbs', aliHbs.engine);
aliApp.set('view engine', 'hbs');
aliApp.set('views', 'views');

aliApp.use(aliTodosRouter);
// aliApp.use(aliExpress.urlencoded({extended: true}))
aliApp.use(aliExpress.static(__dirname + '/public'));

const aliPassword = "IYy1yP8Hv61Qnp2m";
const aliUrl = `mongodb+srv://alinadeveloper84:${aliPassword}@cluster0.0cxtlc1.mongodb.net/todos`
async function aliStart () {
  try {
    await aliMongoose.connect(aliUrl, {
      // useNewUrlParser: true
      // useFindAndModify: false,
      
    })
    aliApp.listen(ALI_PORT, () => {
      console.log("server start");
    });
  } catch (e) {
    console.log(e);
  }
  
}
aliStart();




