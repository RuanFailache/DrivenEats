const dishes = document.querySelectorAll(".dish");
const drinks = document.querySelectorAll(".drink");
const desserts = document.querySelectorAll(".dessert");

const btn = document.querySelector(".btn");
const confirm = document.querySelector(".confirm");
const cancel = document.querySelector(".cancel");
const checkOrder = document.querySelector(".check-window");

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

    let text = document.querySelector(".btn > span");

    if (isDishActive.length > 0 && isDrinkActive.length > 0 && isDessertActive.length > 0) {
      btn.classList.add("active");  
      btn.disabled = false;
      text.innerHTML = "Fechar pedido"
    } else {
        btn.disabled = true;
    }
}

const closeOrder = () => {
  btnEnabler();

  if ( !btn.disabled ) {

    const dishActiveName = document.querySelector(".dish.active > .name").innerHTML;
    const drinkActiveName = document.querySelector(".drink.active > .name").innerHTML;
    const dessertActiveName = document.querySelector(".dessert.active > .name").innerHTML;

    const dishActivePrice = Number(document.querySelector(".dish.active > .price").innerHTML.substr(3));
    const drinkActivePrice = Number(document.querySelector(".drink.active > .price").innerHTML.substr(3));
    const dessertActivePrice = Number(document.querySelector(".dessert.active > .price").innerHTML.substr(3));

    let dishName = document.querySelector(".check-dish > .name");
    let drinkName = document.querySelector(".check-drink > .name");
    let dessertName = document.querySelector(".check-dessert > .name");

    let dishPrice = document.querySelector(".dish-price");
    let drinkPrice = document.querySelector(".drink-price");
    let dessertPrice = document.querySelector(".dessert-price");

    let finalPrice = document.querySelector(".final-price");

    dishName.innerHTML = dishActiveName;
    drinkName.innerHTML = drinkActiveName;
    dessertName.innerHTML = dessertActiveName;

    dishPrice.innerHTML = dishActivePrice.toFixed(2);
    drinkPrice.innerHTML = drinkActivePrice.toFixed(2);
    dessertPrice.innerHTML = dessertActivePrice.toFixed(2);

    finalPrice.innerHTML = (dishActivePrice + drinkActivePrice + dessertActivePrice).toFixed(2);

    checkOrder.classList.remove("hidden");
  }
}

const cancelOrder = () => {
  checkOrder.classList.add("hidden");
}

btn.addEventListener("click", closeOrder)
cancel.addEventListener("click", cancelOrder);

const sendMessageToWhatsapp = () => {
  
  btnEnabler();

  const messageMaker = () => {

    const dishActiveName = document.querySelector(".dish.active > .name").innerHTML;
    const drinkActiveName = document.querySelector(".drink.active > .name").innerHTML;
    const dessertActiveName = document.querySelector(".dessert.active > .name").innerHTML;

    const dishActivePrice = Number(document.querySelector(".dish.active > .price").innerHTML.substr(3));
    const drinkActivePrice = Number(document.querySelector(".drink.active > .price").innerHTML.substr(3));
    const dessertActivePrice = Number(document.querySelector(".dessert.active > .price").innerHTML.substr(3));
    
    let totalPrice = dishActivePrice + drinkActivePrice + dessertActivePrice;
    totalPrice = totalPrice.toFixed(2);

    const name = prompt("Qual o nome da pessoa que receberá o pedido?");
    const address = prompt("Qual o endereço que será enviado o pedido?");

    const message = `\
      Olá, gostaria de fazer o pedido:\n\
      *- Prato:* ${dishActiveName}\n\
      *- Bebida:* ${drinkActiveName}\n\
      *- Sobremesa:* ${dessertActiveName}\n\
      *Total:* R$ ${totalPrice}\n\n\
      Nome: ${name}\n\
      Endereço: ${address}`;
    return encodeURIComponent(message);;
  }

  if ( !btn.disabled ) {
    const message = messageMaker();
    const phoneNumber = "5591991535878";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  }
}

confirm.addEventListener("click", sendMessageToWhatsapp);

