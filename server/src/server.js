// mongo url = "mongodb+srv://ramkrishna:<password>@ecommerce.ybzfv.mongodb.net/?retryWrites=true&w=majority"
// version 2.201 = "mongodb://ramkrishna:ram1234@ecommerce-shard-00-00.ybzfv.mongodb.net:27017,ecommerce-shard-00-01.ybzfv.mongodb.net:27017,ecommerce-shard-00-02.ybzfv.mongodb.net:27017/?ssl=true&replicaSet=atlas-s2d4cr-shard-0&authSource=admin&retryWrites=true&w=majority"

const app = require("./index");
const connect = require("./configs/db");

app.listen(4000, async () => {
    try {
        await connect();
        console.log("Listening on port 4000");
    } catch (err) {
        console.log(err);
    }
});