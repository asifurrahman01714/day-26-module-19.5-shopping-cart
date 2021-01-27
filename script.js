//plus btn click handler
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', function () {
    //capturing first input number
    captureInput('firstInput');
    //capturing price amount
    priceAmount('firstPrice', 1219);
    //capturing subtotal
    plusSubTotal(1219);
    //capturing total amount
    plusTotal(1219);

})

//case plus btn handler
const casePlusBtn = document.getElementById('casePlusBtn');
casePlusBtn.addEventListener('click', function () {
    //capturing first input number
    captureInput('caseInput');
    //capturing price amount
    priceAmount('caseFirstPrice', 59);
    //capturing subtotal
    plusSubTotal(59);
    //capturing total amount
    plusTotal(59);
})

// all plus button handler
function captureInput(id) {
    const firstInput = parseFloat(document.getElementById(id).value);
    const totalFirstInputNumber = firstInput + 1;
    document.getElementById(id).value = totalFirstInputNumber;

}

function priceAmount(id, price) {
    const firstPrice = parseFloat(document.getElementById(id).innerText);
    const totalFirstPrice = firstPrice + price;
    document.getElementById(id).innerText = totalFirstPrice;
}

function plusSubTotal( price) {
    const subTotal = parseFloat(document.getElementById('subTotal').innerText);
    const totalSubTotal = subTotal + price;
    document.getElementById('subTotal').innerText = totalSubTotal;
    return totalSubTotal;
    
}

function plusTotal(price) {
    const total = parseFloat(document.getElementById('total').innerText);
    const totalFinal = plusSubTotal(price);
    document.getElementById('total').innerText = totalFinal;
}
// all plus button handler

//minus btn click handler
const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', function () {
    //capturing first input number
    minusInput('firstInput');
    //capturing price amount
    minusFirstPrice('firstPrice',1219);
    //capturing subtotal
    minusSubTotal(1219);
    //capturing total amount
    minusTotal(1219);
})

//case minus button
const caseMinusBtn = document.getElementById('caseMinusBtn');
caseMinusBtn.addEventListener('click', function () {
    //capturing first input number
    minusInput('caseInput');
    //capturing price amount
    minusFirstPrice('caseFirstPrice',59);
    //capturing subtotal
    minusSubTotal(59);

    //capturing total amount
    minusTotal(59);
});


function minusInput(id) {
    const firstInput = parseFloat(document.getElementById(id).value);
    const totalFirstInputNumber = firstInput - 1;
    document.getElementById(id).value = totalFirstInputNumber;

}

function minusFirstPrice(id, price) {
    const firstPrice = parseFloat(document.getElementById(id).innerText);
    const totalFirstPrice = firstPrice - price;
    document.getElementById(id).innerText = totalFirstPrice;
}

function minusSubTotal(price) {
    const subTotal = parseFloat(document.getElementById('subTotal').innerText);
    const totalSubTotal = subTotal - price;
    document.getElementById('subTotal').innerText = totalSubTotal;
    return totalSubTotal;
}

function minusTotal(price) {
    const total = parseFloat(document.getElementById('total').innerText);
    const totalFinal = minusSubTotal(price);
    document.getElementById('total').innerText = totalFinal;
}