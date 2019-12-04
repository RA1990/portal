// defines how the app state changes - does the work to change state
// The reducer function takes two arguments: the previous app state,
// the action being dispatched and returns the new app state.
const {
  AUTHENTICATE_USER,
} = require("../constants");

// root reducer for authentication
function authenticate(state, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return authenticateUser(state, action);
  }
}

function authenticateUser(state, action) {
  // do w/e you have to do
  return {...state, statePropModifying: true};
}

module.exports = {
  authenticate,
};
