

let light = document.querySelector(".light");

let btn = document.querySelector(".btn")

// console.log(btn);
var toogle = true;

btn.addEventListener('click', ()=> {
    if(toogle){
        light.style.backgroundColor = "yellow"
        light.src = './icons8-light-on-96.png'
        btn.innerHTML= "Off"
        toogle = false;
        
    }else{
        light.style.backgroundColor = "black"
        btn.innerHTML= "On"
        toogle = true;

    }
    // light.style.backgroundColor = "yellow"
})