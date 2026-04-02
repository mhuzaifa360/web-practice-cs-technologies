
// ! sum of all array elements
let result1;
let result2;

let numbers1 = [10,10]
function sum(numbers){
    let result1 = 0;
    for (let i = 0; i < numbers.length; i++){
        result1 = result1 + numbers[i];
    }
    return result1;
}
console.log(sum(numbers1));

// ! find avg of array
let numbers2 = [10,10]

function sum(numbers){
    let result2 = 0;
    for (let i = 0; i < numbers.length; i++){
        result2 = result2 + numbers[i];
    }
    result2 = result2/numbers.length;
    return result2;
}
console.log(sum(numbers2));

// ! find largest number in array
let numbers3 = [1, 4, 23, 140, 9, 22]

let greatestValue = numbers3[3];
// console.log(greatestValue);

function largestNum (numbers,greatestValue){

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > greatestValue){
            greatestValue = numbers[i]
        }
    }
    console.log(greatestValue);
    
}
largestNum(numbers3,greatestValue);

function allResults(result1,result2,greatestValue){
    let result= {
        sumNum : result1,
        avgNum : result2,
        largestNumber : greatestValue
    }
    return result;
}
console.log(allResults(result1,result2,greatestValue));

