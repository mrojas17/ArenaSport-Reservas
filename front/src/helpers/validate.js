export const validateUsernameAndPassword = (input) => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9]{5,}$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!input.username) {
        errors.username = "Usuario es requerido";
    } else if (!usernameRegex.test(input.username)) {
        errors.username = "El usuario debe tener minimo 5 caracteres";
    }

    if (!input.password) {
        errors.password = "Contraseña es requerida";
    } else if (!passwordRegex.test(input.password)) {
        errors.password = "Debe tener una Mayuscula, un numero, un caracter espacial (@!-), y minimo 8 caracteres";
    }

    return errors;
}

export const validateRegisterUser = (input) => {
    const errors={}
    const nameRegex = /^[a-zA-Z\s]{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nDniRegex = /^[0-9]+$/;
    const usernameRegex = /^[a-zA-Z0-9]{5,}$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!input.name) {
        errors.name = "Nombre y Apellido es requerido";
    } else if (!nameRegex.test(input.name)) {
        errors.name = "Nombre y Apellido";
    }

    if (!input.email) {
        errors.email = "Email es requerido";
    } else if (!emailRegex.test(input.email)) {
        errors.email = "Email no es valido";
    }

    if (input.phone && !nDniRegex.test(input.nDni)) {
        errors.phone = "el nDni es de solo numeros";
    }
    if (!input.username) {
        errors.username = "Usuario es requerido";
    } else if (!usernameRegex.test(input.username)) {
        errors.username = "Usuario debe tener al menos 5 caracteres";
    }

    if (!input.password) {
        errors.password = "Contraseña es requerida";
    } else if (!passwordRegex.test(input.password)) {
        errors.password = "Debe tener una Mayuscula, un numero, un caracter espacial (@!-), y minimo 8 caracteres";
    }

    return errors;
}

export const validateAppointmentData = (appointmentData) => {
    const { date, time } = appointmentData;
    const errors = [];
  
    const today = new Date();
    const selectedDate = new Date(date);
    if (selectedDate <= today) {
      errors.push('La fecha debe ser posterior al día de hoy.');
    }
  
    const [hours] = time.split(':').map(Number);
    if (hours < 8 || hours >= 22) {
      errors.push('La hora debe estar entre las 08:00 y las 22:00.');
    }

    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) {
    errors.push('No se pueden hacer reservas en fines de semana (sábado y domingo).');
    }
  
    return errors; 
  };

