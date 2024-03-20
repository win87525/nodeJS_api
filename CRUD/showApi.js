const express = require('express');
const api = express.Router();

const user = require('../model/userModel');

api.get('/', async function (req, res) {
    try {
        const users = await user.find();
        res.send(users); // 将用户数据以 JSON 格式发送回客户端
    }
    catch (error) {
        console.log(error);
    }
})

module.exports =api;