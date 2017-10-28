var mongoose = require('mongoose');
var models = require('./model.js');

var db = mongoose.connect('mongodb://localhost/blog');

mongoose.connection.on("open",function(){
    console.log('success connent');
});

mongoose.connection.on("error",function(){
    console.log('fail connent');
});

var Schema = mongoose.Schema;

for(var modelName in models){
    if(!db.modelName){
        console.log(modelName);
        mongoose.model(modelName,new Schema(models[modelName]));
    }
}

module.exports = {
    getModel: function(modelName){
        return _getModel(modelName);
    }
}

var _getModel = function(modelName){
    return mongoose.model(modelName)
}