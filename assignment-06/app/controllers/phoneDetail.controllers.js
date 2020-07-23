const PhoneDetail=require('../models/phoneDetail.model.js');

// Create and Save a new Quotation
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.content) {
        return res.status(400).send({
            message: "***************************************Create cannot be empty"
        });
    }
 
    // Create a new Quotation (using schema)
    const phoneDetail = new PhoneDetail({
        Manufacturer: req.body.Manufacturer,
        Model: req.body.Model,
        Price: req.body.Price
    });
 
    // Save Quotation in the database
    phoneDetail.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred "
        });
    });
};


// Return all Quotations in the database
exports.findAll = (req, res) => {
    PhoneDetail.find()
    .then(phoneDetails=>{
        res.send(phoneDetails);
    }).catch(err =>{
        res.status(500).send({
            message: err.message||"An error occured"
        });
    });
};





exports.findOne = (req, res) => {
    PhoneDetail.findById(req.params.phoneDetailId)
    .then(phoneDetail => {
        if(!phoneDetail) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.phoneDetailId
            });            
        }
        res.send(phoneDetail);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Quotation with id " + req.params.quotationId
        });
    });
};





// Update a Quotation identified by quotationId
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Update content cannot be empty"
        });
    }
 
    // Find the Quotation and update it with the request body
    PhoneDetail.findByIdAndUpdate(req.params.phoneDetailId, {
        Manufacturer: req.body.Manufacturer,
        Model: req.body.Model,
        Price: req.body.Price
    }, { $set: req.body },   // $set - modify only the supplied fields
       { new: true })        // "new: true" return updated object
    .then(phoneDetail => {
        if(!phoneDetail) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.phoneDetailId
            });
        }
        res.send(phoneDetail);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.phoneDetailId
            });                
        }
        return res.status(500).send({
            message: "Error updating Quotation with id " + req.params.phoneDetailId
        });
    });
};





// Delete a Quotation identified by quotationId
exports.delete = (req, res) => {
    PhoneDetail.findByIdAndRemove(req.params.phoneDetailId)
    .then(phoneDetail => {
        if(!phoneDetail) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.phoneDetailId
            });
        }
        res.send({message: "Quotation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.phoneDetailId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Quotation with id " + req.params.phoneDetailId
        });
    });
};

