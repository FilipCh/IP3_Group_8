/*we have to initiate mongoose as we are going to use
its method 'model'*/
const mongoose = require('mongoose');
//model
const Auto = mongoose.model('Auto', {
    marka:{
        type: String
    },
    model:{
        type: String
    }
});
/*we have to export our function as 
we want to use it*/
module.exports = Auto;
