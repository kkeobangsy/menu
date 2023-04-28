const menu = [
    {
        id: 1,
        title: "fruit",
        category: "breakfast",
        price: 6.00,
        img: "pic/cherry.jpg",
        desc: "low carbs"
    },
    {
        id: 2,
        title: "coffee",
        category: "breakfast",
        price: 4.00,
        img: "pic/coffee-chocolate.jpg",
        desc: "delicious"
    },
    {
        id: 3,
        title: "yogurt",
        category: "dessert",
        price: 4.00,
        img: "pic/yogurt.jpg",
        desc: "milk and berries"
    },
    {
        id: 4,
        title: "ice-cream",
        category: "dessert",
        price: 3.00,
        img: "pic/ice-cream.jpg",
        desc: "cone"
    },
    {
        id: 5,
        title: "cake",
        category: "dessert",
        price: 25.00,
        img: "pic/chocolatecake.jpg",
        desc: "chocolate cake"
    },
    {
        id: 6, 
        title: "cake",
        category: "dessert",
        price: 5.00,
        img: "pic/chocolate-mousse.jpg",
        desc: "mousse"
    },   
    {
        id: 8,
        title: "pie",
        category: "pies",
        price: 15.00,
        img: "pic/pie.jpg",
        desc: "pie"
    },
    {
        id: 9,
        title: "pie",
        category: "pies",
        price: 6.00,
        img: "pic/strawberries.jpg",
        desc: "strawberries pie."
    },
    {
        id: 10,
        title: "fruit",
        category: "breakfast",
        price: 5.00,
        img: "pic/watermelon.jpg",
        desc: "watermelon"
    },
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
]
//get parent element.

const sectionCenter = document.querySelector(".section-center");
const filterBtns = [document.querySelector(".filter-btn")];
//loads items.

window.addEventListener("DOMContentLoaded", function () {
     displayMenuItems(menu);
     displayMenuButtons();
});

    //filter items

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item){
        const { img, title, price, desc, id} = item;
    //console.log(item);
    let search = menu;

    return `<article class="menu-item">
            <img src=${img} alt=${title} class="photo" />
            <div class="item-info">
                <header>
                    <h4>${title}</h4>
                    <h4 class="price">$${price}</h4>
                </header>
                <p class="item-text">
                    ${desc}
                    
                </p>
                <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-square-fill"></i>
                    <div id=${id} class="quantity">

                            ${search.item === undefined ? 0 : search.item}
                    </div>  
               <i onclick="increment(${id})" class="bi bi-plus-square-fill"></i>
                </div>
                <button type="button" onclick="addToCart(${id})">add Cart</button>
            </div> 

            </article>`;
    });

    displayMenu = displayMenu.join("");
    //console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;

}

function increment(id) {
     const quantity = document.getElementById(id);
     const text = quantity.textContent
     let number = Math.abs(text.trim());
    quantity.textContent = number+1


    console.log(number)
    console.log(number)
    
}

function decrement(id) {
    const quantity = document.getElementById(id);
    const text = quantity.textContent
    let number = Math.abs(text.trim());
    if(number === 0){
        return;
    }
    quantity.textContent = number-1;
    console.log(id);
}
function addToCart() {
    
    console.log("add to cart")
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    const categoryBtns = categories.map(function (category){
            return `<button type="button" class="filter-btn" data-id=${category}>
                ${category}
                </button>`;
        })
        .join("");

        const btnContainer = document.querySelector(".btn-container")
        btnContainer.innerHTML = categoryBtns;
        const filterBtns = btnContainer.querySelectorAll(".filter-btn");
        console.log(filterBtns);

        filterBtns.forEach(function (btn){
            console.log(btn,"btn");
                btn.addEventListener("click", function (e){
                    console.log(e.currentTarget.dataset.id);
                    const category = e.currentTarget.dataset.id;
                    const menuCategory = menu.filter(function (menuItem){ 
                        console.log(menuItem.category)
                     if (menuItem.category === category) {
                         return menuItem;
                     }
                });
                 if (category === "all") {
                     displayMenuItems(menu);
                 } else {
                     displayMenuItems(menuCategory);
                 }
                 console.log(menuCategory);
            });
          });
    
}

function addCart() {
            
}