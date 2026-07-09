document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            // Close all other items (accordion behavior)
            faqItems.forEach(function (otherItem) {
                otherItem.classList.remove("active");
            });

            // Open the clicked one if it wasn't already open
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});