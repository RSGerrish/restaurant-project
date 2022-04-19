import pizzaCheeseImg from "../img/Cheese-Neapolitan-Pizza-150x150.png";
import pizzaWhiteImg from "../img/white-pizza-150x150.jpg";
import pizzaBoardwalkImg from "../img/Boardwalk-Pizza-150x150.png";

const menu = function() {
  const contentContainer = document.querySelector('.content-container');

  contentContainer.style.height = "auto";

  const menuContainer = document.createElement('div');
  menuContainer.className = "menu-container";
  contentContainer.appendChild(menuContainer);


  const sectionTitle1 = document.createElement('div');
  sectionTitle1.innerHTML = "<h1>Pizza</h1>"
  sectionTitle1.className = "menu-title";

  const menuItem0 = document.createElement('div');
  menuItem0.innerHTML = "<h3>Neopolitan Slice";
  menuItem0.className = "menu-item";
  const menuDescription0 = document.createElement('div');
  menuDescription0.innerHTML = "<h5>Pizza by the slice</h5>";
  menuDescription0.className = "menu-description";
  const menuPrice0 = document.createElement('div');
  menuPrice0.innerHTML = "<h3>$2.25 Per Slice</h3>";
  menuPrice0.className = "menu-price"
  const br0 = document.createElement('br');

  menuContainer.append(sectionTitle1, menuItem0, menuDescription0, menuPrice0, br0);
  
  const sectionSubTitle1 = document.createElement('div');
  sectionSubTitle1.innerHTML = "<h2>Neopolitan Toppings</h2>";
  sectionSubTitle1.className = "menu-subtitle";
  const menuItem1 = document.createElement('div');
  menuItem1.innerHTML = "<h3>Meat</h3>";
  menuItem1.className = "menu-item";
  const menuDescription1 = document.createElement('div');
  menuDescription1.innerHTML = "<h5>Pepperoni, Ham, Meatballs, Anchovies, Sausage, Bacon</h5>";
  menuDescription1.className = "menu-description";
  const menuPrice1 = document.createElement('div');
  menuPrice1.innerHTML = "<h3>Small $2.00 | Medium $2.25 | Large $2.50</h3>";
  menuPrice1.className = "menu-price";
  const br1 = document.createElement('br');

  menuContainer.append(sectionSubTitle1, menuItem1, menuDescription1, menuPrice1, br1);

  const menuItem2 = document.createElement('div');
  menuItem2.innerHTML = "<h3>Veggies</h3>";
  menuItem2.className = "menu-item";
  const menuDescription2 = document.createElement('div');
  menuDescription2.innerHTML = "<h5>Mushroom, Red Onion, Sweet Peppers, Hot Banana Peppers, Pineapple, Extra Cheese, Garlic, Bruschetta Tomatoes, Green Bell Peppers, Spinach, Broccoli, Black Olives</h5>";
  menuDescription2.className = "menu-description";
  const menuPrice2 = document.createElement('div');
  menuPrice2.innerHTML = "<h3>Small $2.00 | Medium $2.25 | Large $2.50</h3>";
  menuPrice2.className = "menu-price";
  const br2 = document.createElement('br');

  menuContainer.append(menuItem2, menuDescription2, menuPrice2, br2);

 
  const menuItem3 = document.createElement('div');
  menuItem3.innerHTML = "<h3>Specialty Toppings</h3>";
  menuItem3.className = "menu-item";
  const menuDescription3 = document.createElement('div');
  menuDescription3.innerHTML = "<h5>Ground Beef, Steak, Chicken Steak, Grilled Chicken Brest, Breaded Eggplant</h5>";
  menuDescription3.className = "menu-description";
  const menuPrice3 = document.createElement('div');
  menuPrice3.innerHTML = "<h3>Small $3.00 | Medium $3.50 | Large $4.00</h3>";
  menuPrice3.className = "menu-price";
  const br3 = document.createElement('br');

  menuContainer.append(menuItem3, menuDescription3, menuPrice3, br3);
  
  const menuCardContainer1 = document.createElement('div');
  menuCardContainer1.className = "menu-card-container";
  const br4 = document.createElement('br');

  const menuCard1 = document.createElement('div');
  menuCard1.className = "menu-card";

  const menuItem4 = document.createElement('div');
  menuItem4.innerHTML = "<h3>Cheese Pizza</h3>";
  menuItem4.className = "menu-item";
  const menuItemImg4 = document.createElement('img');
  menuItemImg4.src = pizzaCheeseImg;
  menuItemImg4.className = "menu-card-image";
  const menuDescription4 = document.createElement('div');
  menuDescription4.innerHTML = "<h5>Thin round crust with Pizza Sauce and Mozzarella</h5>";
  menuDescription4.className = "menu-description";
  const menuPrice4 = document.createElement('div');
  menuPrice4.innerHTML = '<h3>Small (12") $9.00<br />Medium (14") $10.50<br />Large (16") $14.00</h3>';
  menuPrice4.className = "menu-price"; 

  menuCard1.append(menuItem4, menuItemImg4, menuDescription4, menuPrice4);

  const menuCard2 = document.createElement('div');
  menuCard2.className = "menu-card";

  const menuItem5 = document.createElement('div');
  menuItem5.innerHTML = "<h3>White Pizza</h3>";
  menuItem5.className = "menu-item";
  const menuItemImg5 = document.createElement('img');
  menuItemImg5.src = pizzaWhiteImg;
  menuItemImg5.className = "menu-card-image";
  const menuDescription5 = document.createElement('div');
  menuDescription5.innerHTML = "<h5>Thin round crust with fresh Garlic, Olive Oil and Mozzarella</h5>";
  menuDescription5.className = "menu-description";
  const menuPrice5 = document.createElement('div');
  menuPrice5.innerHTML = '<h3>Small (12") $9.00<br />Medium (14") $10.50<br />Large (16") $14.00</h3>';
  menuPrice5.className = "menu-price"; 

  menuCard2.append(menuItem5, menuItemImg5, menuDescription5, menuPrice5);

  const menuCard3 = document.createElement('div');
  menuCard3.className = "menu-card";

  const menuItem6 = document.createElement('div');
  menuItem6.innerHTML = "<h3>Boardwalk</h3>";
  menuItem6.className = "menu-item";
  const menuItemImg6 = document.createElement('img');
  menuItemImg6.src = pizzaBoardwalkImg;
  menuItemImg6.className = "menu-card-image";
  const menuDescription6 = document.createElement('div');
  menuDescription6.innerHTML = "<h5>Thin round crust with Homemade Sweet Sauce and Mozzarella</h5>";
  menuDescription6.className = "menu-description";
  const menuPrice6 = document.createElement('div');
  menuPrice6.innerHTML = '<h3>Small (12") $9.00<br />Medium (14") $10.50<br />Large (16") $14.00</h3>';
  menuPrice6.className = "menu-price"; 

  menuCard3.append(menuItem6, menuItemImg6, menuDescription6, menuPrice6);

  menuCardContainer1.append(menuCard1, menuCard2, menuCard3);
  menuContainer.append(menuCardContainer1, br4);
}

export default menu;