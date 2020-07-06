const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.oiwbn.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true});



module.exports = mongoose