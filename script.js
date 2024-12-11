document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("displayed-image");
    const selector = document.getElementById("image-selector");
    const widthInput = document.getElementById("image-width");
    const heightInput = document.getElementById("image-height");
    const borderInput = document.getElementById("image-border");
    const altInput = document.getElementById("alt-text");
    const applyButton = document.getElementById("apply-changes");

    // Зміна зображення за вибором
    selector.addEventListener("change", () => {
        image.src = `images/${selector.value}`;
        image.alt = `Зображення ${selector.value}`;
    });

    // Застосування змін до параметрів
    applyButton.addEventListener("click", () => {
        const width = parseInt(widthInput.value, 10);
        const height = parseInt(heightInput.value, 10);
        const border = parseInt(borderInput.value, 10);
        const altText = altInput.value;

        if (!isNaN(width)) {
            image.style.width = `${width}px`;
        } else {
            image.style.width = "auto";
        }

        if (!isNaN(height)) {
            image.style.height = `${height}px`;
        } else {
            image.style.height = "auto";
        }

        if (!isNaN(border)) {
            image.style.borderWidth = `${border}px`;
            image.style.borderStyle = "solid";
            image.style.borderColor = "#000";
        } else {
            image.style.border = "none";
        }

        if (altText.trim() !== "") {
            image.alt = altText;
        }
    });
});