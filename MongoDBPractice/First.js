var mongo = require('mongodb').MongoClient

//CREATING DATABASE
/* var url = "mongodb://localhost:27017/mydb"

mongo.connect(url, function(err, db)
{
    if(err) console.log(err)
    console.log("Database created")
    //db.close()
}) */

 var url = "mongodb://localhost:27017/"

mongo.connect(url, function(err, db)
{
    var datab = db.db("testDB")

    //CREATING COLLECTION
    /* datab.createCollection("customers" , function(err, res)
    {
        if(err) console.log(err)
        console.log("Collection created")
    }) */

    //INSERTING 1 DOCUMENT
    /* var obj = {name : "neha", age : 22, addr : "sinhgad road"}
    datab.collection("customers").insertOne(obj,function(err, res)
    {
        if(err) console.log(err)
        console.log("Document inserted")
    }) */

    //INSERTING many DOCUMENTS
    /* var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];
    datab.collection("customers").insertMany(myobj, function(err, res)
    {
        if (err) console.log(err)
        console.log("Number of documents inserted: " + res.insertedCount)
    }) */

    //ADDING ID TO OBJECTS
    /* var obj = [
        { _id: 111, name : 'a'},
        { _id: 112, name : 'b'},
        { _id: 113, name : 'c'}
    ]
    datab.collection("customers").insertMany(obj, function(err, res)
    {
        if(err) console.log(err)
        console.log("id inserted")
    }) */

    //FINDING DATABASE ELEMENTS (DISPLAYING)
    /* datab.collection("purchase_orders").findOne({}, function(err,res)
    {
        console.log(res.customer);
    })
    datab.collection("purchase_orders").find({}).toArray(function(err,res)
    {
        console.log(res[4]);
    })
    datab.collection("purchase_orders").find({}, { projection: { _id: 0, product: 1, total: 1 } }).toArray(function(err,res)
    {
        console.log(res);
    }) */

    //QUERIES
    /* var qry = {customer: "Monica"}
    datab.collection("purchase_orders").find(qry).toArray(function(err,res)
    {
        console.log(res)
    })
    var qry1 = {customer: /^R/}
    datab.collection("purchase_orders").find(qry1).toArray(function(err,res)
    {
        console.log(res)
    }) */

    //SORTING           Asc: 1, Desc: -1 
    /* datab.collection("purchase_orders").find().sort({product: -1}).toArray(function(err,res)
    {
        console.log(res)
    }) */

    //DELETING
    /* datab.collection("customers").deleteOne({name: 'c'},function(err,res)
    {
        console.log("deleted")
    })
    datab.collection("customers").deleteMany({name: /^s/},function(err,res)
    {
        console.log(res.result.n)
    }) */

    //DROPPING
    /* datab.collection("customers").drop(function(err, delOK)
    {
        if (err) console.log(err)
        if (delOK) console.log("Collection deleted")
    })
    datab.dropCollection("customers", function(err, delOK)
    {
        if (err) console.log(err)
        if (delOK) console.log("Collection deleted")
    }) */

    //UPDATING
    /* var updtQry1 = {name: 'b'}
    var updtQry2 = {$set: {name: 'varda', addr: 'sinhgad road'}}
    datab.collection("customers").updateOne(updtQry1, updtQry2,function(err,res)
    {
        console.log("updated")
    })
    var myquery = { address: /^S/ };
    var newvalues = {$set: {name: "Minnie"} };
    datab.collection("customers").updateMany(myquery, newvalues, function(err, res)
    {
        console.log(res.result.nModified + " document(s) updated")
    }) */

    //LIMIT
    /* datab.collection("customers").find().limit(5).toArray(function(err,res)
    {
        console.log(res)
    }) */

    datab.collection("order_totals").aggregate(
    [
        {
            $lookup:
            {
                from: 'purchase_orders',
                localField: 'product',
                foreignField: 'product_name',
                as: 'orderdetails'
            }
        }
    ]).toArray(function(err,res)
    {
        console.log(JSON.stringify(res)) //stringify:-converts obj to string
    })
})