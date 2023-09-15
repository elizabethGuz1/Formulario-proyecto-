
const fechaInput = document.getElementById("fecha");
flatpickr(fechaInput, {
    enableTime: false, 
    dateFormat: "d-m-Y", 
    
});


const horaInput = document.getElementById("hora");
$(horaInput).clockpicker({
    autoclose: true, 
    donetext: "Aceptar",
});


