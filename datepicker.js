document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#datepicker2", {
        dateFormat: "Y-m-d",
        appendTo: document.getElementById('customer_modal'),
        position: 'below',
    });
    flatpickr("#datepicker1", {
        dateFormat: "Y-m-d",
        appendTo: document.getElementById('invoice_modal'),
        position: 'below',
    });
    flatpickr("#datepicker", {
        dateFormat: "Y-m-d",
        appendTo: document.getElementById('payment_info_modal'),
        position: 'below',
    });
});