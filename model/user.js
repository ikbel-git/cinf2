var mongo = require("mongoose");
//chemin 
const Schema = mongo.Schema;
//crééer l'entité 
const User = new Schema(
    {
        name: String,
        email: String,
        cin: Number,
    }
);
//export : convert cette écriture dans la base de données caractérisé par User
module.exports=mongo.model("user",User);
