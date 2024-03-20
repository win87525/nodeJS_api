const express = require('express');
const app =express();
const port = 3000;
const mongoose = require('mongoose');
// cors解決跨域問題
const cors = require('cors');
// 解決跨域問題，沒指定網域就是全都開放
app.use(cors());
app.use(express.json());
require('dotenv').config();

console.log(process.env.JWT_TOKEN) // secretAccount


mongoose.connect('mongodb+srv://win87525:win110387525@userdata.kmawgpf.mongodb.net/loginUser?retryWrites=true&w=majority')
.then(() => {
    console.log('已連接 MongoDB 資料庫');
    app.listen(port,function(){
        console.log('伺服器運行在http://localhost:3000');
    })
})
.catch((error) => {
    console.error('連線資料庫時發生錯誤', error);
});

app.get('/',(req,res)=>{
    res.send('這裡是首頁')
});

// 登入驗證
const login =require('./CRUD/login.js');
app.use('/login',login);

// 註冊
const register = require('./CRUD/register.js')
app.use('/register',register);

// const upload = require('./CRUD/upload.js')
// app.use('/upload',upload);

// 查看API
const showApi = require('./CRUD/showApi.js')
app.use('/showApi',showApi);


