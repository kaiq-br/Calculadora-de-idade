const birthdayEl = document.getElementById("birthday");
const buttonEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert('Insira uma data');
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerHTML = `Sua idade é de ${age} ${age > 1 ? "anos" : "ano"}`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}

buttonEl.addEventListener("click", calculateAge);