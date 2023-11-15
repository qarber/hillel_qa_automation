import { Employee } from "./employee.js";


export class PM extends Employee {

constructor() {
    super()
    }   

    getJobType() {
        console.log('I am a PM');
    }

}