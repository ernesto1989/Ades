/**
 * Versión 0.1 del AdEs Administrador genérico de escenarios
 * 
 * Objetivos:
 * 
 * 1. Probar Scrum para definir un proyecto exitoso
 * 2. Crear un manejador de escenarios genérico
 * 
 * Fecha de inicio 12 Noviembre 2023
 * 
 * 
 * Notas adicionales:
 * 
 * Javascript trabaja con asincronía. La verdad es que me da hueva ese pedo
 * así que decidí convertirlo en sincrono. La intención es plantear un diseño
 * estructural de cómo operar el manejador escenarios y no de como se implementa
 * en un lenguaje particular.
 * 
 * Ernesto Cantú, 20 Noviembre 2023
 */
const prompt = require('prompt-sync')();
const escService = require('./Services/escenarioService');

/**
 * Función que imprime el menú principal de la aplicación.
 * Valida que se seleccione en consola solo una opción válida.
 * 
 * @returns la opción seleccionada
 */
function menuPrincipal(){
    const prompt = require('prompt-sync')();
    var opt = 0;
    do{
        console.clear();
        console.log("Welcome to AdEs");
        console.log("Las opciones disponibles son: ");
        console.log("1. Consultar un escenario");
        console.log("2. Crear un nuevo escenario ");
        console.log("3. Clonar un escenario creado");
        console.log("4. Salir");
        
        opt = parseInt(prompt('opcion> '));
        if(isNaN(opt)){
            console.log('NAN')
            opt = 0;
        }
    }while(opt < 1 || opt > 4);
    return opt;
}

/**
 * Función que valida la opción seleccionada por el usuario.
 * Redirecciona a la función que realiza la operación correspondiente.
 * 
 * @param {} option  Opción del menu seleccionada
 * @returns regresa la condición de terminar la aplicación
 */
function validateOption(option){
    var exit = 0;
    switch(option){
        case 1:
            console.log("Consultar escenario");
            escService.listaEscenariosDisponibles();
            break;
        case 2:
            console.log("Crear escenario");
            break;
        case 3:
            console.log("Clonar escenario");
            break;
        default:
            console.clear();
            console.log("Gracias! Vuelve pronto");
            exit = 1;
            break;
    }
    return exit;
}


/**
 * Proceso main del sistema.
 * 
 * 1. Se imprime el menú y se espera a ver la opción seleccionada
 * 2. Se valida si el usuario desea salir del escenario
 * 
 */
function mainProcess(){
    var exitCondition = 0;
    escService.validaTablasAdes();
    do{
        var opt = menuPrincipal();
        exitCondition = validateOption(opt);
    }while(exitCondition != 1);
}

mainProcess();