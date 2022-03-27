const { User, USER_ROLES_ENUM } = require("../models/user");
const VerificationToken = require("../models/verificationtoken");
const {
  JWT_SECRET,
  EMAIL_USER,
  EMAIL_PASSWORD,
  CLIENT_ID,
  SENDGRID_API_KEY,
} = require("../configs/config");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const https = require('https')

// sgMail.setApiKey(SENDGRID_API_KEY);

signToken = (user) => {
  return JWT.sign(
    {
      iss: "ashwani",
      sub: user.id, //here id and _id both are same(mongodb generated id)
      iat: new Date().getTime(), //current time
      exp: new Date().setDate(new Date().getDate() + 30), //current time +30 day ahead
    },
    JWT_SECRET
  );
};

var msg =
  "Hola amigos!!\n\n" +
  "We hope you are safe, healthy and doing well in your lives.\n" +
  "Continuing our legacy, Celesta'22 is back again this year with double excitement to promote technical and managerial enthusiasm amongst this generation and transform the innovative ideas into reality.\n" +
  "So, Celesta, the techno-management fest of IIT Patna officially launches its Campus Ambassador program for the year 2022!!\n" +
  "Team Celesta cordially welcome you, the selected ones, onboard this enthralling journey. Give yourself a chance to develop the leadership and management qualities and build our brand to the best of your ability!!\n" +
  "So Let's get ready!!\n\n" +
  "Rulebook CA Program : https://drive.google.com/file/d/1_XuC6Q8ueSCMjeS0nzSZVwHFNiuMuqy5/view?usp=drivesdk \n" +
  "Whatsapp group link:https://chat.whatsapp.com/E6axGHXCQSG8Nto0tW5enC \n \n \n" +
  "Regards,\n" +
  "CELESTA DEV Team";

// sendMail = async (emailId, celestaId) => {
//   const msg = {
//     to: emailId,
//     from: "celesta.iitp@gmail.com",
//     subject: "Celesta 2020",
//     text:
//       "Your Celesta Id is" +
//       " " +
//       celestaId +
//       "\n" +
//       "Please save it for later use!",
//     // html: emailBody,
//   };

//   try {
//     await sgMail.send(msg);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };

// sendCAMail = async (emailId, celestaId) => {
//   const msg = {
//     to: emailId,
//     from: "celesta.iitp@gmail.com",
//     subject: "Celesta Campus Ambassador Program 2022",
//     text: "Your Celesta Id is" + " " + celestaId + "\n" + Msg,
//     // html: emailBody,
//   };

//   try {
//     await sgMail.send(msg);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };

// sendPwdResetMail = async (emailId, code) => {
//   const msg = {
//     to: emailId,
//     from: "celesta.iitp@gmail.com",
//     subject: "Celesta, Password Reset Mail",
//     text: `Your password reset code is ${code}`,
//     // html: emailBody,
//   };

//   try {
//     await sgMail.send(msg);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };

sendMail = async (email, celestaId) => {
  // let transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: EMAIL_USER,
  //     pass: EMAIL_PASSWORD,
  //   },
  //   tls: {
  //     // do not fail on invalid certs
  //     rejectUnauthorized: false,
  //   },
  // });
  let mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: "Celesta ID 2022",
    text:
      "Your Celesta ID is" +
      " " +
      celestaId +
      "\n" +
      "Please save it for further use! \n \n" +
      "Regards,\n " +
      "CELESTA DEV Team",
  };

  const options = {
    host: '50ulcupurc.execute-api.ap-south-1.amazonaws.com',
    path: '/default/sendMail',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };


  try {
    const req = https.request(options, (res) => {
      var res = (JSON.stringify(res.statusCode));
      console.log(res);
    });

    req.write(JSON.stringify(mailOptions));

    req.on('error', (e) => {
      reject(e.message);
    });
    
    req.end();
    //do the request
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

sendCAMail = async (email, celestaId) => {
  // let transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: EMAIL_USER,
  //     pass: EMAIL_PASSWORD,
  //   },
  //   tls: {
  //     // do not fail on invalid certs
  //     rejectUnauthorized: false,
  //   },
  // });
  let mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: "Celesta Campus Ambassador Program 2022",
    text: "Your Celesta Id is" + " " + celestaId + "\n" + msg,
  };

  const options = {
    host: '50ulcupurc.execute-api.ap-south-1.amazonaws.com',
    path: '/default/sendMail',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const req = https.request(options, (res) => {
      var res = (JSON.stringify(res.statusCode));
      console.log(res);
    });

    req.write(JSON.stringify(mailOptions));

    req.on('error', (e) => {
      reject(e.message);
    });
    
    req.end();
    //do the request
    
    return true;
  }catch (error) {
    console.log(error);
    return false;
  }
};

sendPwdResetMail = async (email, code) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });
  let mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: "Celesta, Password Reset Mail",
    text: `Your password reset code is ${code}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
};

generateCelestaId = async () => {
  var minm = 1000;
  var maxm = 9999;
  while (true) {
    const randomNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    const celestaId = "CLST" + randomNumber;
    const user = await User.findOne({ celestaId });
    if (!user) {
      return celestaId;
    }
  }
};

module.exports = {
  //signup api (access: all)
  signUp: async (req, res, next) => {
    console.log("Inside signup");
    try {
      const rawUser = req.value.body;
      const foundUser = await User.findOne({
        email: rawUser.email,
      });
      console.log(rawUser.referralId);

      if (foundUser) {
        return res
          .status(403)
          .json({ message: "Email is already registered with us." });
      }
      if (rawUser.referralId !== "CLST0000") {
        const user = await User.findOne({ celestaId: rawUser.referralId });
        if (!user) {
          return res
            .status(404)
            .json({ message: "Please give correct referal id" });
        }
        user.points += 200;
        console.log(user);
        await user.save();
      }
      const newUser = new User(req.value.body);
      // newUser.referralId = rawUser.referralId;
      var newToken = new VerificationToken({
        userId: newUser._id,
      });
      console.log(req.headers.host);
      const celestaId = await generateCelestaId();
      newUser.celestaId = celestaId;
      let mailresponse = await sendMail(newUser.email, celestaId);

      if (mailresponse === true) {
        await newUser.save();
        await newToken.save();
        res.status(200).json({ data: newUser });
      } else {
        res.status(500).json({ message: "Mail send failed!" });
      }
    } catch (e) {
      console.log(e.message);
    }
  },

  //signin api (access: all)
  signIn: async (req, res, next) => {
    //generate token
    const user = req.user;
    const token = signToken(user);

    res.status(200).json({
      data: {
        token: token,
        user: user,
      },
    });
  },
  registerCA: async (req, res) => {
    console.log("Inside CA ");
    const rawUser = req.body;
    console.log(rawUser);
    const foundUser = await User.findOne({
      email: rawUser.email,
    });
    if (foundUser) {
      return res
        .status(403)
        .json({ message: "Email is already registered with us." });
    }
    const { name, email, password, college, phone, dob } = rawUser;
    const newUser = new User({
      name,
      email,
      password,
      college,
      ca: 1,
      phone,
      dob,
    });
    var newToken = new VerificationToken({
      userId: newUser._id,
    });
    const celestaId = await generateCelestaId();
    newUser.celestaId = celestaId;
    console.log(req.headers.host);
    let mailresponse = await sendCAMail(newUser.email, newUser.celestaId);

    if (mailresponse === true) {
      // const celestaId = await generateCelestaId();
      // newUser.celestaId = celestaId;
      await newUser.save();
      await newToken.save();
      console.log(newUser);
      res.status(200).json({ data: newUser });
    } else {
      res.status(500).json({ message: "Mail send failed!" });
    }
  },

  activateUser: async (req, res, next) => {
    const foundToken = await VerificationToken.findById(req.params.token);

    if (foundToken) {
      const foundUser = await User.findById(foundToken.userId);

      if (foundUser) {
        if (foundUser.isVerified)
          return res
            .status(400)
            .json({ message: "This user has already been verified." });

        User.findByIdAndUpdate(
          foundUser._id,
          { isVerified: true },
          { new: true }
        ).then((updatedUser) => {
          res
            .status(200)
            .json({ message: "The account has been verified. Please log in." });
        });
      } else {
        return res
          .status(400)
          .json({ message: "We were unable to find a user for this token." });
      }
    } else {
      return res.status(400).json({
        message:
          "We were unable to find a valid token. Your token my have expired.",
      });
    }
  },

  forgotPwd: async (req, res, next) => {
    const { email } = req.body;
    console.log(req.body.email);
    const user = await User.findOne({
      email,
    });
    if (user) {
      let code = Math.floor(100000 + Math.random() * 900000);
      if (user.active === 0) {
        code = user.code;
      }
      let mailresponse = await sendPwdResetMail(email, code);
      if (mailresponse === true) {
        // update user code
        await User.findByIdAndUpdate(
          {
            _id: user._id,
          },
          {
            code: code,
          }
        );
        res.status(200).json({
          message: "Password reset code is sent to your email account",
        });
      } else {
        res.status(504).json({
          message: "Could not send password reset code to your email account",
        });
      }
    } else {
      res.status(404).json({
        message: "No user found for this email",
      });
    }
  },

  resetPwd: async (req, res, next) => {
    let { email, code, password, confirmPassword } = req.body;
    console.log(req.body);
    if (code == 0) {
      return res.status(407).json({
        message: "Invalid reset password code",
      });
    }

    const user = await User.findOne({
      email,
    });
    if (user) {
      if (user.code != code) {
        return res.status(401).json({
          message: "Incorrect reset password code",
        });
      }
      if (password !== confirmPassword) {
        return res.status(403).json({
          message: "Passwords do not match",
        });
      }
      let pwd = password;
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(pwd, salt);
      password = passwordHash;

      User.findByIdAndUpdate(
        {
          _id: user._id,
        },
        {
          password,
          code: 0,
        },
        {
          new: true,
        }
      ).then((updatedUser) => {
        res.status(200).json({
          message:
            "Password reset successful. You can now login with your new password",
        });
      });
    } else {
      res.status(404).json({
        message: "No user found for this email",
      });
    }
  },

  //get particular user api (access: auth users)
  getUser: async (req, res, next) => {
    const userId = req.params.userId;

    const user = await User.findOne({
      _id: userId,
    });
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  },

  uploadUserProfileImage: async (req, res, next) => {
    //console.log(req.body);
    console.log(req.headers);
    const userId = req.user.id;
    const user = await User.findOne({
      _id: userId,
    });
    if (user) {
      User.findByIdAndUpdate(
        { _id: userId },
        { profilePhoto: `${req.headers.host}/${req.file.path}` },
        { new: true }
      ).then((updatedUser) => {
        res.status(200).json({ data: updatedUser });
      });
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  },
  addCAPoints: async (req, res) => {
    try {
      console.log(req.body);
      console.log("hello");
      const { celestaId, points } = req.body;
      Number(points);
      console.log(typeof points);
      if (!celestaId || !points) {
        return;
        res.status(404).json({ message: "Please fill all details" });
      }
      const user = await User.findOne({ celestaId });
      user.points += Number(points);
      await user.save();
      res.status(200).json({ message: "Points updated successfully." });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getAllCA: async (req, res) => {
    try {
      var mysort = { points: -1 };
      const CA = await User.find({ ca: 1 }).sort(mysort);
      res.status(200).json(CA);
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  findByCelestaId: async (req, res) => {
    try {
      console.log("hello");
      const { celestaId } = req.body;
      if (!celestaId) {
        return res.status(404).json({ message: "Please fill all details" });
      }
      const user = await User.findOne({ celestaId });
      if (!user) {
        return res.status(404).json({ message: "Please fill correct details" });
      }
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateDetails: async (req, res) => {
    let { id, name, phone, college } = req.body;
    console.log(req.body);

    User.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        name: name,
        phone: phone,
        college: college,
      },
      function (err, docs) {
        if (err) res.json(err);
      }
    ).then((updatedUser) => {
      res.status(200).json({
        message: "Details updated",
      });
    });
  },
};
