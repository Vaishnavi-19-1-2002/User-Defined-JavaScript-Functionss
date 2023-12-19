//Defination
const myMap = (list, callback) => {
    const new_list = [];

    for(let i=0; i<list.length; i++) {
        new_list[i] = callback(list[i], i, list);
    }

    return new_list;
}


//Testing
function double(item) {
    return item*2;
}

const numbers = [4, 9, 16, 25];

//Test 1
ans1 = myMap(numbers, Math.sqrt);
console.log("Square Root List: " + ans1);

//Test 2
ans2 = myMap(numbers, double);
console.log("Doubling List: " + ans2);