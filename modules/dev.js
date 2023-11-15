import { Employee } from "./employee.js";

export class Dev extends Employee {
    
constructor() {
    super()
    }
    
    getJobType() {
        console.log('I am a Dev');
    }
}

