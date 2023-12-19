//Defination
const myForEach = (list, callback) => {
    for(let i=0; i<list.length; i++) {
        callback(list[i] , i, list);
    }
}


//Testing
function arraySum(item) {
    sum += item;
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

//Test 1
myForEach(numbers, arraySum);
console.log("Sum: " + sum);

//Test 2
console.log("Elements are:")
myForEach(numbers, console.log);
