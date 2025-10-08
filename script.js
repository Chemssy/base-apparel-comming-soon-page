const expresion = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const form = document.getElementById('form');
const input = document.querySelector('#form input');


const validarFormulario = (e) => {
    switch(e.target.name) {
        case "email":
            if( expresion.email.test(e.target.value) ) {
                document.getElementById('input__container').classList.remove('error');
                document.getElementById('error__message').classList.remove('active');
                document.getElementById('error__icon').classList.remove('active')


            } else{
                document.getElementById('input__container').classList.add('error');
                document.getElementById('error__message').classList.add('active');
                document.getElementById('error__icon').classList.add('active')
            }
        break
    }
}


input.addEventListener('keyup', validarFormulario);
input.addEventListener('blur', validarFormulario);

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

