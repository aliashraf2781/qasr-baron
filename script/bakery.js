const bakeries = [
    {title:"الفطار",img:"images/المعجنات والمخبوزات/الفطار_37.webp",second_title:"breakfast"},
    {title:"ساليزونات",img:"images/المعجنات والمخبوزات/ساليزونات_43.webp",second_title:"salison"},
    {title:"الفطائر",img:"images/المعجنات والمخبوزات/الفطائر_38.webp",second_title:"pies"},
    {title:"المخبوزات",img:"images/المعجنات والمخبوزات/المخبوزات_39.webp",second_title:"bakery"},
    {title:"دوناتس وسينابون",img:"images/المعجنات والمخبوزات/دوناتس وسينابون_42.webp",second_title:"donutsAndCinnabon"},
    {title:"الكعك",img:"images/المعجنات والمخبوزات/كعك_44.webp",second_title:"Kahk"},
    {title:"البسكويت",img:"images/المعجنات والمخبوزات/بسكويت_40.webp",second_title:"biscuit"},
    {title:"بيتي فور و سابليه",img:"images/المعجنات والمخبوزات/بيتي فور وسابليه_41.webp",second_title:"petitfourAndSable"},
]

const breakfast = [
    { name: "باتيه جبنة", price: 55, englishName: "Cheese Pattie" },
    { name: "باتيه بسطرمة", price: 60, englishName: "Pastrami Pattie" },
    { name: "كرواسون سادة", price: 45, englishName: "Plain Croissant" },
    { name: "كرواسون رومي مدخن", price: 85, englishName: "Smoked Turkey Croissant" },
    { name: "بيتزا سلايس", price: 60, englishName: "Pizza slice" },
    { name: "بوكس بريك فاست", price: 95, englishName: "Breakfast Box" }
];

const salison = [
    { name: "بوكس ساليزون كبير", price: 375, englishName: "Large Salison Box" },
    { name: "بوكس ساليزون صغير", price: 190, englishName: "Small Salison Box" },
    { name: "بوكس ميني ساندوتش", price: 190, englishName: "Mini Sandwich Box" },
    { name: "بوكس مناقيش لبناني", price: 255, englishName: "Lebanese Manaqish Box" },
];

const pies = [
    { name: "فطير سادة", price: 155, englishName: "Plain Pie" },
    { name: "فطير رومي", price: 220, englishName: "Turkey Pie" },
    { name: "فطير كريمة مكسرات", price: 175, englishName: "Cream and Nuts Pie" },
    { name: "فطير بلح", price: 155, englishName: "Date Pie" },
    { name: "فطير لوتس", price: 220, englishName: "Lotus Pie" },
    { name: "فطير بالسكر", price: 110, englishName: "Sugar Pie" }
];

const bakery = [
    { name: "باتون ساليه 300 جرام", price: 55, englishName: "Salty Sticks 300g" },
    { name: "قراقيش سادة 300 جرام", price: 65, englishName: "Plain Qaraqeesh 300g" },
    { name: "قرص سادة 300 جرام", price: 55, englishName: "Plain Koras 300g" },
    { name: "قرص عجوه 300 جرام", price: 55, englishName: "Date Koras 300g" },
    { name: "تراسينا 300 جرام", price: 55, englishName: "Tracina 300g" },
    { name: "بالمية 300 جرام", price: 75, englishName: "Balmia  300g" },
    { name: "برازق 300 جرام", price: 60, englishName: "Barazek 300g" },
    { name: "محوجة 600 جرام", price: 130, englishName: "Mahwaja 600g" },
    { name: "كوكيز 300 جرام", price: 85, englishName: "Cookies 300g" },
];


const donutsAndCinnabon = [
    { name: "بوكس ميني دوناتس", price: 195, englishName: "Mini Donuts Box" },
    { name: "بوكس ميني بومبولوني", price: 245, englishName: "Mini Bomboloni Box" },
    { name: "بوكس ميني بومبولوني بالسكر", price: 165, englishName: "Mini Bomboloni with Sugar Box" },
    { name: "دوناتس", price: 60, englishName: "Donuts" },
    { name: "بومبولوني نوتيلا", price: 60, englishName: "Nutella Bomboloni" },
    { name: "بومبولوني كريمة", price: 60, englishName: "Cream Bomboloni" },
    { name: "سينابون", price: 60, englishName: "Cinnabon" },
    { name: "سينابون ميكس", price: 75, englishName: "Mixed Cinnabon" },
    { name: "دانش لوز", price: 70, englishName: "Almond Danish" },
    { name: "دانش ضفيرة", price: 70, englishName: "Braided Danish" },
];

const Kahk = [
    { name: "كعك سادة", price: 230, englishName: "Plain Ka'ak" },
    { name: "كعك ملبن", price: 200, englishName: "Malban Ka'ak" },
    { name: "كعك عجمية", price: 225, englishName: "Ajamia Ka'ak" },
    { name: "كعك عجمية عين جمل", price: 280, englishName: "Ajamia Ka'ak with Walnut" },
    { name: "كعك عين جمل", price: 300, englishName: "Walnut Ka'ak" },
    { name: "كعك مكسرات", price: 275, englishName: "Nuts Ka'ak" },
    { name: "كعك عجوه", price: 210, englishName: "Date Ka'ak" },
    { name: "غريبة لوز", price: 250, englishName: "Almond Ghorayeba" },
];

const biscuit = [
    { name: "بسكويت نشادر", price: 200, englishName: "Nashader Biscuit" },
    { name: "بسكويت برتقال", price: 200, englishName: "Orange Biscuit" },
    { name: "بسكويت قرفة", price: 200, englishName: "Cinnamon Biscuit" },
    { name: "بسكويت وايت شوكلت & فستق", price: 250, englishName: "White Chocolate & Pistachio Biscuit" },
]


const petitfourAndSable = [
    { name: "بيتي فور ابيض", price: 275, englishName: "White Petit Four" },
    { name: "بيتي فور شيكوالتة", price: 275, englishName: "Chocolate Petit Four" },
    { name: "بيتي فور صوصات", price: 275, englishName: "Sauces Petit Four" },
    { name: "كوكيز صوصات", price: 275, englishName: "Sauces Cookies" },
    { name: "سابليه", price: 330, englishName: "Sablé" },
    { name: "ميني تارت", price: 330, englishName: "Mini Tart" },
]


const bakeryPage = document.querySelector('.bakery-page');

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

    displayCategory(bakeries, bakeryPage);
const bakeryItems = [
    { class: '.breakfast', item: breakfast },
    { class: '.salison', item: salison },
    { class: '.pies', item: pies },
    { class: '.petitfourAndSable', item: petitfourAndSable },
    { class: '.biscuit', item: biscuit },
    { class: '.Kahk', item: Kahk },
    { class: '.donutsAndCinnabon', item: donutsAndCinnabon },
    { class: '.bakery', item: bakery }
];
bakeryItems.forEach(({ class: cardClass, item }) => addClickListener(cardClass, item, bakeryPage));
