let chartInstance = null;

function calculateROI() {

    const investment = parseFloat(document.getElementById("investment").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const years = parseInt(document.getElementById("years").value);

    if (!investment || !rate || !years) {
        alert("Please fill all fields.");
        return;
    }

    let yearlyValues = [];
    let labels = [];

    let currentValue = investment;

    for (let i = 1; i <= years; i++) {
        currentValue = currentValue * (1 + rate);
        yearlyValues.push(currentValue);
        labels.push("Year " + i);
    }

    const finalValue = currentValue;
    const totalProfit = finalValue - investment;
    const roiPercent = (totalProfit / investment) * 100;

    document.getElementById("result").innerHTML = `
        <h2>Investment Summary</h2>
        <p><strong>Final Value:</strong> $${finalValue.toFixed(2)}</p>
        <p><strong>Total Profit:</strong> $${totalProfit.toFixed(2)}</p>
        <p><strong>Total ROI:</strong> ${roiPercent.toFixed(2)}%</p>
    `;

    const ctx = document.getElementById('growthChart').getContext('2d');

    if (chartInstance !== null) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Investment Growth ($)',
                data: yearlyValues,
                borderColor: '#00ffcc',
                backgroundColor: 'rgba(0, 255, 13, 0.2)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "white"
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: "white" }
                },
                y: {
                    ticks: { color: "white" }
                }
            }
        }
    });
}
