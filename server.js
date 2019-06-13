let express = require('express');
let app = express();
let path = require('path');

let Pusher = require("pusher");

let pusher = new Pusher({
    appId: "799147",
    key: "c325365c91b370d9cf45",
    secret: "26889b4b10d73ccbd17b",
    cluster: "eu",
    encrypted: true
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/pusher', function(req, res) {
    pusher.trigger("my-channel", "my-event", {
        message: "next"
    });
    res.sendStatus(200);
});

app.listen(8080, function () {
    console.log("Started on PORT 8080");
});
