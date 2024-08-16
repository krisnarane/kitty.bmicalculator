const form = document.getElementById('form');
        
document.getElementById('weight').addEventListener('input', function(event) {
    let value = event.target.value;
    let cursorPos = event.target.selectionStart;

    value = value.replace(/[^\d,]/g, ''); // remove tudo que não é dígito ou vírgula
    value = value.replace(/,+/g, ',');    // impede múltiplas vírgulas seguidas
    
    event.target.value = value;
    
    event.target.setSelectionRange(cursorPos, cursorPos);
});



form.addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
          

    // Substitui a vírgula por um ponto
    weight = weight.replace(',', '.');
    

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden');

        if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';
        } else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        } else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        } else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        } else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
        } else {
            description = "Cuidado! Você está com obesidade mórbida!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculate').click();
        
    }
});