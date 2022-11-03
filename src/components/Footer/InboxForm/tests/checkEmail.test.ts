import { checkEmail } from "../InboxForm.utils";

describe("email format checking function", () => {
  test.each([
    // no @
    {
      email: "krzysztofbrzozowski7121gmail.com",
      expected: false,
    },
    //special characters
    {
      email: "@q!@!@QWEASEA()yewi7@gmail.com",
      expected: false,
    },
    // not valid top level domain
    {
      email: "john@doe.com77",
      expected: false,
    },
    // mysql injection
    {
      email: "drop database; -- joe@server.com",
      expected: false,
    },
    // dot after @
    {
      email: "mysite@.com.my ",
      expected: false,
    },
    // @ at the beggining
    {
      email: "@you.me.net",
      expected: false,
    },
    //not valid tld
    {
      email: "mysite123@gmail.b",
      expected: false,
    },
    // two dots before tld
    {
      email: "mysite@yahoo..com",
      expected: false,
    },
    //good format
    {
      email: "krzysztofbrzozowski7121@gmail.com",
      expected: true,
    },
    //good format
    {
      email: "JanKowalski123@wp.pl",
      expected: true,
    },
    //good format
    {
      email: "1231231123@interia.pl",
      expected: true,
    },
    //good format
    {
      email: "mysite@you.me.net",
      expected: true,
    },
  ])(
    "checking if correct correct boolean value is returned",
    ({ email, expected }) => {
      expect(checkEmail(email)).toBe(expected);
    }
  );
});
