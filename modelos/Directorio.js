class Direccion{
    constructor (id, data){
        this.bandera=0;
        this.id=id;
        this.nombre=data.nombre;
        this.descripcion=data.descripcion;
        this.altitud=data.altitud;
        this.latitud=data.latitud;
    }

    set id(id){
        //if(id != null)
        //this._id=id
        //console.log(id.length);
        //id.length>0?this._id=id:this.bandera=1;
        if (id !== null && id.length > 0) {
            this._id = id;
          } 
    
    }
    set nombre(nombre){
        //console.log(nombre);
        this._nombre=nombre;
        //console.log(this._nombre);
        nombre.length>0?this._nombre=nombre:this.bandera=1;
    }
    set descripcion(descripcion){
        //console.log(usuario);
        this._descripcion=descripcion;
        //console.log(this._usuario);
        descripcion.length>0?this._descripcion=descripcion:this.bandera=1;
       
    }
    set altitud(altitud){
        //console.log(password);
        this._altitud=altitud
        //console.log(this._password);
        altitud.length>0?this._altitud=altitud:this.bandera=1;
    }
    set latitud(latitud){
        this._latitud=latitud
        latitud.length>0?this._latitud=latitud:this.bandera=1;
    }
    
    get id(){
    return this._id;
}
get nombre(){
    return this._nombre;
}
get descripcion(){
    return this._descripcion;
}
get altitud(){
    return this._altitud;
}
get latitud(){
    return this._latitud;
}

get obtenerDireccion(){
    if(this._id != null)

    return {
        id:this.id,
        nombre:this.nombre,
        descripcion:this.descripcion,
        altitud:this.altitud,
        latitud:this.latitud,

    }
    else
    return{
        nombre:this.nombre,
        descripcion:this.descripcion,
        altitud:this.altitud,
        latitud:this.latitud,

    }
    }
           
}

module.exports=Direccion;
