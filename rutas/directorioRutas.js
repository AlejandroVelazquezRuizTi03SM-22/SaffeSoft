const { mostrarDirecciones, nuevaDireccion, buscarPorIdd, borrarDireccion } = require("../bd/directorioBD");

var ruta1=require("express").Router();


ruta1.get("/mostrarDirecciones", async (req, res) => {
     var dir = await mostrarDirecciones();
     res.render("directorio/mostrar", { dir });
 });

 ruta1.get("/nuevaDireccion",(req,res)=>{
     res.render("directorio/nuevo");
});
ruta1.post("/nuevaDireccion",async(req,res)=>{
     // req.body.foto= req.file.originalname;
     var error= await nuevaDireccion(req.body);
    res.redirect("mostrarDirecciones");
});
ruta1.get("/borrarDireccion/:id",async(req,res)=>{
     await borrarDireccion(req.params.id);
     res.redirect("/mostrarDirecciones");
})

module.exports=ruta1;