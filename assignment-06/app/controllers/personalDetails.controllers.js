
/*
const PersonalDetail=require('../models/personalDetails.model.js');


exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "User content cannot be empty!"
        });
    }
 
    
    const personaldetails = new PersonalDetail({
        //_id: new mongoose.Types.ObjectId(),
        Title: req.body.Title,
        Fname: req.body.FName,
        SName: req.body.SName,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
    
        homeAddress:{
            AddLine1: req.body.AddLine1,
            Eircode: req.body.Eircode
        },
        ShippingAdd:{
            AddLine1: req.body.AddLine1,
            Eircode: req.body.Eircode
        }
    });
 
   
    personaldetails.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the user."
        });
    });
};




exports.findAll = (req, res) => {
    PersonalDetail.find()
    .then(personaldetail => {
        res.send(personaldetail);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all users."
        });
    });
};



exports.findOne = (req, res) => {
    PersonalDetail.findById(req.params.userId)
    .then(personaldetail => {
        if(!personaldetail) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(personaldetails);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};



exports.update = (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "User content cannot be empty"
        });
    }
 
    
    PersonalDetail.findByIdAndUpdate(req.params.userId, {
        quotation: req.body.quotation,
        author: req.body.author
    }, { $set: req.body },   
       { new: true })        
    .then(quotation => {
        if(!quotation) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(quotation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.userId
        });
    });
};

exports.delete = (req, res) => {
    console.log("Delete a user identified by userId")
    return res.status(200).send({
        message: "Delete a user identified by userId"
    });
};

exports.root= (req, res) => {
    console.log("My Phone Shop App. Use the app to manage your orders")
    return res.status(200).send({
        message: "My Phone Shop App. Use the app to manage your orders"
    });
};
*/