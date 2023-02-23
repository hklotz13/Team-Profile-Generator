const Employee = require('../Lib/employee')

describe('EmployeeTest', () => {
    test('Can instantiate Employee instance', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    })
});

test('Can set name via constructor arguments', () => {
    const testName = 'Harper';
    const e = new Employee(testName);
    expect(e.name).toBe(testName);
});

test('Can set id via constructor arguments', () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@gmail.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  test("Can get name via getName()", () => {
    const testName = "Harper";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@gmail.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Harper", 1, "test@gmail.com");
    expect(e.getRole()).toBe(testValue);
  });