// Data for shoes
const shoes = [
    {
        name: "Lilac Blue Shoe",
        price: 50,
        availability: true,
        image: "lilacblue.jpg"
    },
    {
        name: "Green Black Shoe",
        price: 60,
        availability: true,
        image: "Greenblack.jpg"
    },
    {
        name: "Black Shoe",
        price: 140,
        availability: false,
        image: "black.jpg"
    },
    {
        name: "White Shoe",
        price: 80,
        availability: true,
        image: "white.jpg"
    }
];

// Function to create the shoe item elements
function createShoeItem(shoe) {
    const shoeItem = document.createElement("div");
    shoeItem.className = "shoeItem";

    const image = document.createElement("img");
    image.src = shoe.image;
    image.alt = shoe.name;
    shoeItem.appendChild(image);

    const infoContainer = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = shoe.name;
    infoContainer.appendChild(name);

    const price = document.createElement("p");
    price.textContent = "Price: $" + shoe.price;
    infoContainer.appendChild(price);

    const buyButton = document.createElement("button");
    buyButton.className = "buyButton";
    buyButton.textContent = "Buy";
    buyButton.addEventListener("click", function () {
        showShoeInfo(shoe);
    });
    infoContainer.appendChild(buyButton);

    shoeItem.appendChild(infoContainer);

    return shoeItem;
}

// Function to display shoe information
function showShoeInfo(shoe) {
    let availabilityMsg = shoe.availability ? "Available for purchase." : "Not currently available.";

    let info = "Shoe: " + shoe.name + "\n" +
        "Price: $" + shoe.price + "\n" +
        availabilityMsg;

    console.log(info);
    alert(info);
}

// Display shoe items
const shoesContainer = document.getElementById("shoesContainer");

shoes.forEach(function (shoe) {
    const shoeItem = createShoeItem(shoe);
    shoesContainer.appendChild(shoeItem);
});
