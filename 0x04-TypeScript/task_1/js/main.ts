interface Teacher {
  readonly firstName: string; // immutable after initialization
  readonly lastName: string; // immutable after initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // index signature allows extra properties
}

// Example object to test interface
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // arbitrary extra property
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage:
console.log(printTeacher("John", "Doe")); // Output: J. Doe

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass("Pervy", "Smith");
console.log(student.displayName()); // Output: Pervy
console.log(student.workOnHomework()); // Output: Currently working
