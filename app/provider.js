"use client";
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import axios from 'axios';

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      CheckIsNewUser();
    }
  }, [user]);

  const CheckIsNewUser = async () => {
    // try {
    //   // Ελέγχουμε αν υπάρχει το email του χρήστη
    //   if (!user?.primaryEmailAddress?.emailAddress) {
    //     return;
    //   }

    //   // Επιλέγουμε τον χρήστη από την βάση δεδομένων με το email του
    //   const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user.primaryEmailAddress.emailAddress));

    //   console.log(result);
      
    //   // Αν ο χρήστης δεν υπάρχει ήδη στη βάση, τον προσθέτουμε
    //   if (result?.length === 0) {
    //     const userResp = await db.insert(USER_TABLE).values({
    //       name: user.fullName,
    //       email: user.primaryEmailAddress.emailAddress,
    //     }).returning({ id: USER_TABLE.id });

    //     console.log(userResp);
    //   }
    // } catch (error) {
    //   // Αν υπάρξει λάθος κατά την επικοινωνία με την βάση
    //   console.error('Error while checking or inserting user:', error);
    // }
    const resp = await axios.post('/api/create-user',{user:user});
    console.log(resp.data);
  };

  return (
    <div>
      {children}
    </div>
  );
}

export default Provider;
