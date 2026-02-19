function calculateImpact() {

    const systemSize = parseFloat(document.getElementById("systemInput").value);

    if (!systemSize) {
        alert("Please enter system size in kW.");
        return;
    }

    // Assumptions
    const avgSunHours = 5.8; // Ethiopia average
    const co2PerKwh = 0.45; // kg CO2 per kWh displaced (diesel/generator estimate)
    const carbonPrice = 30; // $ per ton CO2 global carbon market

    const annualEnergy = systemSize * avgSunHours * 365;
    const co2YearKg = annualEnergy * co2PerKwh;
    const co2YearTon = co2YearKg / 1000;
    const co225 = co2YearTon * 25;

    const treesEquivalent = co2YearTon * 45; // approx trees per ton
    const carbonValue = co225 * carbonPrice;

    document.getElementById("co2Year").innerText =
        co2YearTon.toFixed(1) + " Tons";

    document.getElementById("co225").innerText =
        co225.toFixed(1) + " Tons";

    document.getElementById("trees").innerText =
        treesEquivalent.toFixed(0) + " Trees";

    document.getElementById("carbonValue").innerText =
        "$" + carbonValue.toFixed(0);
}
