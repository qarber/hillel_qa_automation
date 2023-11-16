import { Employee } from "./employee.js";

export class PM extends Employee {

        // тут питання чи треба писати конструктор в дочірньому класі ? (закоментував, бо з ним не працює)
// constructor() {
//     super()
//     }   

#jobType = 'I am a PM';
    getJobType() {
        return this.jobType;
    }

}