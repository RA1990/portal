// describe what happened
const {
  AUTHENTICATE_USER,
} = require("../constants");

const testUser = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRvcnlzIiwiaWF0IjoxNTc1NDEyNzQ5LCJleHAiOjE1NzU0MTMwNDl9.1gTBV_uemdVxFd8puLy9yrzLQtiovfboXnrosAMoqOs",
  user: "lloan",
};

// action creator
const authenticateUser = (user, token) => {
  return {
    type: AUTHENTICATE_USER,
    token,
    user,
  };
};


module.exports = {
  authenticateUser,
};
