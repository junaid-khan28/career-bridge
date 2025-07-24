const router = require("express").Router();
const Sign = require("../models/auth.models");

const emailRegEx = /.+\@.+\..+/;
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

router.post("/", async (req, res) => {
  let { name, password, email } = req.query || req.body;

  name = name?.trim();
  password = password?.trim();
  email = email?.trim();
  console.log(req.query)

  if (!name || !password || !email) {
    return res.status(400).json({ message: "Fill the details" });
  }

  if (!passwordRegEx.test(password)) {
    return res.status(400).json({
      message:
        "Password should have alteast 8 character, and alteast 1 capital letter, 1 digit, 1 special character",
    });
  }

  if (!emailRegEx.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    const isUserExist = await Sign.findOne({ email });

    if (!isUserExist) {
      const newUser = await Sign.create({ name, email, password });
      return res.status(201).json({ message: "Account is created", user : newUser });
    } else {
      return res.status(409).json({ message: "User already exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: `Failed to create account ${err}` });
  }
});

module.exports = router;
