import app from './app.mjs';
import { connectDB } from './config/db.mjs';

const startServer = async () => {
  try {
    await connectDB(); // Conecta a la base de datos antes de iniciar el servidor
    app.listen(3000, () => {
      console.log("Servidor arriba en el puerto 3000");
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};

startServer();
