const todo = require("./todo");

module.exports = function(app) {
    [
        todo
    ].forEach((p) => {
      p(app);
    })
  }