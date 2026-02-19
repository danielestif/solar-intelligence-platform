let averageSunlight = 0;

function setSunlight() {

    const location = document.getElementById("location").value;
    const text = document.getElementById("avgSunlightText");

    const sunlightData = {
        "Addis Ababa": 11.5,
        "Dire Dawa": 12.7,
        "Bahir Dar": 11.8,
        "Hawassa": 11.9,
        "Mekelle": 11.7,
        "Adama": 11.2
    };

    if (sunlightData[location]) {
        averageSunlight = sunlightData[location];
        text.innerHTML =
            "Average sunlight in " + location +
            " is approximately <strong>" + averageSunlight +
            " hours per day</strong>. Calculations are based on regional solar data for Ethiopia.";
    } else {
        averageSunlight = 0;
        text.innerHTML = "";
    }
}

function calculateSolar() {

    const bill = parseFloat(document.getElementById("bill").value);
    const roof = parseFloat(document.getElementById("roof").value);
    const customSun = parseFloat(document.getElementById("customSun").value);

    if (!bill || !roof) {
        alert("Please fill in required fields.");
        return;
    }

    let sun = customSun ? customSun : averageSunlight;

    if (!sun) {
        alert("Please select your city or enter sunlight hours.");
        return;
    }

    // Assumptions for Ethiopia
    const costPerKW = 65000; // ETB per kW (example market estimate)
    const electricityRate = 3.2; // ETB per kWh average commercial rate

    const monthlyUsageKwh = bill / electricityRate;
    const dailyUsage = monthlyUsageKwh / 30;

    const systemSize = dailyUsage / (sun * 0.8);

    const installationCost = systemSize * costPerKW;
    const yearlySavings = bill * 12;
    const roi = installationCost / yearlySavings;

    document.getElementById("systemSize").innerText =
        systemSize.toFixed(2) + " kW";

    document.getElementById("installCost").innerText =
        installationCost.toFixed(0) + " ETB";

    document.getElementById("annualSavings").innerText =
        yearlySavings.toFixed(0) + " ETB";

    document.getElementById("roiYears").innerText =
        roi.toFixed(1) + " Years";
}
// INSTALL COUNTER ANIMATION
let count = 0;
const target = 247; // realistic installation number

const counterElement = document.getElementById("installCounter");

function animateCounter() {
    if (count < target) {
        count += 3;
        counterElement.innerText = count;
        setTimeout(animateCounter, 20);
    } else {
        counterElement.innerText = target;
    }
}

animateCounter();


// PACKAGE SELECTION & FINANCING
function selectPackage(price) {

    const down = price * 0.30;
    const remaining = price - down;
    const monthly = remaining / 24;

    document.getElementById("downPayment").innerText =
        down.toFixed(0) + " ETB";

    document.getElementById("monthlyPayment").innerText =
        monthly.toFixed(0) + " ETB / month";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
