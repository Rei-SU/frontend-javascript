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
