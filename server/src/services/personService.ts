import { DATABASE_NAME } from "../configs/generalConfig";
import databaseConnector from "../utils/databaseConnector";

const databaseClient = databaseConnector.getClient();

export async function createPerson(name: string): Promise<unknown> {
  const { summary } = await databaseClient.executeQuery(
    "CREATE (p:PERSON {name: $name})",
    { name },
    { database: DATABASE_NAME },
  );

  return summary;
}

export async function fetchPersons(): Promise<unknown> {
  const { records } = await databaseClient.executeQuery(
    "MATCH (p:PERSON) RETURN p.name AS name",
    {},
    { database: DATABASE_NAME },
  );

  return records;
}
