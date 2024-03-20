const express = require('express');

const api = express.Router();
api.use(express.json());

const user = require('../model/userModel');

// 做資料傳遞，做註冊用途
api.post('/', async (req, res) => {
    try {
        // 拿到post傳遞過來的資料
        const { email, password } = req.body;

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(201).json({ message: '該信箱已有人註冊' })
        }
        // const newUser = new user({ email, password });
        // await newUser.save();

        // // 创建新用户数据
        await user.create({ email, password })
        res.status(201).json({ redirectTo: 'http://localhost:5173/about', redirectMessage: '註冊成功，跳轉至首頁' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); // 如果发生错误，发送 500 错误码
    }
});

module.exports = api;