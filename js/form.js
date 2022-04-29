var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {

    event.preventDefault();
    // Captar elemento form ->  
    var form = document.querySelector('#form-adiciona');
    // Obtendo dados do paciente pelo form
    var patient = patientToForm(form)
    console.log(patient);

    var patientTr = createTr(patient);
    console.log(patientTr);

    var erros = validatePatient(patient);

    if (erros.length > 0) {
        openMessageErro(erros)        
        return;
    }

    // Captando tabela
    var table = document.querySelector('#tabela-pacientes');
    table.appendChild(patientTr);

    form.reset();
    var messageErro = document.querySelector('#message-erro');

    messageErro.innerHTML = '';

});

function openMessageErro(erros){
    var ul = document.querySelector('#message-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function patientToForm(form) {
    // Valor dos inputs atraves do valor do name
    var patient = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return patient;
}

function createTr(patient) {
    // Criar Tr
    var newPatTr = document.createElement('tr');
    // Passando valor do input para o valor do campoo Td
    // Passando os valores de cada Td como Child de newPatTr
    newPatTr.appendChild(createTd(patient.nome, 'info-nome'));
    newPatTr.appendChild(createTd(patient.peso, 'info-peso'));
    newPatTr.appendChild(createTd(patient.altura, 'info-altura'));
    newPatTr.appendChild(createTd(patient.gordura, 'info-gordura'));
    newPatTr.appendChild(createTd(patient.imc, 'info-imc'));

    return newPatTr
}

function createTd(val, classe) {
    // Criar Td
    var td = document.createElement('td');
    td.textContent = val;
    td.classList.add(classe);

    return td
}

function validatePatient(patient) {
    var erros = []
    if (patient.nome.length == 0){
        erros.push('Preencha o campo nome')
    }
    if (patient.peso.length == 0){
        erros.push('Preencha o campo peso')
    }
    if (patient.altura.length == 0){
        erros.push('Preencha o campo altura')
    }
    if (patient.gordura.length == 0){
        erros.push('Preencha o campo gordura')
    }

    if (!validateWeight(patient.peso)) erros.push("Peso do paciente inválido");
    if (!validateHeight(patient.altura)) erros.push('Peso paciente inválido');

    return erros;
}
