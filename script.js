/* =========================================
   FASHIONFLIP JAVASCRIPT
   ========================================= */


function rentItem(item) {

    alert(
        "Great choice! 🛍️\n\n" +
        item +
        " has been selected for rental."
    );

}


function buyItem(item) {

    alert(
        "Great choice! 🛍️\n\n" +
        item +
        " has been selected for purchase."
    );

}


function addToCart(item) {

    alert(
        "Added to your FashionFlip cart! 🛒\n\n" +
        item
    );

}


function submitListing(event) {

    event.preventDefault();

    const productName =
        document.getElementById("productName").value;

    alert(
        "Your listing has been submitted! 🎉\n\n" +
        productName +
        " will be reviewed before appearing on FashionFlip."
    );

}


function recommendOutfit() {

    const occasion =
        document.getElementById("occasion").value;

    const style =
        document.getElementById("styleChoice").value;

    let recommendation = "";


    if (occasion === "Wedding") {

        recommendation =
            "Try an elegant lehenga or saree with statement jewellery.";

    }

    else if (occasion === "Party") {

        recommendation =
            "Try a stylish party dress or contemporary outfit.";

    }

    else if (occasion === "Festival") {

        recommendation =
            "Try a colorful saree or festive lehenga.";

    }

    else if (occasion === "College Event") {

        recommendation =
            "Try a trendy and comfortable outfit that fits your style.";

    }

    else {

        recommendation =
            "Try an elegant outfit with simple accessories.";

    }


    document.getElementById("ai-result").innerHTML =

        "<h3>✨ Your FashionFlip Recommendation</h3>" +

        "<p><strong>Occasion:</strong> " +
        occasion +
        "</p>" +

        "<p><strong>Style:</strong> " +
        style +
        "</p>" +

        "<p>" +
        recommendation +
        "</p>";

}