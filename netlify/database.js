import { resolve } from "path";

import { JSONFile, Low } from "lowdb";

export default () => {
  const filePath = resolve("netlify", "data", "db.json");
  const adapter = new JSONFile(filePath);
  return new Low(adapter);
};
