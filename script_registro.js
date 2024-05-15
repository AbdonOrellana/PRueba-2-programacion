const Registro = document.getElementById('registro');
const inputs = document.querySelectorAll('#registro input');
const inputpassword1 = document.getElementById('password')
const inputpassword2 = document.getElementById('password2')
const expresiones ={
    nombres_apellidos: /^[A-Za-z\s]{1,30}$/, 
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password : /^[A-Za-z0-9_.+-]{8,15}$/
}

const validarRegistro = (e) => {
    switch (e.target.name) {
        case "Nombres":
            if (expresiones.nombres_apellidos.test(e.target.value)) {
                document.getElementById('V_nombres').classList.remove('incorrecto');
                document.getElementById('V_nombres').classList.add('correcto');
                document.querySelector('#V_nombres .input-error').classList.remove('input-error-activo')
            } else {
                document.getElementById('V_nombres').classList.remove('correcto');
                document.getElementById('V_nombres').classList.add('incorrecto');
                document.querySelector('#V_nombres .input-error').classList.add('input-error-activo')

            }
            break;
    }
    switch (e.target.name) {
        case "Apellidos":
            if (expresiones.nombres_apellidos.test(e.target.value)) {
                document.getElementById('V_apellidos').classList.remove('incorrecto');
                document.getElementById('V_apellidos').classList.add('correcto');
                document.querySelector('#V_apellidos .input-error').classList.remove('input-error-activo')
            } else {
                document.getElementById('V_apellidos').classList.remove('correcto');
                document.getElementById('V_apellidos').classList.add('incorrecto');
                document.querySelector('#V_apellidos .input-error').classList.add('input-error-activo')
            }
            break;
    }
    switch (e.target.name) {
        case "Correo":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('V_email').classList.remove('incorrecto');
                document.getElementById('V_email').classList.add('correcto');
                document.querySelector('#V_email .input-error').classList.remove('input-error-activo')
            } else {
                document.getElementById('V_email').classList.remove('correcto');
                document.getElementById('V_email').classList.add('incorrecto');
                document.querySelector('#V_email .input-error').classList.add('input-error-activo')
            }
            break;
    }
    switch (e.target.name) {
        case "password":
            
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('V_password').classList.remove('incorrecto');
                document.getElementById('V_password').classList.add('correcto');
                document.querySelector('#V_password .input-error').classList.remove('input-error-activo')
            } else {
                document.getElementById('V_password').classList.remove('correcto');
                document.getElementById('V_password').classList.add('incorrecto');
                document.querySelector('#V_password .input-error').classList.add('input-error-activo')
            }
            validarPassword();
            break;
    }
    switch (e.target.name) {
        case "password2":
            validarPassword();
        break;
    }
}

const validarPassword = () =>{
    if(inputpassword1.value !== inputpassword2.value){
        document.getElementById('V_password-2').classList.add('incorrecto');
        document.getElementById('V_password-2').classList.remove('correcto');
        document.querySelector('#V_password-2 .input-error').classList.add('input-error-activo')
    }else{
        document.getElementById('V_password-2').classList.add('correcto');
        document.getElementById('V_password-2').classList.remove('incorrecto');
        document.querySelector('#V_password-2 .input-error').classList.remove('input-error-activo')
    }
}

Registro.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registro aprobado')
});

inputs.forEach((input) => {
    input.addEventListener('keyup', validarRegistro);
    input.addEventListener('blur', validarRegistro);
});
