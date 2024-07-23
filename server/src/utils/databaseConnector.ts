import neo4j, { Driver } from "neo4j-driver";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const NEO4J_URI = process.env.DATABASE_URI || "neo4j://localhost:7687";
const NEO4J_USERNAME = process.env.DATABASE_USERNAME || "";
const NEO4J_PASSWORD = process.env.DATABASE_PASSWORD || "";

class DatabaseConnector {
  #databaseDriver: Driver | null = null;

  constructor() {
    const driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));
    this.#databaseDriver = driver;
  }

  async isConnected(): Promise<boolean> {
    if (this.#databaseDriver == null) {
      return false;
    }

    const serverInfo = await this.#databaseDriver.getServerInfo();

    return !!serverInfo;
  }

  getClient(): Driver {
    return this.#databaseDriver!;
  }
}

const databaseConnector = new DatabaseConnector();

export default databaseConnector;
