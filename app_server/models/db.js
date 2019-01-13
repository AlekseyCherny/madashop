const assert = require('assert');
//MONGO
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'madashop';
const client = new MongoClient(url, { useNewUrlParser: true });

function getItems(fromCollection,count,skip,res){

    client.connect(function(err) {
        assert.equal(null, err);
        var ts = new Date();
console.log("Connected correctly 2 to server "+ts.toISOString());
        //console.log("Connected correctly 2 to server");

        const db = client.db(dbName);
        const collect = db.collection(fromCollection); 
        collect.find({}).skip(skip).limit(count).toArray(function(err, docs) {
        db.close();
        console.log("from db="+docs);
        res.json( docs);
    }); 
        
    });


    
}

const upsertDiskontCards = function(db,jsonkey,jsondoc, callback) {
    // Get the documents collection
    const collect = db.collection('cards');
    // Upsert a single document
    collect.updateOne(jsonkey, {$set: jsondoc}, {
        upsert: true
      }, function(err, result) {
        assert.equal(null, err);
        //assert.equal(1, r.upsertedCount);
        callback(result);
      });
  }

  const upsertGoods = function(db,jsonkey,jsondoc, callback) {
    // Get the documents collection
    const collect = db.collection('goods');
    // Upsert a single document
    collect.updateOne(jsonkey, {$set: jsondoc}, {
        upsert: true
      }, function(err, result) {
        assert.equal(null, err);
        //assert.equal(1, r.upsertedCount);
        callback(result);
      });
  }

function updateCards(objJSON){
    client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        console.log("СТАРТ ЗАГРУЗКИ");
        for (i in objJSON) {
            var key = { code : objJSON[i].code};
            delete objJSON[i].code ;
            upsertDiskontCards(db,key,objJSON[i],function(){});
            //console.log(JSON.stringify(key)+" - "+JSON.stringify(objJSON[i]));
       } 
       console.log("ВСЕ КАРТЫ ЗАГРУЖЕНЫ !!!");
       client.close();
        
    });
} 
function updateGoods(objJSON){
    client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        console.log("СТАРТ ЗАГРУЗКИ");
        for (i in objJSON) {
            var key = { code : objJSON[i].code};
            delete objJSON[i].code ;
            upsertGoods(db,key,objJSON[i],function(){});
            //console.log(JSON.stringify(key)+" - "+JSON.stringify(objJSON[i]));
       } 
       console.log("ВСЕ GOODS ЗАГРУЖЕНЫ !!!");
       client.close();
        
    });   
} 

module.exports={
    client,
    dbName,
    upsertDiskontCards,
    updateCards,
    updateGoods,
    upsertGoods,
    getItems
}
