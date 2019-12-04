const actionTypes = {
  AUTHENTICATE_USER: "AUTHENTICATE_USER",
};

const protectedPages = {
  ["/auth"]: "/dashboard",
  ["/"]: false,
  ["/terms-of-service"]: false,
};

module.exports = Object.assign({}, actionTypes, protectedPages);
