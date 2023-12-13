document.addEventListener("DOMContentLoaded", function() {
    const foodButton = document.getElementById("foodButton");
    const drinkButton = document.getElementById("drinkButton");
    const foodContent = document.getElementById("foodContent");
    const drinkContent = document.getElementById("drinkContent");
    const content = document.getElementById("content");

    // Tampilkan konten makanan secara default
    showFoodContent();

    foodButton.addEventListener("click", function() {
        showFoodContent();
    });

    drinkButton.addEventListener("click", function() {
        showDrinkContent();
    });

    function showFoodContent() {
        content.style.transform = "translateX(0)";
        foodContent.style.display = "block";
        drinkContent.style.display = "none";
    }

    function showDrinkContent() {
        content.style.transform = "translateX(-0%)";
        foodContent.style.display = "none";
        drinkContent.style.display = "block";
    }
});
