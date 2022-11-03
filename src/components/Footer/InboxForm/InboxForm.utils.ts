import { emailRegex } from "./InboxForm.const";
export const checkEmail = (email: string) => email.match(emailRegex);
