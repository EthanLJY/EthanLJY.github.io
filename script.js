function toggleGovBanner() {
    const details = document.getElementById("gov-details");
    const button = document.querySelector(".gov-banner button");

    if (details.style.display === "block") {
        details.style.display = "none";
        button.textContent = "Here's how you know ▾";
    } else {
        details.style.display = "block";
        button.textContent = "Here's how you know ▴";
    }
}
