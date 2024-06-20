//test/sample.test.ts
import { expect, test } from "vitest";
import { createUser } from "../script";

test("createUser should return the generated user", async () => {
  const newUser = { email: "user@prisma.io", name: "Prisma Fan" };
  const user = await createUser(newUser);
  expect(user).toStrictEqual({ ...newUser, id: 1 });
});
