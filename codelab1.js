function tambah() {
    var bilangan1 = parseFloat(document.getElementById("number1").value);
    var bilangan2 = parseFloat(document.getElementById("number2").value);

    var hasil = bilangan1 + bilangan2;

    alert("Hasil penjumlahan= " + hasil);
}

function resetForm() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}