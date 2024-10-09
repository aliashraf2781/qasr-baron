
const chocolateAndIceCream = [
    {title:"الايس كريم",img:"images/الشيكولاتة والايس كريم/الايس كريم_45.webp",second_title:"iceCream"},
    {title:"تورت ايس كريم",img:"images/الشيكولاتة والايس كريم/iceTort_1_11zon.webp",second_title:"iceCreamTorte"},
    {title:"شوكلت",img:"images/الشيكولاتة والايس كريم/الشيكولاتة_46.webp",second_title:"chocolate"},
    {title:"مكسرات مملحة",img:"images/الشيكولاتة والايس كريم/مكسرات مملحة_47.webp",second_title:"saltedNuts"},
]

const iceCream = [
    { name: "جار ايس كريم", price: 50, englishName: "Jar Ice Cream" },
    { name: "بولة ايس كريم", price: 20, englishName: "Single Scoop Ice Cream" },
    { name: "بولة ايس كريم بسكويت", price: 25, englishName: "Single Scoop Ice Cream in Cone" },
    { name: "كيلو ايس كريم", price: 300, englishName: "kilo Ice Cream" }
];

const iceCreamTorte = [
    { name: "تورتة ايس كريم 8 سيزونز", price: 495, englishName: "Ice Cream Torte 8 Seasons" },
    { name: "تورتة ايس كريم 4 سيزونز", price: 495, englishName: "Ice Cream Torte 4 Seasons" },
    { name: "تورتة ايس كريم شوكلت", price: 495, englishName: "Chocolate Ice Cream Torte" },
    { name: "تورتة ايس كريم اوريو", price: 490, englishName: "Oreo Ice Cream Torte" },
    { name: "تورتة ايس كريم فريرو روشيه", price: 495, englishName: "Ferrero Rocher ice cream cake" },
    { name: "تورتة ايس كريم كيت كات", price: 495, englishName: "Kitkat ice cream cake" },
    { name: "تورتة ايس كريم اسنيكرز", price: 495, englishName: "Snickers ice cream tart" },
    { name: "تورتة ايس كريم بركان", price: 495, englishName: "Volcano ice cream cake" },
    { name: "تورتة ايس كريم كراميل", price: 495, englishName: "Caramel ice cream cake" },
    { name: "تورتة ايس كريم كوفي", price: 495, englishName: "Coffee ice cream tart" },
    { name: "تورتة ايس كريم دوبل فانيليا", price: 495, englishName: "Double vanilla ice cream cake" },
    { name: "تورتة ايس كريم لوتس", price: 490, englishName: "Lotus ice cream cake" },
    { name: "تورتة ايس كريم فستق", price: 490, englishName: "Pistachio ice cream tart" },
    { name: "تورتة ايس كريم مانجو", price: 490, englishName: "Mango ice cream cake" },
    { name: "تورتة ايس كريم زبادي توت", price: 465, englishName: "Blueberry yogurt ice cream tart" }
];

const chocolate = [
    { name: "شيكولاتة سادة", price: 400, englishName: "Plain Chocolate" },
    { name: "شيكولاتة كراميل", price: 400, englishName: "Caramel Chocolate" },
    { name: "شيكولاتة لوز", price: 400, englishName: "Almond Chocolate" },
    { name: "شيكولاتة بندق", price: 400, englishName: "Hazelnut Chocolate" },
    { name: "شيكولاتة اوريو", price: 400, englishName: "Oreo Chocolate" },
    { name: "شيكولاتة 6 بندقات", price: 400, englishName: "6 rifles Chocolate" },
    { name: "شيكولاتة كريمة حليب", price: 400, englishName: "Milk cream Chocolate" },
    { name: "شيكولاتة كريمة بندق", price: 400, englishName: "Hazelnut cream Chocolate" },
    { name: "شيكولاتة كريمة قهوة", price: 400, englishName: "Coffee Cream Chocolate" },
    { name: "شيكولاتة قلب مكسرات", price: 400, englishName: "Heart nuts Chocolate" },
    { name: "شيكولاتة سبيكة مكسرات", price: 400, englishName: "Nuts slug Chocolate" },
    { name: "شيكولاتة نوتيلا مكسرات", price: 400, englishName: "Nutella nuts Chocolate" },
];


const saltedNuts = [
    { name: "باكت مكسرات مملح ميكس", price: 210, englishName: "Mixed salted nuts packet" },
    { name: "باكت مكسرات مملح فستق", price: 220, englishName: "Salted Pistachio Nuts packet" },
    { name: "باكت مكسرات مملح كاجو", price: 180, englishName: "Salted Cashew Nuts packet" },
    { name: "باكت مكسرات مملح بيكان", price: 250, englishName: "Salted Pecan Nuts packet" }
];

const chocolatePage = document.querySelector('.chocolate-page');

// Function to display categories with lazy-loaded images
function displayCategory(items, page) {
    page.innerHTML = '';
    const foodMarkup = items.map(item => `
        <div class="card card-category rounded-top-4 col-md-4 col-sm-6 col-lg-3 border-0 bg-transparent ${item.second_title}">
            <div class="card-img-top">
                <img src="../${item.img}" alt="${item.title}" class="card-img lazy-load shadow-sm rounded-top-4 rounded-bottom-0 " >
            </div>
            <div class="card-body rounded-bottom-4 shadow-sm bg-white d-flex text-center justify-content-center flex-column border border-2 border-top-0">
                <h3 class="card-text fs-5">${item.title}</h3>
            </div>
        </div>
    `).join('');
    page.innerHTML = foodMarkup;
}

function displayItems(items, page) {
    const backButton = document.querySelector('.back-button');
    const homeButton = document.querySelector('.home-button');
    homeButton.classList.add('d-none');
    backButton.classList.remove('d-none');
    page.innerHTML=``;
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card-item' ,'col-md-6' ,'col-lg-4' );
        card.innerHTML = `
            <div class="bg-white p-3 shadow-sm rounded-4 d-flex align-items-start justify-content-between ">
                <p class="m-0 fw-lighter">${item.name} <br> ${item.englishName} </p>
                <p class="m-0 item-price fw-bolder">${item.price} EGP</p>
            </div>
        `;
        page.appendChild(card);
    });
}

function addClickListener(cardClass, item, page) {
    const card = document.querySelector(cardClass);
    if (card) {
        card.addEventListener('click', () => displayItems(item, page));
    }
}

displayCategory(chocolateAndIceCream, chocolatePage);
const chocolateItems = [
    { class: '.iceCream', item: iceCream },
    { class: '.iceCreamTorte', item: iceCreamTorte },
    { class: '.chocolate', item: chocolate },
    { class: '.saltedNuts', item: saltedNuts }
];
chocolateItems.forEach(({ class: cardClass, item }) => addClickListener(cardClass, item, chocolatePage));