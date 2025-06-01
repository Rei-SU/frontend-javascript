// DirectorInterface with 3 methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Factory function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  if (typeof salary === "string") {
    // Assume string salary means Director (per example)
    return new Director();
  }
  if (typeof salary === "number" && salary >= 500) {
    return new Director();
  }
  // fallback to Teacher if input is unexpected
  return new Teacher();
}

// Testing output
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee("$500")); // Director instance
