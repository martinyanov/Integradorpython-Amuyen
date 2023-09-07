document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const requiredFields = document.querySelectorAll('.form-control');
    let valid = true;

    requiredFields.forEach(function (field) {
        const inputValue = field.value.trim();

        if (field.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!inputValue.match(emailRegex)) {
                field.classList.add('error');
                valid = false;
            } else {
                field.classList.remove('error');
            }
        } else if (field.name === 'telefono') {
            const telefonoRegex = /^[0-9]+$/;

            if (!inputValue.match(telefonoRegex)) {
                field.classList.add('error');
                valid = false;
            } else {
                field.classList.remove('error');
            }
        } else if (field.name === 'nombre' || field.name === 'apellido') {
            const lettersRegex = /^[a-zA-Z\s]*$/;

            if (!inputValue.match(lettersRegex)) {
                field.classList.add('error');
                valid = false;
            } else {
                field.classList.remove('error');
            }
        } else {
            const lettersAndNumbersRegex = /^[a-zA-Z0-9\s]*$/;

            if (!inputValue.match(lettersAndNumbersRegex)) {
                field.classList.add('error');
                valid = false;
            } else {
                field.classList.remove('error');
            }
        }

        // Verificar campo vacío
        if (inputValue === '') {
            field.classList.add('error');
            valid = false;
        }
    });

    if (valid) {
        // Agregar la animación al botón ENVIAR
        const submitButton = document.querySelector('.btn-submit');
        submitButton.classList.add('animate__animated', 'animate__flip'); // Agregar clases de animación

        setTimeout(function () {
            // Remover las clases de animación después de la animación
            submitButton.classList.remove('animate__animated', 'animate__flip');
        }, 500); // Ajustar el tiempo según la duración de la animación
    }
});
