# BackendMongo
Api de ensayo con integracion de Base de datos mongoDB
## Acerca de Babel
Una particularidad que vamos a encontrar en esta api es que las importaciones tanto como las exportaciones no estarán en "commonjs" sino en Ecmascript6. Para lograr esto instalamos y configuramos "babel".

[Instalación, configuración e implementación de Babel](./data/Babel.md)

Luego de probar "babel" y hacer las primeras peticiones get a "jsonplaceholder" me di cuenta cuanto tardaba nodemon en reiniciarse después de un cambio, siendo que solo tenia configurada la ruta get con dos handler y dos controllers (get general y por id), casi 8 segundos en mi computadora, por lo que decidí desinstalar "babel" y continuar con "common.js", ahora el mismo server se reinicia en aproximadamente 2 segundos. Evidentemente "babel" le estaba sumando una complejidad importante a la app.
