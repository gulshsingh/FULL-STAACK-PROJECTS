const express = require('express');
const {chats} = require('./Data/data'); 

const app = express();



app.get('/' , (req,res) =>{
    res.send("Api is working");
})


app.get('/api/chats', (req, res)=>{
    res.send(chats)
})

app.get('/api/chats/:id', (req, res)=>{
    
    const chatId = req.params.id;
    const chat = chats.find(c => c._id === chatId);
    res.send(chat);
   
})

app.listen(8080, ()=>{
    console.log('Server is running on port 8080');
})