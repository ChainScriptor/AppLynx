import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://applynx_owner:Mhd18eciaNIU@ep-curly-bush-a2ty5lmy.eu-central-1.aws.neon.tech/applynx?sslmode=require'
  }
});
