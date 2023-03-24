const menu = [
    {
        id: 11,
        title: "avocado",
        category: "breakfast",
        price: 16.50,
        img: "pic/breakfast/avocado.jpg",
        desc: "avocado and eggs"
    },
    {
        id: 12,
        title: "bacon",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/bacon.jpg",
        desc: "bacon and eggs."
    },
    {
        id: 13,
        title: "bacon",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/bacon1.jpg",
        desc: "bacon"

    }, 
    {
        id: 14,
        title: "bread",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/bread.jpg",
        desc: "bread eggs"
    },
    {
        id: 15,
        title: "fried",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/fried-egg.jpg",
        desc: "fried-eggs"
    },
    {
        id: 16,
        title: "pancake",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/pancake.jpg",
        desc: "pancake"
    },
    {
        id: 17,
        title: "waffle",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/waffle.jpg",
        desc: "waffle"
    }, 
    {
        id: 18,
        title: "egg",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/scrambled-eggs.jpg",
        desc: "scrambled-eggs"
    },
    {
        id: 19,
        title: "food",
        category: "breakfast",
        price: 16,
        img: "pic/breakfast/food.jpg",
        desc: "pancake"
    },

];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item){

        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text>
                        ${item.desc}
                    </p>
                </div>
            </article>`;
    });

    displayMenu = displayMenu.join("");

    console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;

})