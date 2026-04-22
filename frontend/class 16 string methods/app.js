let text = "1,2,3,4,5,6"


let numbersInString = text.split(",");
// console.log(numbersInString);

const addNumbers = () => {
    let defaultNum = 0;
    for(let i = 0; i < numbersInString.length; i++){
        defaultNum += Number(numbersInString.at(i));
    }
    return defaultNum;

}
console.log(addNumbers());

let date= "2026-03-13T10:50:58.735Z";
let splitDate = date.split('T')
let secondElement = splitDate.at(1);
let fixDate = secondElement.slice(0,5)
console.log(fixDate);
console.log(new Date ());
