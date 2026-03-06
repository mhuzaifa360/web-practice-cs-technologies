// if (age >= 0 && age <= 12){
    //     console.log('Child');
    // }
    // else if (age >= 13 && age <= 19){
        //     console.log('Teenager');
// }
// else if(age >= 20 && age <= 64){
//     console.log('Senior');
// }
// else{
    //     console.log("invalid age");
    // }
    
let age = 13;
switch (true){
    case (age >= 0 && age <= 12):
        console.log('child');
        break;
    case (age >= 13 && age <= 19):
         console.log('teenager');
        break;
    case (age >= 20 && age <= 64) :
        console.log('Senior');
        break;
    default:
         console.log("invalid age");
    
}

