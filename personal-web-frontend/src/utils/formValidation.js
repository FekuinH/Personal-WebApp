export function minLengthValidation(inputData, minLength) {
    const { value } = inputData;

    removeClassSuccessError(inputData);
    let resultValidation = value.length >= minLength;
    addClassErrorSucces(resultValidation, inputData);

    return resultValidation;
}


function addClassErrorSucces(resultValidation, inputData) {
    if (resultValidation) {
        inputData.classList.add('success');
    } else {
        inputData.classList.add('error');
    }
}

export function emailValidation(inputData) {
    // eslint-disable-next-line no-useless-escape
    let emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const { value } = inputData;

    removeClassSuccessError(inputData);
    let resultValidation = emailValid.test(value);
    addClassErrorSucces(resultValidation, inputData);
    return resultValidation;
}


function removeClassSuccessError(inputData) {
    inputData.classList.remove('error');
    inputData.classList.remove('success');
}


