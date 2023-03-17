const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');
const buttonSubmit = document.getElementById('button-submit');
const message = document.getElementById('mensagem');
const form = document.getElementById('form-test');

buttonSubmit.addEventListener('submit', function(e){
    
    e.preventDefault;

    if(!IsNaN(numberA.value) && !IsNaN(numberB.value)){
        if(numberB.value>numberA.value){
            message.innerHTML = `Nice! ${numberB.value} is <b>GREATER</b> than ${numberA.value}`;
            message.style.color = "#25ed3c";
        }
        else if (numberB.value<numberA.value){
            message.innerHTML = `Ops! ${numberB.value} is <b>LESS</b> than ${numberA.value}`;
            message.style.color = "#ed2553";
        }
        else{
            message.innerHTML = `Nothing wrong`;
            message.style.color = "#e0e0e0";
        }
    }
})
    