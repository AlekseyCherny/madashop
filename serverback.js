const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()
var cors = require('cors')
//const mongo= require('./app_server/models/db');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var formidable = require('formidable');
var cookieParser = require('cookie-parser');
//var morgan = require('morgan');
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
let dbClient;

app.use(cors());
// Body parser, to access req.body
app.use(bodyParser.json());

app.use(cookieParser());
// Sessions to create req.session
app.use(session({
  name: 'user_demo',
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 60000,
    secure: false
  }
}));

var urlencodedParser = bodyParser.urlencoded({ extended: true });
//app.use(urlencodedParser);
// POST /api/login to log in the user and add him to the req.session.authUser
app.post('/login',urlencodedParser, function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    
    req.session["auth"] = { username: 'demo' }
    res.redirect('/');
    //return res.json({ username: 'demo' })
  }

  //res.status(401).json({ error: 'Bad credentials' })
  res.redirect('login');
})
app.post('/api/read/card',urlencodedParser, function (req, res) {
  var barcode = req.body.barcode;
  const collection = req.app.locals.collectioncard;
  collection.findOne({code:barcode},function(err, card){    
      if(err) return console.log(err);
      res.send(card)
  });
})

app.post('/api/write/order',urlencodedParser, function (req, res) {
  var telephone = req.body.telephone;
  var address = req.body.address;
  var barcode = req.body.barcode;
  var items = req.body.items;
  console.log(telephone)
  console.log(items)
  res.send("Заказ получен !");
 
})

app.post('/api/read/cardbyphone',urlencodedParser, function (req, res) {
  var telephone = req.body.telephone;
  const collection = req.app.locals.collectioncard;
  collection.findOne({tel:telephone},function(err, card){    
      if(err) return console.log(err);
      res.send(card||{})
  });
})

app.post('/logout', function (req, res) {
  delete req.session.authUser
  res.redirect('/');
})

app.get('/api/upload/cards', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="/api/upload/cards" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})
app.get('/api/upload/goods', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="/api/upload/goods" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})
app.post('/api/upload/cards', function (req, res) {
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var fs = require('fs');
      var dataFromFile = fs.readFileSync(oldpath, 'utf8');
      dataFromFile = dataFromFile.trim(); 
      var objJSON = JSON.parse(dataFromFile);
      const collection = req.app.locals.collectioncard;
      for (i in objJSON) {
        var key = { code : objJSON[i].code};
        delete objJSON[i].code ;
        collection.updateOne(key,{$set: objJSON[i]},{
          upsert: true});
       // upsertGoods(db,key,objJSON[i],function(){});
        //console.log(JSON.stringify(key)+" - "+JSON.stringify(objJSON[i]));
      } 

      //mongo.updateCards(objJSON);
      res.write('File uploaded  ');
      res.end();
    });
})

app.post('/api/upload/goods', function (req, res) {
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var fs = require('fs');
      var dataFromFile = fs.readFileSync(oldpath, 'utf8');
      dataFromFile = dataFromFile.trim(); 
      var objJSON = JSON.parse(dataFromFile);
      const collection = req.app.locals.collection;
      
      for (i in objJSON) {
        var key = { code : objJSON[i].code};
        delete objJSON[i].code ;
        collection.updateOne(key,{$set: objJSON[i]},{
          upsert: true});
       // upsertGoods(db,key,objJSON[i],function(){});
        //console.log(JSON.stringify(key)+" - "+JSON.stringify(objJSON[i]));
      } 

     // mongo.updateGoods(objJSON);
      res.write('File uploaded  ');
      res.end();
    });
})
app.get('/api/goods/:id', function (req, res) {
  console.log("Мы получили"+req.params.id)
   const collection = req.app.locals.collection;
    collection.find({}).limit(9).toArray(function(err, users){    
        if(err) return console.log(err);
        res.send(users)
    });
  });
       
  app.post('/api/goods/list', urlencodedParser,function (req, res) {
    var items_ids  = req.body.items_ids;
    var obj_ids = items_ids.map(function(id) { return ObjectID(id); });
    const collection = req.app.locals.collection;
    console.log("COL "+items_ids)
     collection.find({ _id : { $in : obj_ids} }).toArray(function(err, items){    
         if(err) return console.log(err);
         console.log("ITEMS "+JSON.stringify(items))
         res.send(items)
     });
   });

mongoClient.connect(function(err, client){
  if(err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("madashop").collection("goods");
  app.locals.collectioncard = client.db("madashop").collection("cards");
  app.listen(3001, function(){
      console.log("Сервер API ожидает подключения...");
  });
});
process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
