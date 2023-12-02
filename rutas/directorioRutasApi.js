var ruta1=require("express").Router();
var { mostrarDirecciones, nuevaDireccion, buscarPorIdd, modificarDireccion, borrarDireccion } = require("../bd/directorioBD");

ruta1.get("/api/Directorio", async (req, res) => {
    var dir = await mostrarDirecciones(); //product
    if(dir.length>0){
        res.status(200).json(dir);
    }
    else{
        res.status(400).json("Direcciones no encontrados");
    }
});

ruta1.post("/api/nuevaDireccion",async(req,res)=>{
   var error= await nuevaDireccion(req.body);
   if(error==0){
    res.status(200).json("Direccion registrado correctamente");
   }
   else{
    res.status(400).json("Error al registrar la direccion")
   }
});
ruta1.get("/api/buscarDireccionPorId/:id", async(req,res)=>{
    var direc=await buscarPorIdd(req.params.id);
    if(direc!=undefined){
        res.status(200).json(direc);
       }
       else{
        res.status(400).json("Direccion no encontrada");
       }
});
ruta1.get("/api/borrarDireccion/:id",async(req,res)=>{
    await borrarDireccion(req.params.id);
    if(error==0){
        res.status(200).json("Direccion eliminada");
    }
    else{
        res.status(400).json("error al borrar direccion");
    }
})

module.exports=ruta1;