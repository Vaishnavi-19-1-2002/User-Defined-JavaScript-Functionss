//Defination
const myFilter = (list, callback) => {
    const new_list = [];

    for(let i=0; i<list.length; i++) {
        if(callback(list[i], i, list)) {
            new_list.push(list[i]);
        }
    }

    return new_list;
}


//Testing
function checkAdult(age) {
    return age >= 18;
}

const ages = [12, 33, 16, 40, 18];

//Test 1
ans = myFilter(ages, checkAdult);
console.log("Vote Eligible: " + ans);