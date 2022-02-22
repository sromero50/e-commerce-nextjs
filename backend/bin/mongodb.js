var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/UTN', {useNewUrlParser:true}, function(error){
    if(error){
        throw error;
    }else {
        console.log('Connected to MongoDB');
    }
});

module.exports = mongoose;