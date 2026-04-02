// ! Find avg and grade

let marks = [68,76,82,92];

const avgFinder = (marks) =>{
    let sum = 0;
    let grade = "";
    for(let i = 0; i < marks.length; i++){
        sum = sum + marks[i];
        
    }

    const avg = sum / marks.length;
        if(avg < 50){
            grade = "fail";
        }
        else if(avg >= 51 && avg <= 60){
            grade = "E";
        }
        else if(avg >= 61 && avg <= 70){
            grade = "D";
        }
        else if(avg >= 71 && avg <= 80){
            grade = "C";
        }
        else if(avg >= 81 && avg <= 90){
            grade = "B";
        }
        else if(avg >= 91 && avg <= 100){
            grade = "A";
        }

    return `the sum of all marks is ${sum} and avg is ${avg} and grade is ${grade}` ;

}
console.log(avgFinder(marks));
// sum is 318


// ! Find each member bill amount
// 10000  total bill
// 4 member  
// i person give 4% tip
// find each memeber bill

let totalBill = 10000;
let totalPerson = 4;
let tipPercentage = 4;

const billSpliter = (totalBill,totalPerson,tipPercentage) => {
    let percentage = (totalBill * tipPercentage) / 100
    let totalAmount = totalBill + percentage;
    let onePersonBill = totalAmount/totalPerson;
    return onePersonBill;
    
}
let nashta = billSpliter(2000,4,1);
let lunch = billSpliter(5000,4,2); 
let dinner = billSpliter(3000,4,3);
console.log(nashta + lunch + dinner);

