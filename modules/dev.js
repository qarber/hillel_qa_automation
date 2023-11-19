import { Employee } from "./employee.js";

export class Dev extends Employee {
    

    // тут питання чи треба писати конструктор в дочірньому класі ? (закоментував, бо з ним не працює)
// constructor() {
//     super()
//     }
    
#jobType = 'I am a Dev';

    getJobType() {
        return this.jobType;
    }

    static returnArrayOfDevs (...objects) {
        const sortedDevsArray = [];
        for (let object of objects) {
            if (object instanceof Dev) {
                sortedDevsArray.push(object)
            }

        
        }
        return sortedDevsArray
    }
     

}


