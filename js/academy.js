function toggleContent(card) {

    const details = card.querySelector(".academy-details");

    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
