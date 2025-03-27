import { serve } from "inngest/next";
import { Inngest } from "inngest";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
    client : Inngest,
    functions : [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ],
});