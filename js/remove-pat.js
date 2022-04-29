var patients = document.querySelectorAll('.paciente');

var table = document.querySelector('table');
console.log(table);

table.addEventListener('dblclick', (event)=>{

    var targetEvent = event.target.parentNode;
    targetEvent.classList.add('fadeOut');
    setTimeout(function(){
        targetEvent.remove();
    }, 700);
})
