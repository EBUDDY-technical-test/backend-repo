import {onCall} from "firebase-functions/v2/https";
import {db} from "./config";

export const fetchUserData = onCall(async () => {
  const data = await db.collection("USERS").get();

  return data.docs.map((i) => i.data());
});

export const updateUserData = onCall(async (req) => {
  const result = await db
    .collection("USERS")
    .doc(req.data.id)
    .update(req.data);

  return result;
});
