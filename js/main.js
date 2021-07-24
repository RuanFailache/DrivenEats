const btn = document.querySelector(".btn");
const checkWindow = document.querySelector(".check-window");

let dishName;
let drinkName;
let dessertName;

const btnEnabler = () => {
  const activeDish = document.querySelector(".dish.active");
  const activeDrink = document.querySelector(".drink.active");
  const activeDessert = document.querySelector(".dessert.active");

  if (activeDish !== null && activeDrink !== null && activeDessert !== null) {
    btn.classList.add("active");
  }
};

const chooseItem = (elemento, classe) => {
  const active = document.querySelector(classe + ".active");

  if (active !== null) {
    active.classList.remove("active");
  }
  elemento.classList.add("active");
  btnEnabler();
};

const orderItems = () => {
  const actDishName = document.querySelector(".dish.active .name").innerHTML;
  const actDishPrice = Number(
    document.querySelector(".dish.active .price").innerHTML.substr(3)
  );

  const actDrinkName = document.querySelector(".drink.active .name").innerHTML;
  const actDrinkPrice = Number(
    document.querySelector(".drink.active .price").innerHTML.substr(3)
  );

  const actDessertName = document.querySelector(
    ".dessert.active .name"
  ).innerHTML;
  const actDessertPrice = Number(
    document.querySelector(".dessert.active .price").innerHTML.substr(3)
  );

  const checkDishName = document.querySelector(".check-dish .name");
  const checkDishPrice = document.querySelector(".check-dish .price");

  const checkDrinkName = document.querySelector(".check-drink .name");
  const checkDrinkPrice = document.querySelector(".check-drink .price");

  const checkDessertName = document.querySelector(".check-dessert .name");
  const checkDessertPrice = document.querySelector(".check-dessert .price");

  const finalPrice = document.querySelector(".final-price");

  dishName = actDishName;
  drinkName = actDrinkName;
  dessertName = actDessertName;

  checkDishName.innerHTML = dishName;
  checkDishPrice.innerHTML = actDishPrice.toFixed(2);
  checkDrinkName.innerHTML = drinkName;
  checkDrinkPrice.innerHTML = actDrinkPrice.toFixed(2);
  checkDessertName.innerHTML = dessertName;
  checkDessertPrice.innerHTML = actDessertPrice.toFixed(2);

  finalPrice.innerHTML = Number(
    actDishPrice + actDrinkPrice + actDessertPrice
  ).toFixed(2);
};

const closeOrder = () => {
  orderItems();
  if (btn.classList.contains("active")) {
    checkWindow.classList.remove("hidden");
  }
};

const cancel = () => {
  checkWindow.classList.add("hidden");
};

const messageMaker = () => {
  let name = null;
  let address = null;

  while (name === null) {
    name = prompt("Qual o nome da pessoa que receberá o pedido?");
  }
  while (address === null) {
    address = prompt("Onde deverá ser entregue o pedido?");
  }

  const message = `Olá, gostaria de fazer o pedido\n\
                   - Prato: ${dishName}\n\
                   - Bebida: ${drinkName}\n\
                   - Sobremesa: ${dessertName}\n\
                   \n\
                   Nome: ${name}\n\
                   Endereço: ${address}`;

  return encodeURIComponent(message);
};

const confirm = () => {
  const message = messageMaker();
  window.open("https://wa.me/5591991535878?text=" + message);
};
