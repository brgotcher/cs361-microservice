var express = require('express');
var http = require('http');
var cors = require('cors');
// import cors from 'cors';

var app = express();
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
*/

app.use(cors({
    origin: '*'
}));

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
    "Galaxy": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg",
    "Satellite": "https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2021/4/stock/210423-satcom.jpg",
    "Railroad": "https://i0.wp.com/www.differencebetween.com/wp-content/uploads/2015/04/Difference-Between-Railway-and-Railroad_Railroad.jpg?resize=550%2C347&ssl=1",
    "Eclipse": "https://images.hindustantimes.com/img/2021/05/26/550x309/_da5e6af0-ab06-11ea-bc4b-ba77fe6f99d0_1622030215013.jpg",
    "Trombone": "https://mixdownmag.com.au/wp-content/uploads/2021/01/mixdown-magazine-jupiter-trombone.jpg",
    "Orchestra": "https://images.techhive.com/images/article/2015/06/orchestra_tiltshift-100588867-primary.idge.jpg",
    "Garage": "https://www.thespruce.com/thmb/Z1-PWFFDcmejdU3uSinXQX66mUU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/upscale-residential-house-has-neat-garage-168531302-588389105f9b58bdb36b0226.jpg",
    "Platypus": "https://images2.minutemediacdn.com/image/upload/c_crop,h_1148,w_2045,x_0,y_199/f_auto,q_auto,w_1100/v1554744537/shape/mentalfloss/63062-istock-658344164.jpg",
    "Echidna": "https://www.australiangeographic.com.au/wp-content/uploads/2020/11/Echidna-01_Mayo-1800x1200.jpg",
    "submarine": "https://navalpost.com/wp-content/uploads/2021/05/submarine-underwater-1-1024x577.jpg",
    "Vineyard": "https://d2qc5xbha7dmp7.cloudfront.net/asw_images/10/82/2132801_large_c5ff16d4.jpg",
    "Orchard": "https://www.croptracker.com/images/orchardView6x4.png",
    "Condiments": "https://foodrevolution.org/wp-content/uploads/iStock-694593428.jpg",
    "Furniture": "https://germanheritagefurn.com/wp-content/uploads/2020/11/furniture-pieces-1024x585.jpg.webp",
    "Capitol": "https://upload.wikimedia.org/wikipedia/commons/4/4f/US_Capitol_west_side.JPG",
    "Charcuterie": "https://i2.wp.com/cheerfulchoices.com/wp-content/uploads/2021/02/Valentines-Day-Charcuterie-Board-1.jpeg?resize=750%2C500&ssl=1",
    "Street": "https://www.voicesofyouth.org/sites/voy/files/images/2020-09/246bae61-72e5-4087-a7c0-f5c5576c6e13.jpeg",
    "Desserts": "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-04/Boston-Market-Desserts.jpg?itok=XZxDRoin",
    "Earth": "https://i.gadgets360cdn.com/large/earth_large_1598600383967.jpg?downsize=950:*&output-quality=80&output-format=webp",
    "Canoe": "https://cdn11.bigcommerce.com/s-8trdi5a57j/images/stencil/400x400/products/4497/6037/Firstpaddleseatdetail__56494.1597268231.jpg?c=1",
    "Wolves": "https://thumbs-prod.si-cdn.com/S3jjobkpQFn2ZfMMcVQFK7ChxtY=/800x600/filters:no_upscale():focal(754x502:755x503)/https://public-media.si-cdn.com/filer/b2/9e/b29edee7-c3b1-4dc1-a278-e3ea4290d31d/gettyimages-1184378069_web.jpg",
    "Kitchen": "https://cdn.trendswoodfinishing.com/wp-content/uploads/2016/03/glass-doorcab.jpg",
    "Present": "https://zehirablog.files.wordpress.com/2013/12/christmas-present-2.jpg",
    "Tacos": "https://i.imgur.com/vnzL7uN.jpeg",
    "Bread": "https://www.thespruceeats.com/easy-honey-white-bread-recipe-428160",
    "desert": "https://www.thoughtco.com/thmb/kMdaPu6HY0QViokREKnisC-8784=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-685791488-6817eac67e474ccd8d84ff4a80e517cf.jpg",
    "horse": "https://stablemanagement.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_600/MTQ1MDY3NjE4MDE2NTAzMTQz/horse-grazing-pasture-1500.webp",
    "Elbow": "https://www.physiofitcambridge.co.uk/wp-content/uploads/2017/06/Golfers-Elbow-site-of-pain.png",
    "Trailer": "https://dealer-cdn.com/showroom-files/trailerZ969a7073b.jpg",
    "Heart": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Heart_anterior_exterior_view.jpg",
    "Lemons": "https://minnetonkaorchards.com/wp-content/uploads/2021/04/Health-Benefits-of-Lemons.jpg",
    "Limes": "https://farmflavor.com/wp-content/uploads/2020/05/abundance-calamansis-calamondins-2363347.jpg",

    
    
    
    
    


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
