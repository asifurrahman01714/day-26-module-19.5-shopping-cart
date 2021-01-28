const casePlusBtn = document.getElementById('casePlusBtn');
casePlusBtn.addEventListener('click',function () {
    productHandle(true);

})

const caseMinusBtn = document.getElementById('caseMinusBtn');
caseMinusBtn.addEventListener('click', function () {
    productHandle(false);
});

function productHandle(isIncrease) {
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