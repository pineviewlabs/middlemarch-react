import Database from "../database.js";

export const handler = async (event, _context) => {
  const db = Database();

  const { userId } = JSON.parse(event.body);

  if (!userId) {
    return {
      statusCode: 200,
      body: JSON.stringify(null),
    };
  }

  await db.read();

  const user = db.data.users.find((user) => userId === user.id);

  return {
    statusCode: 200,
    body: JSON.stringify(user ? { ...user, password: undefined } : null),
  };
};
