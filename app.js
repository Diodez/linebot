const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text

    if (msg == 'สวัสดี') {
        msg == "ดีจ้า";
        reply_message(reply_token, msg);

    } else if (msg == '1') {
        reply(reply_token, msg);
    }
    else {
        reply_message(reply_token, msg);
    }

    res.sendStatus(200)
});

app.listen(port);


function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 0+X6YrX7OfP83ERqESsjptG6XVZ9XFJvtKWfI0npquj4lN9vG+UcJoVvEQF0muWn6nk74+BKqIKZVLYx2fttTQt8RlT5TASOicCHzx1W3KeT1q5ZwhBFbIWoF7hQOlErJTYN/FRynvINx4RRS7EhUAdB04t89/1O/w1cDnyilFU='
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                type: 'sticker',
                packageId: '11537',
                stickerId: '52002757',
            }
        ]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}

function reply_message(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 0+X6YrX7OfP83ERqESsjptG6XVZ9XFJvtKWfI0npquj4lN9vG+UcJoVvEQF0muWn6nk74+BKqIKZVLYx2fttTQt8RlT5TASOicCHzx1W3KeT1q5ZwhBFbIWoF7hQOlErJTYN/FRynvINx4RRS7EhUAdB04t89/1O/w1cDnyilFU='
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                
                "type": "image",
                "originalContentUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png",
                "previewImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png",
                "animated": false
                  
            }
        ]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}