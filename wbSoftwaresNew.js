document.getElementById('myForm').addEventListener("submit", (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const date = e.target.date.value;
    const clientName = e.target.clientName.value;
    const customerID = e.target.customerID.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const method = e.target.method.value;

    const newDate = new Date(date);

    var year = newDate.getFullYear();
    var month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    var day = ("0" + newDate.getDate()).slice(-2);
    var formattedDate = day + "/" + month + "/" + year;


    document.getElementById('closeBtn').click()

    document.getElementById('customerName').innerHTML = clientName
    document.getElementById('customerID').innerHTML = customerID
    document.getElementById('paymentDate').innerHTML = formattedDate
    document.getElementById('receiptID').innerHTML = id
    document.getElementById('customerAddress').innerHTML = address
    document.getElementById('customerPhone').innerHTML = phone
    document.getElementById('paymentMethod').innerHTML = method
})

// Invoice Form

document.getElementById('invoiceForm').addEventListener("submit", (e) => {
    e.preventDefault();
    const salesmanName = e.target.salesmanName.value;
    const customerInvoiceID = e.target.customerInvoiceID.value;
    const invoiceDate = e.target.invoiceDate.value;

    const newDate = new Date(invoiceDate);

    var year = newDate.getFullYear();
    var month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    var day = ("0" + newDate.getDate()).slice(-2);
    var formattedDate = day + "/" + month + "/" + year;


    document.getElementById('invoiceCloseBtn').click()

    document.getElementById('salesmanName').innerHTML = salesmanName
    document.getElementById('invoiceID').innerHTML = customerInvoiceID
    document.getElementById('invoiceDate').innerHTML = formattedDate
})

// const paySystem = document.getElementById("paySystem").addEventListener("change", (e) => {
//     const payName = e.target.value;
//     document.getElementById("paySystemField").innerHTML = payName
//     document.getElementById("paySystemFieldClient").innerHTML = payName
// })

// Product Form -------------------------------------------------------------------------------------

let productTotal
let productDetails = [];

document.getElementById("product_form_1").addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById("productCloseBtn1").click();
    const descriptions = e.target.des_input_1.value;
    const price = e.target.total_input_1.value;
    const proposal = e.target.proposal_input_1.value;

    const productDetails1 = { descriptions, price, proposal }
    productDetails.push(productDetails1)

    productTotal = price;

    if(productDetails.length === 1){
        document.getElementById('product_sl_1').innerHTML = productDetails.length;
        document.getElementById('product_proposal_1').innerHTML = productDetails[0].proposal;
        document.getElementById('product_des_1').innerHTML = productDetails[0].descriptions;
        document.getElementById('product_price_1').innerHTML = productDetails[0].price;

        document.getElementById("productTotal").innerHTML = parseInt(productDetails[0].price);

        document.getElementById('product_form_1').reset();
    }

    else if (productDetails.length === 2) {
        document.getElementById('product_sl_2').innerHTML = productDetails.length;
        document.getElementById('product_proposal_2').innerHTML = productDetails[1].proposal;
        document.getElementById('product_des_2').innerHTML = productDetails[1].descriptions;
        document.getElementById('product_price_2').innerHTML = productDetails[1].price;
        
        const totalAmount = parseInt(productDetails[0].price) + parseInt(productDetails[1].price);
        productTotal = totalAmount;
        document.getElementById("productTotal").innerHTML = totalAmount;

        document.getElementById('product_form_1').reset();
    }

    else if (productDetails.length === 3) {
        document.getElementById('product_sl_3').innerHTML = productDetails.length;
        document.getElementById('product_proposal_3').innerHTML = productDetails[2].proposal;
        document.getElementById('product_des_3').innerHTML = productDetails[2].descriptions;
        document.getElementById('product_price_3').innerHTML = productDetails[2].price;

        const totalAmount = parseInt(productDetails[0].price) + parseInt(productDetails[1].price) + parseInt(productDetails[2].price);
        productTotal = totalAmount;
        document.getElementById("productTotal").innerHTML = totalAmount;

        document.getElementById('product_form_1').reset();
    }
    else{
        const totalAmount = parseInt(productDetails[0].price) + parseInt(productDetails[1].price) + parseInt(productDetails[2].price);
        productTotal = totalAmount;
        alert("Don't added anymore")
    }

    console.log(productTotal);
})


// Payment Information Form
document.getElementById("payment_form").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("payCloseBtn").click();

    const date = e.target.payment_date.value;
    const descriptions = e.target.payment_des.value;
    const receipt = e.target.payment_receipt.value;
    const price = e.target.payment_price.value;

    document.getElementById('pay_date').innerHTML = date;
    document.getElementById('pay_des').innerHTML = descriptions;
    document.getElementById('pay_name').innerHTML = receipt;
    document.getElementById('pay_price').innerHTML = price;

    console.log(productTotal);
    document.getElementById('closingTotal').innerHTML = productTotal;
    document.getElementById('closingPaid').innerHTML = price;
    document.getElementById('closingDue').innerHTML = productTotal - parseInt(price);
})

// Transaction Info
document.getElementById("transaction_form").addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById("transactionCloseBtn").click();

    const transactionID = e.target.transactionIDInput.value;
    const transactionFrom = e.target.transactionFromInput.value;
    const transactionType = e.target.transactionTypeInput.value;

    document.getElementById('transactionID').innerHTML = transactionID;
    document.getElementById('transactionFrom').innerHTML = transactionFrom;
    document.getElementById('transactionType').innerHTML = transactionType;
})
// Bank Info
document.getElementById("bank_form").addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("bankCloseBtn").click();

    const bankName = e.target.bankNameInput.value;
    const branch = e.target.bankBranchInput.value;
    const accNo = e.target.bankAccNumberInput.value;
    const accName = e.target.bankAccNameInput.value;

    document.getElementById('bankName').innerHTML = bankName;
    document.getElementById('branchName').innerHTML = branch;
    document.getElementById('accountNo').innerHTML = accNo;
    document.getElementById('accountName').innerHTML = accName;
})



document.getElementById("modal").addEventListener("click", () => {
    document.getElementById("my_modal_1").classList.add("modalStyle");
})
