const dishes = document.querySelectorAll(".dish");
const drinks = document.querySelectorAll(".drink");
const desserts = document.querySelectorAll(".dessert");

const btn = document.querySelector("button");

dishes.forEach((dish) => {
  const checkDish = () => {
    dishes.forEach((dish) => {
      if (dish.classList.contains("active")) {
        dish.classList.toggle("active");
      }
    });
  };
  const dishSelect = () => {
    checkDish();
    dish.classList.toggle("active");
    btnEnabler();
  };
  dish.addEventListener("click", dishSelect);
});

drinks.forEach((drink) => {
  const checkDrink = () => {
    drinks.forEach((drink) => {
      if (drink.classList.contains("active")) {
        drink.classList.toggle("active");
      }
    });
  };
  const drinkSelect = () => {
    checkDrink();
    drink.classList.toggle("active");
    btnEnabler();
  };
  drink.addEventListener("click", drinkSelect);
});

desserts.forEach((dessert) => {
  const checkDessert = () => {
    desserts.forEach((dessert) => {
      if ( dessert.classList.contains("active") ) {
        dessert.classList.toggle("active");
      }
    });
  };
  const dessertSelect = () => {
    checkDessert();
    dessert.classList.toggle("active");
    btnEnabler();
  };
  dessert.addEventListener("click", dessertSelect);
});

const btnEnabler = () => {
    const isDishActive = document.querySelectorAll(".dish.active");
    const isDrinkActive = document.querySelectorAll(".drink.active");
    const isDessertActive = document.querySelectorAll(".dessert.active");

    let text = document.querySelector("button > span");

    if (isDishActive.length > 0 && isDrinkActive.length > 0 && isDessertActive.length > 0) {
        btn.disabled = false;
        btn.style.backgroundColor = "#32B72F";
        btn.style.paddingTop = "22px";
        btn.style.paddingBottom = "22px";
        btn.style.cursor = "pointer";
        text.innerHTML = "Fechar pedido"
    } else {
        btn.disabled = true;
    }
}
