document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Pop-up Functionality
    const popup = document.querySelector(".popup");
    const closePopup = document.querySelector(".close-popup");

    setTimeout(() => {
        popup.classList.add("show");
    }, 1000);

    closePopup.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    // Chart.js for Skills Visualization
    const ctx = document.getElementById("skillsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Cloud", "DevOps", "IaC", "AI", "Backend"],
            datasets: [{
                label: "Skill Level",
                data: [90, 85, 80, 75, 85],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0", "#9966ff"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
