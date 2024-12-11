import mongoose from "mongoose";

export class MongoDbConnection {
  private static instance: MongoDbConnection;

  constructor() {}
  public static getInstance(): MongoDbConnection {
    if (!MongoDbConnection.instance) {
      MongoDbConnection.instance = new MongoDbConnection();
    }
    return MongoDbConnection.instance;
  }

  public async connect(url: string): Promise<void> {
    try {
      await mongoose.connect(url);
      console.log("Conectado ao MongoDb");
    } catch (error) {
      console.log(`Falha ao conectar com o Mongodb Atlas`);
      process.exit(1);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
    } catch (error) {
      console.log("Falha ao Desconectar o Mongoose");
      process.exit(1);
    }
  }
  public getConnection(): typeof mongoose {
    return mongoose;
  }
}
