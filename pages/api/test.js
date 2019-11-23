// const handleSignUp = require('../../controllers/handleSignUp');
const {db, User} = require('../../models');

export default (req, res) => {
  User.create({
    username: 'james',
    password: "shit",
  })
      .then(() => {
        res.status(201);
        res.send('wow');
      })
      .catch((err) => {
        console.log(err.errors[0].message);
        res.status(400).json(err.errors[0].message);
      });

  // db.sequelize
  // .sync()
  // .then(function() {
  //   console.log('Nice! Database looks fine');
  // })
  // .catch(function(err) {
  //   console.log(err, 'Something went wrong with the Database Update!');
  // });

};
