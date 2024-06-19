document.addEventListener("DOMContentLoaded", () => {
    const inputTemp = document.getElementById('input-temp');
    const outputTemp = document.getElementById('output-temp');
    const formulaDisplay = document.getElementById('formula-display');
    const unitFromSelect = document.getElementById('UnitFrom');
    const celsiusBtn = document.getElementById('celsius-btn');
    const fahrenheitBtn = document.getElementById('fahrenheit-btn');
    const reverseBtn = document.getElementById('reverse-btn');

    let currentConversion = 'CtoF'; // Default conversion

    function convertTemperature() {
        const value = parseFloat(inputTemp.value);
        let result = '';
        let formula = '';

        if (!isNaN(value)) {
            if (currentConversion === 'CtoF') {
                result = (value * 9 / 5) + 32;
                formula = `(${value} °C × 9/5) + 32 = ${result.toFixed(2)} °F`;
                outputTemp.value = `${result.toFixed(2)} °F`;
            } else if (currentConversion === 'FtoC') {
                result = (value - 32) * 5 / 9;
                formula = `(${value} °F - 32) × 5/9 = ${result.toFixed(2)} °C`;
                outputTemp.value = `${result.toFixed(2)} °C`;
            }
            formulaDisplay.value = formula;
        } else {
            outputTemp.value = 'Invalid input';
            formulaDisplay.value = '';
        }
    }

    function setConversion(conversion) {
        currentConversion = conversion;
        convertTemperature();
    }

    // Event listeners for the conversion buttons
    celsiusBtn.addEventListener('click', () => setConversion('CtoF'));
    fahrenheitBtn.addEventListener('click', () => setConversion('FtoC'));

    // Event listener for the input temperature
    inputTemp.addEventListener('input', convertTemperature);

    // Reverse button functionality
    reverseBtn.addEventListener('click', () => {
        currentConversion = currentConversion === 'CtoF' ? 'FtoC' : 'CtoF';
        convertTemperature();
    });

    // Event listener for the unit select dropdown
    unitFromSelect.addEventListener('change', (event) => {
        const selectedUnit = event.target.value;
        if (selectedUnit === 'C') {
            setConversion('CtoF');
        } else if (selectedUnit === 'F') {
            setConversion('FtoC');
        }
    });
});