const {combineReducers} = require("devtools/client/shared/vendor/redux");
const {authenticate} = require("./authenticate");

module.exports = combineReducers({
  authenticate,
});
