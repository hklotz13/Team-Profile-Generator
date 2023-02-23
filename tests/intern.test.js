const Intern = require('../Lib/intern');

test("Can set school via constructor", () => {
    const testValue = "UMich";
    const e = new Intern("Foo", 1, "test@umich.edu", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@umich.edu", "UMich");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "UMich";
    const e = new Intern("Foo", 1, "test@umich.edu", testValue);
    expect(e.getSchool()).toBe(testValue);
  });