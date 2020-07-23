const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const dbConnect = require('./config/connect.js');
const mongoose = require ('mongoose');

mongoose.connect(dbConnect.database.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Successfully connected to MongoDB");
}).catch(err=>{
    console.log('Unable to connect to mongoDB',err);
    process.exit();
});

require('./app/routes/phoneDetail.routes.js')(app);
//require('./app/routes/personalDetails.routes.js')(app);
//require('./app/routes/orders.routes.js')(app);

/*
app.get('/',(req,res)=>{
    res.json({"message": " My phone shop app"})
});
*/

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});