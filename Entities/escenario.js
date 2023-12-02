const moment = require("moment"); 


module.exports = class Escenario{

    constructor(nombre, descripcion, f_ini, f_fin,esc_base){
        this.id_escenario = 'E' + moment().format("DDMMYY");
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.f_ini = f_ini;
        this.f_fin = f_fin;
        this.esc_base = esc_base;
    }
    
    generaListaProps(){
        if(this.esc_base == null)
            this.esc_base = 'ESC-BASE';
        return [this.id_escenario, this.nombre,this.descripcion,this.f_ini,this.f_fin,this.esc_base];
    }
}