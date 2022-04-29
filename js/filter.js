var filter = document.querySelector('#filterTable');

filter.addEventListener('input', function () {
    var patients = document.querySelectorAll('.paciente');
    if(this.value.length > 0){
        console.log('digitando..');
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            var tdNome = patient.querySelector('.info-nome');
            var nome = tdNome.textContent;
            if (nome != this.value){
                patient.classList.add('displayNone')
            }else{
                patient.classList.remove('displayNone')
            }
        }
    }else{
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            patient.classList.remove('displayNone')
        }
    }
})