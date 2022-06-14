import Database from "../database.js";
import { hashOf } from "../hash.js";

export const handler = async (event, _context) => {
  const db = Database();

  const { email, password } = JSON.parse(event.body);

  await db.read();

  const hashedPassword = hashOf(password);

  const user = db.data.users.find(
    (user) => user.email === email && user.password === hashedPassword
  );

  return user
    ? {
        statusCode: 200,
        body: JSON.stringify({ ...user, password: undefined }),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ reason: "A user is not found." }),
      };
};
