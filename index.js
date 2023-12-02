var express=require("express");
var path= require("path");
var cors=require("cors");
var rutasUsuarios=require("./rutas/usuariosRutas");
var rutasDirectorio=require("./rutas/directorioRutas");
var rutasUsuariosApis = require("./rutas/usuariosRutasApis");
var rutasDirectorioApis = require("./rutas/directorioRutasApi");

var app=express();
app.set("view engine","ejs");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use("/",express.static(path.join(__dirname,"/web")));
app.use("/",rutasUsuarios);
app.use("/",rutasDirectorio);
app.use("/",rutasUsuariosApis);
app.use("/",rutasDirectorioApis);

var port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
})