import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "./database.js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or ysql"
    usePlural: true,
  }),
  user: {
    modelName: "UsersTable",
  },
  session: {
    modelName: "SessionsTable",
  },
  account: {
    modelName: "AccountsTable",
  },
  verificationToken: {
    modelName: "VerificationsTokensTable",
  },
});
