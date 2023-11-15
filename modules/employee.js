import { Dev } from "./dev.js";
import { PM } from "./pm.js";

export class Employee {
    constructor (id, salary) {
        this.id = id;
        this.salary = salary;
    }
    
    static compareSalary (firstEmpl, SecondEmpl) {
      if (firstEmpl.salary > SecondEmpl.salary) {
        return `User with id ${firstEmpl.id} has greater salary`
      }
        else if (firstEmpl.salary === SecondEmpl.salary){
        return "salaries are equal"
      }
    }
  }