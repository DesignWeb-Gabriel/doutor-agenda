import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import * as schema from "@/db/schema";

import { db } from "./database";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or ysql"
    usePlural: true,
    schema: {
      users: schema.usersTable,
      sessions: schema.sessionsTable,
      accounts: schema.accountsTable,
      verificationTokens: schema.verificationsTokensTable,
    },
  }),
  user: {
    modelName: "users",
  },
  session: {
    modelName: "sessions",
  },
  account: {
    modelName: "accounts",
  },
  verificationToken: {
    modelName: "verifications_tokens",
  },
  emailAndPassword: {
    enabled: true,
  },
});
