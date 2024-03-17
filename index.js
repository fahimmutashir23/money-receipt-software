document.getElementById('myForm').addEventListener("submit", (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const date = e.target.date.value;
    const clientName = e.target.clientName.value;
    const customerID = e.target.customerID.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    const newDate = new Date(date);

    var year = newDate.getFullYear();
    var month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    var day = ("0" + newDate.getDate()).slice(-2);
    var formattedDate = day + "/" + month + "/" + year; 


    document.getElementById('closeBtn').click()
    
    document.getElementById('name').innerHTML = clientName
    document.getElementById('customerID').innerHTML = customerID
    document.getElementById('date').innerHTML = formattedDate
    document.getElementById('receiptID').innerHTML = id
    document.getElementById('address').innerHTML = address
    document.getElementById('phone').innerHTML = phone
    document.getElementById('email').innerHTML = email
})

// const paySystem = document.getElementById("paySystem").addEventListener("change", (e) => {
//     const payName = e.target.value;
//     document.getElementById("paySystemField").innerHTML = payName
//     document.getElementById("paySystemFieldClient").innerHTML = payName
// })

document.getElementById("pay_field_form_1").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("payCloseBtn1").click()
    const descriptions = e.target.pay_des_input_1.value;
    const price = e.target.pay_price_input_1.value;
    const name = e.target.pay_name_input_1.value;
    const date = e.target.pay_date_input_1.value;
    const sl = e.target.pay_sl_input_1.value;
    
    document.getElementById('pay_des_1').innerHTML = descriptions
    document.getElementById('pay_price_1').innerHTML = price
    document.getElementById('pay_name_1').innerHTML = name
    document.getElementById('pay_date_1').innerHTML = date
    document.getElementById('pay_sl_1').innerHTML = sl
})

document.getElementById("pay_field_form_2").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("payCloseBtn2").click()
    const descriptions = e.target.pay_des_input_2.value;
    const price = e.target.pay_price_input_2.value;
    const name = e.target.pay_name_input_2.value;
    const date = e.target.pay_date_input_2.value;
    const sl = e.target.pay_sl_input_2.value;
    
    document.getElementById('pay_des_2').innerHTML = descriptions
    document.getElementById('pay_price_2').innerHTML = price
    document.getElementById('pay_name_2').innerHTML = name
    document.getElementById('pay_date_2').innerHTML = date
    document.getElementById('pay_sl_2').innerHTML = sl
})

document.getElementById("pay_field_form_3").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("payCloseBtn3").click()
    const descriptions = e.target.pay_des_input_3.value;
    const price = e.target.pay_price_input_3.value;
    const name = e.target.pay_name_input_3.value;
    const date = e.target.pay_date_input_3.value;
    const sl = e.target.pay_sl_input_3.value;
    
    document.getElementById('pay_des_3').innerHTML = descriptions
    document.getElementById('pay_price_3').innerHTML = price
    document.getElementById('pay_name_3').innerHTML = name
    document.getElementById('pay_date_3').innerHTML = date
    document.getElementById('pay_sl_3').innerHTML = sl
})

// Invoice Section
document.getElementById("field_form_1").addEventListener('submit', (e) => {
    e.preventDefault()

    document.getElementById("closeBtn1").click();

    const descriptions = e.target.des_input_1.value;
    const price = e.target.price_input_1.value;
    const sl = e.target.sl_input_1.value;

    localStorage.setItem('amount1', price)
    
    document.getElementById('des_field_1').innerHTML = descriptions
    document.getElementById('price_field_1').innerHTML = price
    document.getElementById('sl_field_1').innerHTML = sl

    const getAmount = localStorage.getItem('amount1');
    if(getAmount){
        console.log(getAmount);
        document.getElementById('totalAmount').innerHTML = getAmount
    }
})

document.getElementById("field_form_2").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("closeBtn2").click();
    const descriptions = e.target.des_input_2.value;
    const price = e.target.price_input_2.value;
    const sl = e.target.sl_input_2.value;
    localStorage.setItem('amount2', price)
    
    document.getElementById('des_field_2').innerHTML = descriptions
    document.getElementById('price_field_2').innerHTML = price
    document.getElementById('sl_field_2').innerHTML = sl

    const data1 = localStorage.getItem('amount1');
    const data2 = localStorage.getItem('amount2');
    const getAmount1 = JSON.parse(data1)
    const getAmount2 = JSON.parse(data2)

    if(getAmount1 && getAmount2){
        const sum = getAmount1 + getAmount2
        document.getElementById('totalAmount').innerHTML = sum
    }
    
})

document.getElementById("field_form_3").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("closeBtn3").click();
    const descriptions = e.target.des_input_3.value;
    const price = e.target.price_input_3.value;
    const sl = e.target.sl_input_3.value;

    localStorage.setItem('amount3', price)
    
    document.getElementById('des_field_3').innerHTML = descriptions
    document.getElementById('price_field_3').innerHTML = price
    document.getElementById('sl_field_3').innerHTML = sl

    const data1 = localStorage.getItem('amount1');
    const data2 = localStorage.getItem('amount2');
    const data3 = localStorage.getItem('amount3');
    const getAmount1 = JSON.parse(data1)
    const getAmount2 = JSON.parse(data2)
    const getAmount3 = JSON.parse(data3)

    if(getAmount1 && getAmount2 && getAmount3){
        const sum = getAmount1 + getAmount2 + getAmount3
        document.getElementById('totalAmount').innerHTML = sum
    }
})

document.getElementById("field_form_4").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("closeBtn4").click();
    const descriptions = e.target.des_input_4.value;
    const price = e.target.price_input_4.value;
    const sl = e.target.sl_input_4.value;

    localStorage.setItem('amount4', price)
    
    document.getElementById('des_field_4').innerHTML = descriptions
    document.getElementById('price_field_4').innerHTML = price
    document.getElementById('sl_field_4').innerHTML = sl

    const data1 = localStorage.getItem('amount1');
    const data2 = localStorage.getItem('amount2');
    const data3 = localStorage.getItem('amount3');
    const data4 = localStorage.getItem('amount4');
    const getAmount1 = JSON.parse(data1)
    const getAmount2 = JSON.parse(data2)
    const getAmount3 = JSON.parse(data3)
    const getAmount4 = JSON.parse(data4)

    if(getAmount1 && getAmount2 && getAmount3 && getAmount4){
        const sum = getAmount1 + getAmount2 + getAmount3 + getAmount4
        document.getElementById('totalAmount').innerHTML = sum
    }
})

document.getElementById("field_form_5").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("closeBtn5").click();
    const descriptions = e.target.des_input_5.value;
    const price = e.target.price_input_5.value;
    const sl = e.target.sl_input_5.value;

    localStorage.setItem('amount5', price)

    document.getElementById('des_field_5').innerHTML = descriptions
    document.getElementById('price_field_5').innerHTML = price
    document.getElementById('sl_field_5').innerHTML = sl

    const data1 = localStorage.getItem('amount1');
    const data2 = localStorage.getItem('amount2');
    const data3 = localStorage.getItem('amount3');
    const data4 = localStorage.getItem('amount4');
    const data5 = localStorage.getItem('amount5');
    const getAmount1 = JSON.parse(data1)
    const getAmount2 = JSON.parse(data2)
    const getAmount3 = JSON.parse(data3)
    const getAmount4 = JSON.parse(data4)
    const getAmount5 = JSON.parse(data5)

    if(getAmount1 && getAmount2 && getAmount3 && getAmount4 && getAmount5){
        const sum = getAmount1 + getAmount2 + getAmount3 + getAmount4 + getAmount5
        document.getElementById('totalAmount').innerHTML = sum
    }
})




document.getElementById("modal").addEventListener("click", () => {
    document.getElementById("my_modal_1").classList.add("modalStyle")
})
