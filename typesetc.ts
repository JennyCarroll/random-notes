// ENUMS define a set of named constants.
// Use PascalCase for enum names and enum members.
enum Car {
  RedCar = "red",
}
// enums can be used as types, TypeScript automatically creates a corresponding type

// ALIASES allow you to create a new name for a type. They can be used for primitives, unions, intersections, and more
// Use PascalCase for complex types; camelCase is acceptable for simple unions.
type ThisIsAString = string;

type Point = {
  x: number;
  y: number;
};

type ResponseData<T> = {
  data: T;
  error?: string;
};

// INTERFACES Interfaces define the shape of objects and can be extended or implemented by classes
// Use PascalCase; optional to prefix with I.
interface UserInfo {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}

// UNIONS allow you to create a type that can be one of several types
// Follow the same conventions as type aliases
type StringOrNumber = string | number;
type Shape = Circle | Square; // Union of shapes

// INTERSECTIONS combine multiple types into one
// Follow the same conventions as type aliases
type Person = {
  name: string;
};
type Employee = {
  employeeId: number;
};

type EmployeeInfo = Person & Employee; // Intersection of Person and Employee

// LITERAL TYPES specify exact values a string or number can take.
// Use camelCase for specific string or number literals.
type Direction = "up" | "down" | "left" | "right";

// MAPPED TYPES allow you to create new types by transforming properties of an existing type.
// Use PascalCase for derived types.
type Dog = {
  id: number;
  name: string;
};

type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};

// UTILITY TYPES TypeScript provides several utility types (like Partial, Required, Pick, etc.) that help manipulate types.
// Use PascalCase for derived types.
type User = {
  id: number;
  name: string;
};

type PartialUser = Partial<User>; // All properties are optional
type UserWithoutId = Omit<User, "id">; // Exclude the 'id' property
