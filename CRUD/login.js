const express = require('express');
const api = express.Router();
const user = require('../model/userModel');
// token套件
const jwt = require('jsonwebtoken');


api.post('/', async function (req, res) {
    user.findOne({ email: req.body.email })
        .then(data => {
            if (!data) {
                res.status(200).json({ status: false, message: '該信箱尚未註冊' })
            } else if (data.password === req.body.password) {
                const payload = {
                    user_id: data.id,
                    user_email: data.email,
                    user_password: data.password
                }
                const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '1h' });
                res.status(200).json({ status: true, message: '登入成功', token: token })
            } else {
                res.status(200).json({ status: false, message: '密碼錯誤' })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: error })
        })
})

module.exports = api;