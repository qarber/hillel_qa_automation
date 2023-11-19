function sortBySalary (objects) {
    return objects.sort((objectA, objectB) => {
        if (objectA.salary === objectB.salary) {
            return objectA.id - objectB.id;
        }
        else {
            return objectA.salary - objectB.salary;
        } 
    });
    

}


export default sortBySalary