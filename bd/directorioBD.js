var conexion=require("./conexion").conexionDirectorio;
var Directorio=require("../modelos/Directorio");

async function mostrarDirecciones(){
    var dir=[];
    try{
        var direcciones= await conexion.get();
        direcciones.forEach(direccion =>{
         var direccion1=new Directorio(direccion.id,direccion.data())
     if (direccion1.bandera==0){
        dir.push(direccion1.obtenerDireccion);
     }
    })
    }catch(err){
        console.log("Error al recuperar direcciones guardadas mostrar usuarios"+err); 
     }
    
     return dir;
    
}
async function nuevaDireccion(newdir){
    var error=0
    try{
        var direccion1=new Directorio(null,newdir);
        console.log("Datos recibidos:", direccion1); 
        if(direccion1.bandera==0){
            conexion.doc().set(direccion1.obtenerDireccion);
            error=0;
        }
        else{
            console.log("datos incorrectos");
        }
       
    }
    catch(err){
        console.log("error al guardar direccion"+err);
    }
    return error;
 }
 async function modificarDireccion(datos){
    var error=1;
    var direc= await buscarPorId(datos.id);
    if(direc!=undefined){
        var direc=new Directorio(datos.id, datos);


        if(direc.bandera==0){
            try{
                await conexion.doc(direc.id).set(direc.obtenerDireccion);
                console.log("se modifico correctamente");
                error=0;
            }
            catch(error){
                cosole.log("Error al modificar"+err);
                    
            }
        }else{
            console.log("Error los datos no son vlaidos");
        }
    }
    return error;
      
}

async function buscarPorId(id){
    var direc;
    try{
        var directorioBD=await conexion.doc(id).get();
        var directorioObjeto=new Directorio(directorioBD.id, directorioBD.data());
        if(directorioObjeto.bandera==0){
            direc=directorioObjeto.obtenerDireccion;
        }
    }
    catch(err){
        console.log("Error al recuperar el usuario "+err);
    }
    return  direc;
 } 

 async function borrarDireccion(id){
    var error=1;
    var direc= await buscarPorId(id);
    if(direc != undefined){
        try{
            await conexion.doc(id).delete();
            console.log("Direccion eliminada ");
            error=0;
    
        }
        catch(err){
            console.log("Error al eliminar direccion");
        }
    }return error;

 }

 module.exports={
    mostrarDirecciones,
    nuevaDireccion,
    modificarDireccion,
    buscarPorId,
    borrarDireccion
 };