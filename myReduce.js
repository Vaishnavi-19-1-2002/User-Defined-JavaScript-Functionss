//Defination
const myReduce = (list, callback, initialValue) => {
    let total = initialValue === undefined ? list[0] : initialValue;
    const start = initialValue === undefined ? 1 : 0;
 
    for(let i=start; i<list.length; i++) {
        total = callback(total, list[i], i, list);
    }

    return total;
}


//Testing
function myFunc(total, num) {
    return total - num;
}

function getSum(total, num) {
    return total + num;
}

const numbers = [175, 50, 25];

//Test 1
console.log("Without Initial Value:");
const ans1 = myReduce(numbers, myFunc);
console.log("Subtract all numbers:" + ans1);

//Test 2
console.log("With Initial Value:");
const ans2 = myReduce(numbers, getSum, 0);
console.log("Sum all numbers:" + ans2);
