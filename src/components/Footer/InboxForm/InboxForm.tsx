import { useState } from "react";
import {
  Wrapper,
  Form,
  StyledInput,
  GoButton,
  ErrorMessage,
} from "./InboxForm.styles";
import { checkEmail } from "./InboxForm.utils";

export default function InboxForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkEmail(email)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Updates in your inbox..."
        />
        <GoButton>Go</GoButton>
      </Form>
      {error && <ErrorMessage>Please insert a valid email</ErrorMessage>}
    </Wrapper>
  );
}
