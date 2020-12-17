const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

// admin login
router.post("/admin", async (req, res) => {
  // checking admin user in database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is wrong");

  // checking password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  // creat and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ token: token });
});

router.get('/userlist', (req, res) => {
  User.find((err, user) => {
      if (!err) { res.send(user); }
      else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/Users', function(req, res){
  console.log('get req');
  User.find({})
  .exec(function(err, user){
    if (err){
      console.log("error");
          } else{
            res.json(user);
          }
  });
} );

router.get('/', (req, res, next)=>{
  res.status(200).json({
    msg: 'this is user'
  })
})

module.exports = router;
