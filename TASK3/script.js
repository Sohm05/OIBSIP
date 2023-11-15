document.addEventListener("DOMContentLoaded", function() {
    const inputTemperature = document.getElementById("inputTemperature");
    const fromUnit = document.getElementById("fromUnit");
    const outputTemperature = document.getElementById("outputTemperature");
    const toUnit = document.getElementById("toUnit");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function() {
        const inputValue = parseFloat(inputTemperature.value);
        const from = fromUnit.value;
        const to = toUnit.value;
        let result;

        if (from === "celsius" && to === "fahrenheit") {
            result = (inputValue * 9/5) + 32;
        } else if (from === "fahrenheit" && to === "celsius") {
            result = (inputValue - 32) * 5/9;
        } else {
            result = inputValue; // No conversion needed
        }

        outputTemperature.value = result.toFixed(2);
    });
});
