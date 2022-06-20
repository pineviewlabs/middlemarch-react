import Database from "../database.js";

export const handler = async (_event, _context) => {
  const db = Database();

  await db.read();

  return {
    statusCode: 200,
    body: JSON.stringify(db.data.books),
  };
};
