export const validateUsernameAndPassword = (input) => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9]{5,}$/; 
    const passwordRegex = /^[a-zA-Z0-9]{5,}$/;

    if (!input.username) {
        errors.username = "Username is required";
    } else if (!usernameRegex.test(input.username)) {
        errors.username = "Username is at least 5 characters long";
    }

    if (!input.password) {
        errors.password = "Password is required";
    } else if (!passwordRegex.test(input.password)) {
        errors.password = "Password is at least 5 characters long";
    }

    return errors;
}

export const validateRegisterUser = input => {
    const errors={}
    const nameRegex = /^[a-zA-Z\s]{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const nDniRegex = /^[0-9]+$/;
    const usernameRegex = /^[a-zA-Z0-9]{5,}$/; 
    const passwordRegex = /^[a-zA-Z0-9]{5,}$/;

    if (!input.name) {
        errors.name = "Name is required";
    } else if (!nameRegex.test(input.name)) {
        errors.name = "Name must be at least 5 characters long and contain only letters";
    }

    if (!input.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(input.email)) {
        errors.email = "Email is not valid";
    }

    if (!input.birthdate) {
        errors.birthdate = "Birthdate is required";
    } else if (!birthdateRegex.test(input.birthdate)) {
        errors.birthdate = "Birthdate must be in the format dd/mm/yyyy";
    }

    if (input.phone && !nDniRegex.test(input.nDni)) {
        errors.phone = "Phone number must contain only numbers";
    }
    if (!input.username) {
        errors.username = "Username is required";
    } else if (!usernameRegex.test(input.username)) {
        errors.username = "Username is at least 5 characters long";
    }

    if (!input.password) {
        errors.password = "Password is required";
    } else if (!passwordRegex.test(input.password)) {
        errors.password = "Password is at least 5 characters long";
    }

    return errors;
}