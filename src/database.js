import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const {DB_NAME, DB_HOST, DB_PORT}=process.env;

const DB_URI= `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

// const DB_URI= `mongodb://127.0.0.1:27017/LearnMongodb`; Este es un ejemplo de la declaracion de la URI de la Db mongo




 const connectDB =  async ()=>{
  try {
   await mongoose.connect(DB_URI)
   console.log('DB conectada exitosamente ✅')
    
  } catch (error) {
    console.error(error +' algo malo pasó 🔴')
    
  }

}

export default connectDB













// import dotenv from 'dotenv';

// dotenv.config();

// const { DB_HOST, DB_PORT, DB_NAME } = process.env;

// // URL de conexión a la base de datos
// const dbURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// // Función para conectar a la base de datos con async/await
// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(dbURL, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     console.log('Conexión exitosa a la base de datos MongoDB');
//   } catch (error) {
//     console.error('Error de conexión a la base de datos:', error);
//   }
// };

// // Llamamos a la función para conectar a la base de datos
// connectToDatabase();

// // Exportamos la conexión (opcional, dependiendo de cómo quieras organizar tu código)
// const db = mongoose.connection;
// export default db;
