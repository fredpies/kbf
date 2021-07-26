let errors = {};

// Wyjatki

// Nie znaleziono elementu DOM
errors.elementNotFound = function (selector) {
    return new Error(`Cannot find elements with selector "${selector}"`);
}

// Nie znaleziono formularza
errors.formNotFound = function (formName) {
    return new Error(`Cannot find form with name "${formName}"`);
}

// Nie podano argumentu
errors.argumentNotFound = function (argumentName) {
    return new Error(`${argumentName.substring(0, 1).toUpperCase() + argumentName.substring(1)} argument cannot be empty`);
}

// Brak walidatora dla formularza
errors.noValidator = function () {
    return new Error(`No JQuery validator plugin`);
}

// Nie podano wspolrzednych geograficznych
errors.noGeoCoords = function () {
    return new Error(`You must provide geo coordinates.`);
}

export default errors;