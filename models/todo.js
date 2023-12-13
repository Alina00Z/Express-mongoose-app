const {Schema, model} = require('mongoose');
const aliSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = model("aliTodo", aliSchema);