// Filtrování měst v tabulce
document.getElementById('filterInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#cityTable tbody tr');
    rows.forEach(row => {
        const city = row.cells[1].textContent.toLowerCase();
        row.style.display = city.includes(filter) ? '' : 'none';
    });
});

// Filtrování měst ve výběrovém menu
document.getElementById('formFilterInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const options = document.getElementById('citySelect').options;
    for (let i = 0; i < options.length; i++) {
        const city = options[i].textContent.toLowerCase();
        options[i].style.display = city.includes(filter) ? '' : 'none';
    }
});

// Zpracování odeslání formuláře
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCity = document.getElementById('citySelect').value;
    alert("Vybrané město: " + selectedCity);
});
