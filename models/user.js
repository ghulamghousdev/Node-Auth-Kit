const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const mongoose = require ('mongoose');

const userModel = mongoose.Schema({
    
    //Defining full name property on User Schema
    fullName: {
        type: String,
        required: true,
        trim: true,
    }, 

    //Defining the email property on User Schema
    email:{
        type: String, 
        required: true,
        trim: true,
        unique:[true, "Email is already registered"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Provided Email is not a valid Email");
            }
        }
    },

    //Defining username property on User Schema
    username:{
        type: String,
        required: true,
        trim: true,
        unique:[true, "Username is already taken"]
    },

    //Defining the password property on User Schema
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },

    tokens: [
        {
            token:{
                type:String,
                required: true,
            }
        }
    ]

})


userModel.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign(
      { _id: user._id.toString() },
      "thisisuserverification"
    );
  
    user.tokens = user.tokens.concat({ token });
    await user.save();
  
    return token;
  };

  userModel.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Login");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return user;
    } else {
      throw new Error("Invalid Login");
    }
  };

userModel.pre("save", async function (next){
    const user = this;
    if (user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model("User", userModel);

module.exports = User;


