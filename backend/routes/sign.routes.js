const router = require("express").Router();
const Sign = require("../models/auth.models");
const Bun = require("bun");
const jwt = require("jsonwebtoken");


const emailRegEx = /.+\@.+\..+/;
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

router.post("/signin", async (req, res) => {
  let { name, password, email } = req.query || req.body;

  name = name?.trim().toLowerCase();
  password = password?.trim();
  email = email?.trim();

  if (!name && !password && !email) {
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
    const isUserExist = req.cookies.careerBrige && await Sign.findOne({ email });

    if (!isUserExist) {
      const passwordHashed = await Bun.password.hash(password);
      const newUser = await Sign.create({ name, email, password: passwordHashed });


      const token = jwt.sign(
        {
          userId: newUser._id,
          email: newUser.email,
          name: newUser.name
        },
        process.JWT_SECRET,
        { expiresIn: '24h' }
      );


      res.cookie('careerBridge', token, {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'lax'
      });

      return res.status(201).json({
        message: "Welcome to Career-Bridge",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        }
      });
    } else {
      return res.status(409).json({ message: "User already exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: `Failed to create account ${err}` });
  }
});


router.post('/login', async (req, res) => {
  let { email, password } = req.body || req.query;

  email = email?.trim();
  password = password?.trim();

  if (!email || !password) {
    return res.status(400).json({ message: 'Fill all the details' });
  }

  try {
    const user = await Sign.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordValid = await Bun.password.verify(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        name: user.name
      },
      process.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.cookie('careerBridge', token, {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'lax'
    });

    return res.status(200).json({
      message: "Login successful"
    });

  } catch (err) {
    return res.status(500).json({ message: `Login failed: ${err.message}` });
  }
});


module.exports = router;
