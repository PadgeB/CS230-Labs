/*For my data base I used an embedded model for creating my personal details collection so 
personal details and both addresses are embedded in the one collection. 
I then used a normalised approach for my phone details and orders collections.
This made managing the data far easier for me. */



const MongoClient=require('mongodb').MongoClient;
const assert= require ('assert');
const url='mongodb+srv://Admin:cs230five@cluster0-jih9p.mongodb.net/test?retryWrites=true&w=majority';
const client=new MongoClient(url,{ useUnifiedTopology: true });
const dbName='phoneShop';
const ObjectId = require('mongodb').ObjectId; 


client.connect(function(err){
    assert.equal(null,err);
    console.log("Connection successful");
    const db=client.db(dbName);

        //(C) Uncomment below to insert customer document (personal and address)
    
    insertCustomer(db,function(){
    client.close();
    });
    

        //(R) Uncomment below to Retrieve a Customer's Details 
   /* 
   findCustomer(db,function(){
    client.close
    });
    */

        //(U) Uncomment below to update a customers details
    /*
   updateCustomer(db,function(){
    client.close
    });
    */

    //(D) Uncomment below to delete a customers details
    /*
   deleteCustomer(db,function(){
    client.close
    });
    */




        //(C) Uncomment below to insert phone document into phoneDetails
    /*
    insertPhone(db,function(){
    client.close();
    });
    */

        //(R) Uncomment below to Retrieve a Phone's Details 
    /*
   findPhone(db,function(){
    client.close
    });
    */

        //(U) Uncomment below to update a phone's price
    /*
   updatePhone(db,function(){
    client.close
    });
   */ 

    //(D) Uncomment below to delete a phone document 
    /*
   deletePhone(db,function(){
    client.close
    });
    */





       //(C) Uncomment below to create an order document
    /*
    insertOrder(db,function(){
    client.close();
    });
    */

        //(R) Uncomment below to Retrieve an Order
    /*
   findOrder(db,function(){
    client.close
    });
    */

        //(U) Uncomment below to update an order's details
    /*
   updateOrder(db,function(){
    client.close
    });
    */

        //(D) Uncomment below to delete an order document (to be done last)
    /*
   deleteOrder(db,function(){
    client.close
    });
    */


});


//Functions on personalDetails Below:

//fuction for finding a customer's details
const findCustomer=function(db,callback){
    const collection=db.collection('personalDetails');

    collection.find({'FName':'Patrick'}).toArray(function(err,docs){
        assert.equal(err,null);
        console.log("Found the following documents:");
        console.log(docs)
        callback(docs);
    });
}
//function for inserting/creating a customer
    const insertCustomer=function(db,callback){
        const collection=db.collection('personalDetails');
        var obj={Title:"Mrs",FName:"Amanda",SName:"Reilly",Mobile:"0896312475",Email:"AmR@gmail.com",
        homeAddress:{AddLine1:"99 Colepark Road",AddLine2:"Ballyfermot",Town:"Ballyfermot",County:"Dublin",Eircode:"D10 FV27"},
        ShippingAdd:{AddLine1:"99 Colepark Road",Addline2:"Ballyfermot",Town:"Ballyfermot",County:"Dublin",Eircode:"D10 FV27"}};
        collection.insertOne(obj,function(err,result){
            if(err)throw err;
            console.log("Document inserted into personalDetails:");
            console.log(obj);
            callback(result);
        });
    }

    //function for updating a customer's details matching specific fields
    const updateCustomer=function(db,callback){
        const collection=db.collection('personalDetails');
        collection.updateOne({FName:"Patrick"},{$set:{Email:"PatrickB@gmail.com",Title:"Dr",Mobile:"0867842358",
    homeAddress:{AddLine1:"147 Thomond Road",Eircode:"D10 FV32"},ShippingAdd:{AddLine1:"147 Thomond Road",Eircode:"D10 FV32"}}},function(err,result){
            assert.equal(err,null);
            assert.equal(1,result.result.n);
            console.log("Document updated");
            callback(result);
        });
    }

    //function for deleteing a customer document matching specific fields
    const deleteCustomer=function(db,callback){
        const collection=db.collection('personalDetails');
        collection.deleteOne({FName:"Amanda",Email:"AmR@gmail.com",Mobile:"0896312475"},function(err,result){
            assert.equal(err,null);
            assert.equal(1,result.result.n);
            console.log("Document Deleted");
            callback(result);
        });
    }

    //functions on phoneDetails below:

    //function for finding a phones's details
const findPhone=function(db,callback){
    const collection=db.collection('phoneDetails');

    collection.find({'Model':'iPhone 11'}).toArray(function(err,docs){
        assert.equal(err,null);
        console.log("Found the following documents:");
        console.log(docs)
        callback(docs);
    });
}
//function for inserting/creating a phone doc
    const insertPhone=function(db,callback){
        const collection=db.collection('phoneDetails');
        var obj_P={Manufacturer:"Apple",Model:"iPhone SE (2020)",Price:"€499"};
        collection.insertOne(obj_P,function(err,result){
            if(err)throw err;
            console.log("Document inserted into phoneDetails:");
            console.log(obj_P);
            callback(result);
        });
    }

    //function updating a phone's price matching specific fields
    const updatePhone=function(db,callback){
        const collection=db.collection('phoneDetails');
        collection.updateOne({Manufacturer:"OnePlus",Model:"7t Pro"},{$set:{Price:"€699.99"}},function(err,result){
            assert.equal(err,null);
            assert.equal(1,result.result.n);
            console.log("Document updated");
            callback(result);
        });
    }

    //function for deleteing a phone document matching specific fields
    const deletePhone=function(db,callback){
        const collection=db.collection('phoneDetails');
        collection.deleteOne({Manufacturer:"Apple",Model:"iPhone SE (2020)",Price:"€499"},function(err,result){
            assert.equal(err,null);
            assert.equal(1,result.result.n);
            console.log("Document Deleted");
            callback(result);
        });
    }




        //Functions on orders below:

        //function for finding an orders details
const findOrder=function(db,callback){
    const collection=db.collection('orders');

    collection.find(ObjectId('5ea300a0d38b360d61ff7282')).toArray(function(err,docs){
        assert.equal(err,null);
        console.log("Found the following documents:");
        console.log(docs)
        callback(docs);
    });

}
//function for inserting/creating an order doc
    const insertOrder=function(db,callback){
        const collection=db.collection('orders');
        var obj_P={_id:ObjectId('5ea3036c30ec840a99fea87b'),customer_id:ObjectId('5ea2f224f0cde723f7e4803e'),phone_id:ObjectId('5ea2f526d38b360d61ff7281')};
        collection.insertOne(obj_P,function(err,result){
            if(err)throw err;
            console.log("Document inserted into orders:");
            console.log(obj_P);
            callback(result);
        });
    }

    //function updating order details
    const updateOrder=function(db,callback){
        const collection=db.collection('orders');
        collection.updateOne({_id:ObjectId('5ea3036c30ec840a99fea87b')},{$set:{customer_id:ObjectId('5ea2e644c61496d0dfab5338')}},function(err,result){
            assert.equal(err,null);
            assert.equal(1,result.result.n);
            console.log("Document updated");
            callback(result);
        });
    }

    //function for deleteing an order document matching specific fields
    const deleteOrder=function(db,callback){
        const collection=db.collection('orders');
        collection.deleteOne({_id:ObjectId('5ea3036c30ec840a99fea87b')},function(err,result){
            assert.equal(err,null);
            assert.equal(1,result.result.n);
            console.log("Document Deleted");
            callback(result);
        });
    }