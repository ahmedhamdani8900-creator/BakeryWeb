document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".productCard");

    products.forEach(function(card) {

        let text = card.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            card.parentElement.style.display = "block";
        } else {
            card.parentElement.style.display = "none";
        }

    });

});
