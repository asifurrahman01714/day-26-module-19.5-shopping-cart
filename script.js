//plus btn click handler
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click',function () {

    //capturing first input number
    const firstInput = parseFloat(document.getElementById('firstInput').value);
    const totalFirstInputNumber = firstInput + 1;
    document.getElementById('firstInput').value = totalFirstInputNumber;
  

    //capturing price amount

    const firstPrice = parseFloat(document.getElementById('firstPrice').innerText);
    const totalFirstPrice = firstPrice + 1219;
    document.getElementById('firstPrice').innerText = totalFirstPrice;

    //capturing subtotal
    const subTotal = parseFloat(document.getElementById('subTotal').innerText);
    const totalSubTotal = subTotal + 1219;
    document.getElementById('subTotal').innerText= totalSubTotal;

    //capturing total amount
    const total = parseFloat(document.getElementById('total').innerText);
    const totalFinal = totalSubTotal;
    document.getElementById('total').innerText = totalSubTotal;
    
   
})


//minus btn click handler
const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click',function () {

    //capturing first input number
    const firstInput = parseFloat(document.getElementById('firstInput').value);
    const totalFirstInputNumber = firstInput - 1;
    document.getElementById('firstInput').value = totalFirstInputNumber;
  

    //capturing price amount

    const firstPrice = parseFloat(document.getElementById('firstPrice').innerText);
    const totalFirstPrice = firstPrice - 1219;
    document.getElementById('firstPrice').innerText = totalFirstPrice;
   

    //capturing subtotal
    const subTotal = parseFloat(document.getElementById('subTotal').innerText);
    const totalSubTotal = subTotal - 1219;
    document.getElementById('subTotal').innerText= totalSubTotal;
})


