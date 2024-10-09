// Select elements
const categoryEastern = document.querySelector('.eastern');
const categoryWestern = document.querySelector('.western');
const categoryBakery = document.querySelector('.bakery');
const categoryChocolate = document.querySelector('.chocolates');
const categoriesContainer = document.querySelector('.categories');
const categoryButtons = document.querySelectorAll('.category');
const backButton = document.querySelector('.back-button');
const bakeryPage = document.querySelector('.bakery-page');

function toPage(page) {
    window.location.href = `../pages/${page}.html`;
}

// back button

