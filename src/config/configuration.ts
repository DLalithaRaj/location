import { environmentObjType } from "./config.interface";

export default (): environmentObjType => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    mongodb: {
      host: process.env.MONGODB_HOST,
      port: parseInt(process.env.MONGODB_PORT, 10) || 27017,
      dbname : process.env.DB_NAME
    } 
  });