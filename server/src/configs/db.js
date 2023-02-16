const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect( "mongodb+srv://prakash14:prakash14@cluster0.7f6ne3x.mongodb.net/Becho-server", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connect;

               
