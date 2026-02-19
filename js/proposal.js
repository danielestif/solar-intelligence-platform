document.getElementById("proposalForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("confirmationMessage").innerHTML =
        "Thank you, " + name + "! 📩 The Investment Prospectus PDF has been sent to your email.";

    // Simulate download (for now)
    const link = document.createElement("a");
    link.href = "documents/Investment_Prospectus.pdf";
    link.download = "Investment_Prospectus.pdf";
    link.click();
});
