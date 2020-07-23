/*
const Order=require('../models/orders.model.js');


exports.create = (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "Order content cannot be empty!"
        });
    }
 
   
    const phonedetail = new Order({
        customer_id: req.body.customer_id,
        phone_id:req.body.phoneId
      });
 
    
    Order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Order."
        });
    });
};



exports.findAll = (req, res) => {
    Order.find()
    .then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Order."
        });
    });
};


exports.findOne = (req, res) => {
    Order.findById(req.params.orderId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Order with id " + req.params.orderId
        });
    });
};

exports.update = (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "Order content cannot be empty"
        });
    }
 
   
    Order.findByIdAndUpdate(req.params.orderId, {
        customer_id: req.body.customer_id,
        phone_id:req.body.phoneId
      }, { $set: req.body },   
       { new: true })        
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error updating Order with id " + req.params.orderId
        });
    });
};

exports.delete = (req, res) => {
    Order.findByIdAndRemove(req.params.orderId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        res.send({message: "Order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Order with id " + req.params.orderId
        });
    });
};


exports.root= (req, res) => {
    console.log("My Phone shop App. Use the app to manage your orders")
    return res.status(200).send({
        message: "My Phone shop App. Use the app to manage your orders"
    });
};
*/