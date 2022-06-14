import Database from "../database.js";
import { hashOf, uid } from "../hash.js";

export const handler = async (event, _context) => {
  const db = Database();

  const { email, password, shouldRemember } = JSON.parse(event.body);

  await db.read();

  const hashedPassword = hashOf(password);

  const doesUserExist = db.data.users.some(
    (user) => user.email === email && user.password === hashedPassword
  );

  if (doesUserExist) {
    return {
      statusCode: 406,
      body: JSON.stringify({ reason: "A user is already registered." }),
    };
  }

  const userData = {
    id: uid(),
    email,
  };

  db.data.users.push({
    ...userData,
    password: hashedPassword,
  });

  await db.write();

  return {
    statusCode: 200,
    body: JSON.stringify(shouldRemember ? userData : null),
  };
};
