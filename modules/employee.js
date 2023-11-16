export class Employee {
    constructor (id, salary) {
        this.id = id;
        this.salary = salary;
    }
    
    static compareSalary (firstEmpl, SecondEmpl) {
      if (firstEmpl.salary === SecondEmpl.salary) {
        return "salaries are equal";
      }
      else if (firstEmpl.salary > SecondEmpl.salary) {
        return `User with id ${firstEmpl.id} has greater salary`;
      }
      else {
        return `User with id ${SecondEmpl.id} has greater salary`;
      }
    }
  }