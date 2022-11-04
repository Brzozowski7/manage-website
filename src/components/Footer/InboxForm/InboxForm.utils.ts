import { emailRegex } from "./InboxForm.const";
export const checkEmail = (email: string) => emailRegex.test(email);
