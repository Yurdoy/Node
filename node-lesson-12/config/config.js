import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);
let dbConnection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    dbConnection = client.db();
  } catch (err) {
    console.error("Failed to connect to DB Server", err);
    throw err;
  }
}

function getDb(params) {
  if (!dbConnection) {
    throw new Error("Database not connected");
  }
  return dbConnection;
}

export { connectToDatabase, getDb };
