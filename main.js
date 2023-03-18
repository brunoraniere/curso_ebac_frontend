const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');
const buttonSubmit = document.getElementById('button-submit');
const message = document.getElementById('mensagem');
const form = document.getElementById('form-test');

form.addEventListener('submit', e =>{
    
    e.preventDefault();
    let numA = parseFloat(numberA.value);
    let numB = parseFloat(numberB.value);

    if(!isNaN(numA) && !isNaN(numB)){
        if(numB>numA){
            message.innerHTML = `Nice! ${numberB.value} is <b>GREATER</b> than ${numberA.value}`;
            message.style.color = "#25ed3c";
        }
        else if (numB<numA){
            message.innerHTML = `Ops! ${numberB.value} is <b>LESS</b> than ${numberA.value}`;
            message.style.color = "#ed2553";
        }
        else{
            message.innerHTML = `Nothing wrong`;
            message.style.color = "#e0e0e0";
        }
    }
})
    