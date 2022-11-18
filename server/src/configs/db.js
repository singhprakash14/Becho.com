const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://zuhed95:zuhed786@cluster0.izywggv.mongodb.net/olx-server", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connect;

               