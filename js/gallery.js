function upDate(previewPic) {
    // Get the div where the image will be displayed
    let imageDiv = document.getElementById("image");

    // Set the background image of the div
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";

    // Update text with the alt description
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Get the div
    let imageDiv = document.getElementById("image");

    // Reset to original state
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}