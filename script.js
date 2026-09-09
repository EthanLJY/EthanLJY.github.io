alert(document.getElementById("gov-toggle"));
alert(document.getElementById("gov-details"));
const govToggle = document.getElementById("gov-toggle");
const govDetails = document.getElementById("gov-details");

govToggle.addEventListener("click", function () {
    govDetails.hidden = !govDetails.hidden;

    govToggle.textContent = govDetails.hidden
        ? "Here's how you know ▾"
        : "Here's how you know ▴";
});
