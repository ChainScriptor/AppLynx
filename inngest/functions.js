import { inngest } from "./client";
import { USER_TABLE } from '@/configs/schema';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  },
);
export const CreateNewUser = inngest.createFunction(
  { id: 'create-user' },
  { event: 'user.create' },
  async ({ event, step }) => {
    const {user} = event.data;
    //get event data
    const result = await step.run('check user and create new if not in DB', async () => {
      //check is user already exists
      const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

      if (result?.length == 0) {
        //if not , then add to db
        const userResp = await db.insert(USER_TABLE).values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress
        }).returning({ id: USER_TABLE.id })
        return userResp;
      }
      return result;
    })
    return 'success';
  }
)