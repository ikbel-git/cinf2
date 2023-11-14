var mongo = require("mongoose");
//chemin 
const Schema = mongo.Schema;
//crééer l'entité 
const Voiture = new Schema(
    {
        matricule:String,
        couleur:String,
    }
);
//export : convert cette écriture dans la base de données caractérisé par User
module.exports=mongo.model("voiture",Voiture);
