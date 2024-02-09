function showPrice(item) {
    var priceElement = document.getElementById(item + "-price");
    if (priceElement.style.display === "none") {
        priceElement.style.display = "block";
    } else {
        priceElement.style.display = "none";
    }
}

