var title = document.querySelector('h1');
console.log(title.textContent);

var patients = document.querySelectorAll('.paciente');
console.log(patients)

for (var pat = 0; pat < patients.length; pat++) {

    var patient = patients[pat]

    var weightTd = patient.querySelector('.info-peso')
    var weight = weightTd.textContent;
    var heightTd = patient.querySelector('.info-altura')
    var height = heightTd.textContent;
    
    var tdImc = patient.querySelector('.info-imc');


    var weightVal = validateWeight(weight);
    var heightVal = validateHeight(height);
    if (!weightVal) {
        console.log("Peso inválido");
        weightVal = false;
        tdImc.textContent = 'Peso Inválido';
        patient.classList.add('patientInval')
    }
    if (!heightVal) {
        console.log("Altura inválido");
        heightVal = false;
        tdImc.textContent = 'Altura Inválida';
        patient.classList.add('patientInval')
    }

    if (heightVal && weightVal) {
        var imc = calcImc(weight, height)
        tdImc.textContent = imc;
    }
}

function validateWeight(weight){
    if (weight>= 0 && weight <= 1000){
        return true
    }else{
        return false
    }
}

function validateHeight(height){
    if (height>= 0 && height <= 3.0){
        return true
    }else{
        return false
    }
}

function calcImc(weight, height){
    var imc = 0;

    imc = weight / (height * height);
    return imc.toFixed(2)
}