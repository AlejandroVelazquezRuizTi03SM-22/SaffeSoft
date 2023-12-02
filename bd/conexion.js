var admin=require("firebase-admin");
var keys=require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});
var cuenta=admin.firestore();

var conexionUsuarios=cuenta.collection("SaffeSoft");
var conexionDirectorio=cuenta.collection("Directorio");
var conexionUsuarios=cuenta.collection("Usuarios");
module.exports={
conexionDirectorio,
conexionUsuarios
};