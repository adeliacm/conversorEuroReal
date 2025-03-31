document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('converte').addEventListener('click', function() {
        let valor = document.getElementById('valor').value;
        let euro = 6.1881;
        alert('R$ ' + (valor / euro).toFixed(2)); 
    });
});
