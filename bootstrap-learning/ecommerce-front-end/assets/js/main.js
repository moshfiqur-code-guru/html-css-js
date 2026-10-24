$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 4,
        nav: true,
        dots: false
    });
});

const carts = [
    {
        productId: 1,
        productName: "Black Bag",
        price: 100,
        qty: 1,
        img: ''
    },
    {
        productId: 2,
        productName: "Black Bag",
        price: 300,
        qty: 2,
        img: ''
    }
];


