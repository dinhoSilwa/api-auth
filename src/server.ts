import { app } from "./app";
import { MongoDbConnection } from "./database/mongoDBconnection";
import { configDotenv } from "dotenv";
configDotenv();
const { MONGODB_URL, PORT } = process.env;

const startServer = async () => {
  try {
    if (!MONGODB_URL)
      throw new Error("Falha ao obter chave de acesso ao Mongo db");
    const db = MongoDbConnection.getInstance();
    await db.connect(MONGODB_URL as string);
    app.listen(PORT, () => {
      console.log(`Servidor rodando na Porta:${PORT}`);
    });
  } catch (error) {
    console.log("Falha ao conectar ao MongoDb Atlas");
  }
};

startServer();
