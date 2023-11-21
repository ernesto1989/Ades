class Escenario{

    constructor(nombre, descripcion, f_ini, f_fin,esc_base){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.f_ini = f_ini;
        this.f_fin = f_fin;
        this.esc_base = esc_base;
    }

    clonaDeBase() {
        console.log("Clonando desde escenario base: " + this.esc_base);
        //Leer Lista de tablas de AdEs
        //Insertar con escenario destino información base.
    }

    generaDatosResumen(){
        
    }
}