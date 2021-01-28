function phoneHandle(isIncrease) {
    const phoneInput = document.getElementById('phoneInput');
    const phoneNewInput = parseInt(phoneInput.value);
    let phoneLastInput = phoneNewInput;
    if (isIncrease == true) {
        phoneLastInput = phoneNewInput + 1;
    }

    if (isIncrease == false && phoneNewInput > 0) {
        phoneLastInput = phoneNewInput - 1;
    }
    phoneInput.value = phoneLastInput;
    const phoneNewPrice = phoneLastInput * 1219;
    document.getElementById('phoneFirstPrice').innerText = phoneNewPrice;
}



//case handle
function caseHandle(isIncrease) {
    const caseInput = document.getElementById('caseInput');
    const caseNewInput = parseInt(caseInput.value);
    let caseLastInput = caseNewInput;
    if (isIncrease == true) {
        caseLastInput = caseNewInput + 1;
    }

    if (isIncrease == false && caseNewInput > 0) {
        caseLastInput = caseNewInput - 1;
    }
    caseInput.value = caseLastInput;
    const caseNewPrice = caseLastInput * 59;
    document.getElementById('caseFirstPrice').innerText = caseNewPrice;
}