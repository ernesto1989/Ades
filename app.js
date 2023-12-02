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
 * Ernesto Cantú, 20 Noviembre 2023:
 * Javascript trabaja con asincronía. La verdad es que me da hueva ese pedo
 * así que decidí convertirlo en sincrono. La intención es plantear un diseño
 * estructural de cómo operar el manejador escenarios y no de como se implementa
 * en un lenguaje particular.
 * 
 * 
 * Ernesto Cantú, 27 Noviembre 2023:
 * Intento fallido de hacerlo tipo CLI, procedemos a migrarlo a un esquema web.
 * Lo crearemos sobre la chingada...
 */



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require("./Controller/router");

console.log("Welcome to AdEs: Data Administrator");

/**
 * Paso 1: Crear el servidor con Express.
 */
const app = express();
const port = 3000;


/** 
 * Configuración del servidor web.
 * 1. Cors es una configuración requerida. 
 *     https://es.wikipedia.org/wiki/Intercambio_de_recursos_de_origen_cruzado#:~:text=El%20intercambio%20de%20recursos%20de,que%20sirvi%C3%B3%20el%20primer%20recurso. 
 * 2. BodyParser nos permitirá recibir información en un formato llamado JSON
 *    JavaScript Object Notation.
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * Paso 2: Crear algunos endpoints básicos para el crud.
 * Para ver todos los endpoints agregados al momento, consulta el archivo /routes/route.js
 */
app.use(router);

// Primer endpoint que se crea en el app web. Simplemente respode un mensaje cuando haces una petición a la url: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Welcome to AdEs!')
});

//arranque del server 
app.listen(port, () => {
    console.log('AdEs Service started running on : ' + port)
})