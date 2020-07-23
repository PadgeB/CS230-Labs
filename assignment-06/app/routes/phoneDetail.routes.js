
module.exports = (app) =>{
    const phoneDetails = require('../controllers/phoneDetail.controllers.js');

    //app.get('/', phoneDetails.root);
    
    app.post('/phoneDetails',phoneDetails.create);

    app.get('/phoneDetails',phoneDetails.findAll);
    
    app.get('/phoneDetails/:phoneId',phoneDetails.findOne);

    app.put('/phoneDetails/:phoneId',phoneDetails.update);

    app.delete('/phoneDetails/:phoneId',phoneDetails.delete);
}
