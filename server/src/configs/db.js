const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb://ramkrishna:ram1234@ecommerce-shard-00-00.ybzfv.mongodb.net:27017,ecommerce-shard-00-01.ybzfv.mongodb.net:27017,ecommerce-shard-00-02.ybzfv.mongodb.net:27017/?ssl=true&replicaSet=atlas-s2d4cr-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
};

module.exports = connect;


// "mongodb+srv://zeeshannasir:zeeshan@cluster0.iltt7.mongodb.net/ecommerce"
//mongo connect url => mongodb://ramkrishna:ram1234@ecommerce-shard-00-00.ybzfv.mongodb.net:27017,ecommerce-shard-00-01.ybzfv.mongodb.net:27017,ecommerce-shard-00-02.ybzfv.mongodb.net:27017/?ssl=true&replicaSet=atlas-s2d4cr-shard-0&authSource=admin&retryWrites=true&w=majority