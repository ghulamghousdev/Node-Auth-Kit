const express = require('express');
const auth = require("../../middlewares/auth");
const User = require("../../models/user")
const router = new express.Router();

//To register a new user
router.post("/user/register", async(req, res) => {
    const user = new User(req.body);
    console.log(req);
    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(200).send({ user, token});
    }
    catch(error){
        res.status(404).send(error);
    }
})
//To login to into the system
router.post("/user/login", async(req, res) => {
  console.log(req.body)
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (err) {
    res.status(404).send(err);
  }
});

//Logging out 
router.post("/user/logout", auth, async(req, res) =>{
    try{
        req.user.tokens = req.user.tokens.filter((current) => current.token !== req.token);
        await req.user.save();
        res.status(200).send();
    }catch(error){
        res.status(500).send(error);
    }
})

//To get user
router.get("/users/me", auth, (req, res) => {
    try {
      res.status(200).send(req.user);
    } catch (err) {
      res.status(400).send(err);
    }
});

//View other user
router.get("/user/:id", auth, async (req, res) => {
    try {
      const _id = req.params.id;
      const user = await User.findById(_id);
      if (!user) {
        throw new Error("User not Found");
      }
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send("Unable to find User");
    }
  })

module.exports = router;