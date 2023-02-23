const Engineer = require("../lib/engineer");

test("Can set Github account via constructor", () => {
    const testValue = "ghub13";
    const e = new Engineer("Foo", 1, "test@gmail.com", testValue);
    expect(e.github).toBe(testValue);
  });

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@gmail.com", "ghub13");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get GitHub username via getGithub()", () => {
    const testValue = "ghub13";
    const e = new Engineer("Foo", 1, "test@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  