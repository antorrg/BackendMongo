import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Corregido: Agrega comillas al importar dotenv
dotenv.config();
const { DB_HOST, DB_PORT, DB_NAME } = process.env;

// URL de conexión a la base de datos
const dbURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Configuración de la conexión a la base de datos
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verificar si la conexión se ha establecido con éxito
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos MongoDB');
});

export default db;
