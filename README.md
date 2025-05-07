## 📊 Differences Between `type` and `interface` in TypeScript

In TypeScript, both `type` and `interface` are used to describe the shape of data, but there are key differences between them. Below is a clear comparison to understand when and how to use each.

| `type`                                                                                         | `interface`                                                                |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Alias for any type: objects, primitives, unions, tuples, etc.                                  | Defines the structure of an object (blueprint or contract).                |
| More flexible: supports unions, primitives, tuples, intersections, mapped & conditional types. | Primarily used for object shapes and class contracts.                      |
| Uses the `type` keyword.                                                                       | Uses the `interface` keyword.                                              |
| Can alias primitives (e.g., `type Name = string`).                                             | Cannot alias primitives (only object-like structures).                     |
| Does **not** support declaration merging.                                                      | Supports declaration merging (interfaces with the same name are merged).   |
| Name conflict causes errors if declared multiple times.                                        | Multiple declarations with the same name are merged seamlessly.            |
| Cannot be implemented or extended by classes directly (but can be intersected).                | Can be implemented and extended by classes.                                |
| Supports unions (e.g., `type A = B \| C`).                                                     | Cannot describe union types.                                               |
| Supports intersections (e.g., `type A = B & C`).                                               | Achieved via `extends`.                                                    |
| Can define primitives, unions, tuples, and objects.                                            | Can only define object-like structures (no primitives or tuples directly). |

---

### 🚀 Key Takeaways

* **Use `interface`** when designing object shapes, especially for class-based systems or API contracts.
* **Use `type`** when you need to combine multiple types (unions/intersections) or alias primitives, tuples, or mapped types.
* If you need declaration merging (like adding properties in different places), `interface` is the only option.
* For more **advanced type transformations** (like mapped or conditional types), `type` is more powerful.

---

### 🔹 Example

```ts
// Using type
type UserID = string | number;
type Point = { x: number; y: number };
type Response<T> = { data: T; status: number };

// Using interface
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  employeeId: string;
}
```

---

## 🔗 Union and Intersection Types in TypeScript (Full Example)

This file demonstrates how to use **union** and **intersection** types in TypeScript in a single file.

```ts
// Union Type Example
type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  if (status === "success") {
    console.log("Operation was successful!");
  } else if (status === "error") {
    console.log("There was an error.");
  } else {
    console.log("Loading...");
  }
}

showStatus("success"); // Operation was successful!
showStatus("error");   // There was an error.
showStatus("loading"); // Loading...

// Intersection Type Example
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "John Doe",
  age: 30,
  employeeId: "EMP123",
  department: "Engineering",
};

console.log(staffMember);
// Output: { name: 'John Doe', age: 30, employeeId: 'EMP123', department: 'Engineering' }
```

---

## 📝 Key Takeaways

* **Union Types (`|`)**: Allow a variable to be one of multiple types.
* **Intersection Types (`&`)**: Combine multiple types into a single type with all properties.
