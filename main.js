var express = require('express');
var http = require('http');
import cors from 'cors';

var app = express();
app.use(cors());

const PORT = process.env.PORT || 3412;

// http.createServer(function(req,res){
//      res.writeHead(200, { 'Content-Type': 'text/plain' });
//      res.end("Hello world!");
// }).listen(3412);

dct = {
    "Elephant": "https://images.theconversation.com/files/230552/original/file-20180803-41366-8x4waf.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    "Giraffe": "https://assets.nrdc.org/sites/default/files/styles/full_content/public/media-uploads/4156898465_25c1473163_o_0.jpg?itok=o_A2j-dT",
    "Skyline": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Downtown_Oklahoma_City_skyline_%282%29.jpg",
    "Hippopotamus": "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2hpcHBvLXN1bnNjcmVlbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    "Library": "https://s3.amazonaws.com/libapps/accounts/54937/images/NYPublicLib.jpg",
    "Gymnasium": "https://d6vze32yv269z.cloudfront.net/32e1435e-50ad-45a8-a151-0aacfe7f5ac6/pages/images/img_8285-bj0znt.jpg",
    "Helicopter": "https://cdn.vox-cdn.com/thumbor/zTEe0PixI4EmHamgaX14-EVAfCM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15394156/D85_1824.jpg",
    "Intersection": "https://images.unsplash.com/photo-1567563549378-81212b9631e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzZWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    


}

keys = Object.getOwnPropertyNames(dct);


app.get('/', function (req,res) {
    val = Math.floor(Math.random() * (keys.length));
    str = keys[val];
    url = dct[str];
    
    out = {};
    out[str] = url;

    res.send(out);
});

app.listen(PORT);

console.log('Server started on localhost:3412; press Ctrl-c to terminate');
