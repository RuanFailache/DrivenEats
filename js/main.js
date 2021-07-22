const dishes = document.querySelectorAll(".dish");
const drinks = document.querySelectorAll(".drink");
const desserts = document.querySelectorAll(".dessert");
const btn = document.querySelector("button");

dishes.forEach( dish => {
    const checkDish = () => {
        dishes.forEach( dish => {
            if (dish.classList.contains("active")) {
                dish.classList.toggle("active");
            }
        });
    } 
    const dishSelect = () => {
        checkDish();
        dish.classList.toggle("active");
    };
    dish.addEventListener("click", dishSelect);
});

drinks.forEach( drink => {
    const checkDrink = () => {
        drinks.forEach( drink => {
            if (drink.classList.contains("active")) {
                drink.classList.toggle("active");
            }
        });
    } 
    const drinkSelect = () => {
        checkDrink();
        drink.classList.toggle("active");
    };
    drink.addEventListener("click", drinkSelect);
});

desserts.forEach( dessert => {
    const checkDessert = () => {
        desserts.forEach( dessert => {
            if (dessert.classList.contains("active")) {
                dessert.classList.toggle("active");
            }
        });
    } 
    const dessertSelect = () => {
        checkDessert();
        dessert.classList.toggle("active");
    };
    dessert.addEventListener("click", dessertSelect);
});

