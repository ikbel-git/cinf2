var mongo = require("mongoose");
//chemin 
const Schema = mongo.Schema;
//crééer l'entité 
const Client = new Schema(
    {
        name: String,
        description: String,
        age: Number,
    }
);
//export : convert cette écriture dans la base de données caractérisé par User
module.exports=mongo.model("client",Client);
