let mysql = require('mysql');
var http = require('http');

var conn = mysql.createConnection(
{
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'TestDB'
})
conn.connect(function(err)
{
    if(err) console.log(err);
    console.log('Connected!!');
    
    var sql1 = "SELECT customers.name AS user, employee.name AS favorite FROM customers JOIN employee ON customers.address = employee.id";
    conn.query(sql1, function (err, result)
    {
        if(err) console.log(err);
        console.log(result);
    })

    var sql2 = "update customers set address = 'karvenagar' where address = 'Kothrud'";
    conn.query(sql2, function (err,result,fields)
    {
        if (err) console.log(err);
        console.log(result);
    })

    var sql3 = "SELECT * FROM customers LIMIT 1";
    conn.query(sql3, function (err, result)
    {
        if (err) console.log(err);
        console.log(result);
    });

    var sql = "select * from customers";
    conn.query(sql, function (err,result,fields)
    {
        if (err) console.log(err);
        console.log(result);
    })
})
