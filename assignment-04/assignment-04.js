//my database contains two tables to keep the databased more organised
//it is split up into userdetails and useraddress.


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "s0dqQ30Bzp",
  password: "d2vMcCtsbD",
  database: "s0dqQ30Bzp"
});




/*
con.connect(function(err) {   //(C)    Insert into UserAddress
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO UserAddress (UserID, Address, Town, County, Eircode) VALUES ('1', 'Tyrone Place', 'Inchicore','Dublin','D10 FV03')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
})*/


/*
con.connect(function(err) {   //(C)    Insert into UserShippingAddress
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO UserShippingAddress (UserID, SAddress, STown, SCounty, SEircode) VALUES ('1', 'Tyrone Place', 'Inchicore','Dublin','D10 FV03')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
})*/

/*
con.connect(function(err) {    // (C)  Insert into UserDetails
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO UserDetails (UserID, Title, FName, SName, Mobile, Email) VALUES ('1', 'Mr', 'Dean','Brown','0836547892','Deanb@gmail.com')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
})*/



/*
con.connect(function(err) {         //  (R) Retrieve data from UserDetails and display in console                                         
  if (err) throw err;
    con.query("SELECT * FROM UserDetails WHERE UserID='2'",function(err,result,fields){
      if (err) throw err;
      console.log(result);
  });
});*/




/*
con.connect(function(err){    // (U) Updating phone email and title
  if (err) throw err;
  var sql ="UPDATE UserDetails SET Title='Dr', Email='Dean.Brown.2020@mumail.ie', Mobile='0878423654' WHERE UserID='1'";
  con.query(sql,function (err,result){
    if (err) throw err;
    console.log("records updated");
  });
});
*/

/*
con.connect(function(err){    // (U) Updating address
  if (err) throw err;
  var sql ="UPDATE UserAddress SET Address='124 Ballyfermot Cresent', Town='Ballyfermot', Eircode='D10 FV56' WHERE UserID='1'";
  con.query(sql,function (err,result){
    if (err) throw err;
    console.log("records updated");
  });
});*/


/*
con.connect(function(err) {   //(D) Delete when matching specified email,phone and name
  if (err) throw err;
  var sql = "DELETE FROM UserDetails WHERE Email = 'Dean.Brown.2020@mumail.ie' AND Mobile= '0878423654' AND FName='Dean' AND SName='Brown'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});*/


