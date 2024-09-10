const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "MyNameisDivyenduVimal";

router.post(
    "/creatuser",
    [
        // username must be an email
        body("email", "Incorrect Email").isEmail(),
        body("name", "Invalid Name Format").isLength({ min: 5 }),
        // password must be at least 5 chars long
        body("password", "Incorrect Password").isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);
        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                location: req.body.location,
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

router.post(
    "/loginuser",
    [
        // username must be an email
        body("email", "Incorrect Email").isEmail(),
        body("password", "Invalid Password Format").isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res
                    .status(400)
                    .json({ errors: "Invalid username or password." });
            }

            const pwdCompare = await bcrypt.compare(
                req.body.password,
                userData.password
            );
            if (!pwdCompare) {
                return res
                    .status(400)
                    .json({ errors: "Invalid username or password." });
            }

            const data = {
                user: {
                    id: userData.id
                }
            }
            
            const authToken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authToken: authToken });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

module.exports = router;