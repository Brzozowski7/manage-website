import { emailRegex } from "./InboxForm.const";
export const checkEmail = (email: string) => {
  if (email.match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};
