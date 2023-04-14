//Funcion para que te llegue el mail con los datos del formulario (API emailjs)
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_jaugmcn';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Enviar Mensaje';
    alert('Mensaje enviado correctamente!');
    }, (err) => {
    btn.value = 'Enviado';
    alert(JSON.stringify(err));
    });
});


//Funcion para resetear el form
document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('form');
    formulario.addEventListener('submit', function() {
        formulario.reset();
    });
});