import lsCali from "../img/ls-California-Cheeseburger-150x150.jpg";
import lsCheeseSlice from "../img/ls-Cheese-Slice-150x150.jpg";
import lsCheesesteak from "../img/ls-Cheesesteak-150x150.jpg";
import lsSalad from "../img/ls-Salad-Slice-150x150.jpg";
import lsStuffed from "../img/ls-Stuffed-Slice-150x150.jpg";
import mon2Pizza from "../img/mon-two-large-special-150x150.jpg";
import monUnlimited from "../img/mon-supreme-pizza-150x150.png";
import edTwoLarge from "../img/2-large-pizzas-150x150.jpg";
import tuePizza from "../img/Cheese-Neapolitan-Pizza-150x150.png";
import wedTwoLarge from "../img/wed-2-large-pizza-special-150x150.jpg";
import wedAYCE from "../img/wed-ayce-pizza-wings-150x150.jpg";
import thurStromboli from "../img/thur-stromboli-150x150.png";
import weTwoMed from "../img/we-2-medium-pizza-special-150x150.jpg";
import weTwoCheesesteak from "../img/we-2-cheesesteak-or-hoagie-special-150x150.jpg";
import weLargeWings from "../img/we-large-1-topping-10-wings-special-150x150.jpg";
import weThreeLarge from "../img/we-3-Pizzas-50-wings-1-150x150.jpg";

const specials = function() {
  const contentContainer = document.querySelector('.content-container');

  const specialsContainer = document.createElement('div');
  specialsContainer.className = "specials-container";
  contentContainer.appendChild(specialsContainer);

  //Lunch special containers
  const lunchSpecContainer = document.createElement('div');
  lunchSpecContainer.className = "lunch-spec-container";
  const lunchSpecTitle = document.createElement('h2');
  lunchSpecTitle.innerHTML = "Lunch Specials";
  const lunchSpecNotice = document.createElement('h3');
  lunchSpecNotice.innerHTML = "Lunch Specials Served Everyday 10AM - 2PM";
  const lunchSpecDiv = document.createElement('div');
  lunchSpecDiv.className = "spec-div";
  lunchSpecContainer.append(lunchSpecTitle, lunchSpecNotice, lunchSpecDiv);

  //Begin card creation
  const lunchSpecCard1 = document.createElement('div');
  lunchSpecCard1.className = "spec-card";
  const lunchSpecImg1 = document.createElement('img');
  lunchSpecImg1.src = lsCheeseSlice;
  const lunchSpecTitle1 = document.createElement('h4');
  lunchSpecTitle1.innerHTML = "2 Plain Slices & Fountain Soda";
  const lunchSpecDesc1 = document.createElement('h5');
  lunchSpecDesc1.innerHTML = "<em>Customize It!</em> Add any topping for additional charge";
  const lunchSpecPrice1 = document.createElement('h4');
  lunchSpecPrice1.innerHTML = "$5.50";
  lunchSpecCard1.append(lunchSpecImg1, lunchSpecTitle1, lunchSpecDesc1, lunchSpecPrice1);

  const lunchSpecCard2 = document.createElement('div');
  lunchSpecCard2.className = "spec-card";
  const lunchSpecImg2 = document.createElement('img');
  lunchSpecImg2.src = lsSalad;
  const lunchSpecTitle2 = document.createElement('h4');
  lunchSpecTitle2.innerHTML = "Small Salad, Fountain Soda & Your Choice of a Plain Slice or Garlic Roll";
  const lunchSpecDesc2 = document.createElement('h5');
  lunchSpecDesc2.innerHTML = "<em>Customize It!</em> Choice of Italian, Greek or Caesar Salad. Add Protein for Additional Charge";
  const lunchSpecPrice2 = document.createElement('h4');
  lunchSpecPrice2.innerHTML = "$7.50";
  lunchSpecCard2.append(lunchSpecImg2, lunchSpecTitle2, lunchSpecDesc2, lunchSpecPrice2);

  const lunchSpecCard3 = document.createElement('div');
  lunchSpecCard3.className = "spec-card";
  const lunchSpecImg3 = document.createElement('img');
  lunchSpecImg3.src = lsStuffed;
  const lunchSpecTitle3 = document.createElement('h4');
  lunchSpecTitle3.innerHTML = "Stuffed Slice & Fountain Soda";
  const lunchSpecDesc3 = document.createElement('h5');
  lunchSpecDesc3.innerHTML = "Your Choice of Any Stuffed Slice On Our Counter That Day with a Fountain Soda";
  const lunchSpecPrice3 = document.createElement('h4');
  lunchSpecPrice3.innerHTML = "$6.50";
  lunchSpecCard3.append(lunchSpecImg3, lunchSpecTitle3, lunchSpecDesc3, lunchSpecPrice3);

  const lunchSpecCard4 = document.createElement('div');
  lunchSpecCard4.className = "spec-card";
  const lunchSpecImg4 = document.createElement('img');
  lunchSpecImg4.src = lsCheesesteak;
  const lunchSpecTitle4 = document.createElement('h4');
  lunchSpecTitle4.innerHTML = "Small Cheesesteak, French Fries & Fountain Soda";
  const lunchSpecDesc4 = document.createElement('h5');
  lunchSpecDesc4.innerHTML = "Choose Any Small Cheesesteak or Chicken Cheesesteak. Comes with Order of French Fries or Chips & a Fountain Soda";
  const lunchSpecPrice4 = document.createElement('h4');
  lunchSpecPrice4.innerHTML = "$11.00";
  lunchSpecCard4.append(lunchSpecImg4, lunchSpecTitle4, lunchSpecDesc4, lunchSpecPrice4);

  const lunchSpecCard5 = document.createElement('div');
  lunchSpecCard5.className = "spec-card";
  const lunchSpecImg5 = document.createElement('img');
  lunchSpecImg5.src = lsCali;
  const lunchSpecTitle5 = document.createElement('h4');
  lunchSpecTitle5.innerHTML = "California Cheeseburger";
  const lunchSpecDesc5 = document.createElement('h5');
  lunchSpecDesc5.innerHTML = "California Cheeseburger, French Fries or Chips & Fountain Soda";
  const lunchSpecPrice5 = document.createElement('h4');
  lunchSpecPrice5.innerHTML = "$11.00";
  lunchSpecCard5.append(lunchSpecImg5, lunchSpecTitle5, lunchSpecDesc5, lunchSpecPrice5);

  lunchSpecDiv.append(lunchSpecCard1, lunchSpecCard2, lunchSpecCard3, lunchSpecCard4, lunchSpecCard5);

  //Monday special containers
  const monSpecContainer = document.createElement('div');
  monSpecContainer.className = "mon-spec-container";
  const monSpecTitle = document.createElement('h2');
  monSpecTitle.innerHTML = "Monday Specials";
  const monSpecDiv = document.createElement('div');
  monSpecDiv.className = "spec-div";
  monSpecContainer.append(monSpecTitle, monSpecDiv);

  //Begin card creation
  const monSpecCard1 = document.createElement('div');
  monSpecCard1.className = "spec-card";
  const monSpecImg1 = document.createElement('img');
  monSpecImg1.src = mon2Pizza;
  const monSpecTitle1 = document.createElement('h4');
  monSpecTitle1.innerHTML = "2 Large 1 Topping Pizzas";
  const monSpecDesc1 = document.createElement('h5');
  monSpecDesc1.innerHTML = "2 Large Neapolitan Pizzas with 1 Regular Topping Each";
  const monSpecPrice1 = document.createElement('h4');
  monSpecPrice1.innerHTML = "$24.99";
  monSpecCard1.append(monSpecImg1, monSpecTitle1, monSpecDesc1, monSpecPrice1);

  const monSpecCard2 = document.createElement('div');
  monSpecCard2.className = "spec-card";
  const monSpecImg2 = document.createElement('img');
  monSpecImg2.src = monUnlimited;
  const monSpecTitle2 = document.createElement('h4');
  monSpecTitle2.innerHTML = "Large Unlimited Topping Pizza";
  const monSpecDesc2 = document.createElement('h5');
  monSpecDesc2.innerHTML = "Includes Any Specialty Pizza";
  const monSpecPrice2 = document.createElement('h4');
  monSpecPrice2.innerHTML = "$17.99";
  monSpecCard2.append(monSpecImg2, monSpecTitle2, monSpecDesc2, monSpecPrice2);

  const monSpecCard3 = document.createElement('div');
  monSpecCard3.className = "spec-card";
  const monSpecImg3 = document.createElement('img');
  monSpecImg3.src = edTwoLarge;
  const monSpecTitle3 = document.createElement('h4');
  monSpecTitle3.innerHTML = "2 Large Cheese Pizzas, 20 Wings & 2 Liter";
  const monSpecDesc3 = document.createElement('h5');
  monSpecDesc3.innerHTML = "Available Every Day";
  const monSpecPrice3 = document.createElement('h4');
  monSpecPrice3.innerHTML = "$45.99";
  monSpecCard3.append(monSpecImg3, monSpecTitle3, monSpecDesc3, monSpecPrice3);

  monSpecDiv.append(monSpecCard1, monSpecCard2, monSpecCard3);

  //Tuesday special containers
  const tueSpecContainer = document.createElement('div');
  tueSpecContainer.className = "tue-spec-container";
  const tueSpecTitle = document.createElement('h2');
  tueSpecTitle.innerHTML = "Tuesday Specials";
  const tueSpecDiv = document.createElement('div');
  tueSpecDiv.className = "spec-div";
  tueSpecContainer.append(tueSpecTitle, tueSpecDiv);

  //Begin card creation
  const tueSpecCard1 = document.createElement('div');
  tueSpecCard1.className = "spec-card";
  const tueSpecImg1 = document.createElement('img');
  tueSpecImg1.src = tuePizza;
  const tueSpecTitle1 = document.createElement('h4');
  tueSpecTitle1.innerHTML = "Large Cheese Pizza";
  const tueSpecDesc1 = document.createElement('h5');
  tueSpecDesc1.innerHTML = "No Limit and Add Toppings for Additional Charge";
  const tueSpecPrice1 = document.createElement('h4');
  tueSpecPrice1.innerHTML = "$9.99";
  tueSpecCard1.append(tueSpecImg1, tueSpecTitle1, tueSpecDesc1, tueSpecPrice1);

  const tueSpecCard2 = document.createElement('div');
  tueSpecCard2.className = "spec-card";
  const tueSpecImg2 = document.createElement('img');
  tueSpecImg2.src = edTwoLarge;
  const tueSpecTitle2 = document.createElement('h4');
  tueSpecTitle2.innerHTML = "2 Large Cheese Pizzas, 20 Wings & 2 Liter";
  const tueSpecDesc2 = document.createElement('h5');
  tueSpecDesc2.innerHTML = "Available Every Day";
  const tueSpecPrice2 = document.createElement('h4');
  tueSpecPrice2.innerHTML = "$45.99";
  tueSpecCard2.append(tueSpecImg2, tueSpecTitle2, tueSpecDesc2, tueSpecPrice2);

  tueSpecDiv.append(tueSpecCard1, tueSpecCard2);

  //Wednesday special containers
  const wedSpecContainer = document.createElement('div');
  wedSpecContainer.className = "wed-spec-container";
  const wedSpecTitle = document.createElement('h2');
  wedSpecTitle.innerHTML = "Wednesday Specials";
  const wedSpecDiv = document.createElement('div');
  wedSpecDiv.className = "spec-div";
  wedSpecContainer.append(wedSpecTitle, wedSpecDiv);

  //Begin card creation
  const wedSpecCard1 = document.createElement('div');
  wedSpecCard1.className = "spec-card";
  const wedSpecImg1 = document.createElement('img');
  wedSpecImg1.src = wedTwoLarge;
  const wedSpecTitle1 = document.createElement('h4');
  wedSpecTitle1.innerHTML = "2 Large 1 Topping Pizzas";
  const wedSpecDesc1 = document.createElement('h5');
  wedSpecDesc1.innerHTML = "2 Large Neapolitan Pizzas with 1 Regular Topping Each";
  const wedSpecPrice1 = document.createElement('h4');
  wedSpecPrice1.innerHTML = "$24.99";
  wedSpecCard1.append(wedSpecImg1, wedSpecTitle1, wedSpecDesc1, wedSpecPrice1);

  const wedSpecCard2 = document.createElement('div');
  wedSpecCard2.className = "spec-card";
  const wedSpecImg2 = document.createElement('img');
  wedSpecImg2.src = monUnlimited;
  const wedSpecTitle2 = document.createElement('h4');
  wedSpecTitle2.innerHTML = "Large Unlimited Topping Pizza";
  const wedSpecDesc2 = document.createElement('h5');
  wedSpecDesc2.innerHTML = "Any and All Toppings! Create Your Own Pizza! (Includes Any Specialty Pizza)";
  const wedSpecPrice2 = document.createElement('h4');
  wedSpecPrice2.innerHTML = "$17.99";
  wedSpecCard2.append(wedSpecImg2, wedSpecTitle2, wedSpecDesc2, wedSpecPrice2);

  const wedSpecCard3 = document.createElement('div');
  wedSpecCard3.className = "spec-card";
  const wedSpecImg3 = document.createElement('img');
  wedSpecImg3.src = wedAYCE;
  const wedSpecTitle3 = document.createElement('h4');
  wedSpecTitle3.innerHTML = "All You Can Eat Pizza & Wings With a Large Fountain Soda";
  const wedSpecDesc3 = document.createElement('h5');
  wedSpecDesc3.innerHTML = "Come get <strong>STUFFED</strong> with all your friends! Plain Slices & Any Flavor Wing! Every Wednesday From 5PM-8PM!";
  const wedSpecPrice3 = document.createElement('h4');
  wedSpecPrice3.innerHTML = "$24.99";
  wedSpecCard3.append(wedSpecImg3, wedSpecTitle3, wedSpecDesc3, wedSpecPrice3);

  const wedSpecCard4 = document.createElement('div');
  wedSpecCard4.className = "spec-card";
  const wedSpecImg4 = document.createElement('img');
  wedSpecImg4.src = edTwoLarge;
  const wedSpecTitle4 = document.createElement('h4');
  wedSpecTitle4.innerHTML = "2 Large Cheese Pizzas, 20 Wings & 2 Liter";
  const wedSpecDesc4 = document.createElement('h5');
  wedSpecDesc4.innerHTML = "Available Every Day";
  const wedSpecPrice4 = document.createElement('h4');
  wedSpecPrice4.innerHTML = "$45.99";
  wedSpecCard4.append(wedSpecImg4, wedSpecTitle4, wedSpecDesc4, wedSpecPrice4);

  wedSpecDiv.append(wedSpecCard1, wedSpecCard2, wedSpecCard3, wedSpecCard4);

  //Thursday special containers
  const thurSpecContainer = document.createElement('div');
  thurSpecContainer.className = "thur-spec-container";
  const thurSpecTitle = document.createElement('h2');
  thurSpecTitle.innerHTML = "Thursday Specials";
  const thurSpecDiv = document.createElement('div');
  thurSpecDiv.className = "spec-div";
  thurSpecContainer.append(thurSpecTitle, thurSpecDiv);

  //Begin card creation
  const thurSpecCard1 = document.createElement('div');
  thurSpecCard1.className = "spec-card";
  const thurSpecImg1 = document.createElement('img');
  thurSpecImg1.src = thurStromboli;
  const thurSpecTitle1 = document.createElement('h4');
  thurSpecTitle1.innerHTML = "$2 OFF Any Family Size Stromboli or Calzone";
  const thurSpecDesc1 = document.createElement('h5');
  thurSpecDesc1.innerHTML = "";
  const thurSpecPrice1 = document.createElement('h4');
  thurSpecPrice1.innerHTML = "$2 OFF Menu Price";
  thurSpecCard1.append(thurSpecImg1, thurSpecTitle1, thurSpecDesc1, thurSpecPrice1);

  const thurSpecCard2 = document.createElement('div');
  thurSpecCard2.className = "spec-card";
  const thurSpecImg2 = document.createElement('img');
  thurSpecImg2.src = edTwoLarge;
  const thurSpecTitle2 = document.createElement('h4');
  thurSpecTitle2.innerHTML = "2 Large Cheese Pizzas, 20 Wings & 2 Liter";
  const thurSpecDesc2 = document.createElement('h5');
  thurSpecDesc2.innerHTML = "Available Every Day";
  const thurSpecPrice2 = document.createElement('h4');
  thurSpecPrice2.innerHTML = "$45.99";
  thurSpecCard2.append(thurSpecImg2, thurSpecTitle2, thurSpecDesc2, thurSpecPrice2);

  thurSpecDiv.append(thurSpecCard1, thurSpecCard2);

  //Weekend special containers
  const weSpecContainer = document.createElement('div');
  weSpecContainer.className = "we-spec-container";
  const weSpecTitle = document.createElement('h2');
  weSpecTitle.innerHTML = "Weekend Specials";
  const weSpecDiv = document.createElement('div');
  weSpecDiv.className = "spec-div";
  weSpecContainer.append(weSpecTitle, weSpecDiv);

  //Begin card creation
  const weSpecCard1 = document.createElement('div');
  weSpecCard1.className = "spec-card";
  const weSpecImg1 = document.createElement('img');
  weSpecImg1.src = weTwoMed;
  const weSpecTitle1 = document.createElement('h4');
  weSpecTitle1.innerHTML = "2 Medium Cheese Pizzas";
  const weSpecDesc1 = document.createElement('h5');
  thurSpecDesc1.innerHTML = "";
  const weSpecPrice1 = document.createElement('h4');
  weSpecPrice1.innerHTML = "$17.99";
  weSpecCard1.append(weSpecImg1, weSpecTitle1, weSpecDesc1, weSpecPrice1);

  const weSpecCard2 = document.createElement('div');
  weSpecCard2.className = "spec-card";
  const weSpecImg2 = document.createElement('img');
  weSpecImg2.src = edTwoLarge;
  const weSpecTitle2 = document.createElement('h4');
  weSpecTitle2.innerHTML = "2 Large Cheese Pizzas, 20 Wings & 2 Liter";
  const weSpecDesc2 = document.createElement('h5');
  weSpecDesc2.innerHTML = "Available Every Day";
  const weSpecPrice2 = document.createElement('h4');
  weSpecPrice2.innerHTML = "$45.99";
  weSpecCard2.append(weSpecImg2, weSpecTitle2, weSpecDesc2, weSpecPrice2);

  const weSpecCard3 = document.createElement('div');
  weSpecCard3.className = "spec-card";
  const weSpecImg3 = document.createElement('img');
  weSpecImg3.src = weTwoCheesesteak;
  const weSpecTitle3 = document.createElement('h4');
  weSpecTitle3.innerHTML = "2 Large Cheesesteaks or Hoagies with Order of French Fries & 2 Liter";
  const weSpecDesc3 = document.createElement('h5');
  weSpecDesc3.innerHTML = "Pick Any 2 Cheesesteaks, Chicken Cheesesteaks, Hoagies or Grinders";
  const weSpecPrice3 = document.createElement('h4');
  weSpecPrice3.innerHTML = "$24.99";
  weSpecCard3.append(weSpecImg3, weSpecTitle3, weSpecDesc3, weSpecPrice3);

  const weSpecCard4 = document.createElement('div');
  weSpecCard4.className = "spec-card";
  const weSpecImg4 = document.createElement('img');
  weSpecImg4.src = weLargeWings;
  const weSpecTitle4 = document.createElement('h4');
  weSpecTitle4.innerHTML = "Large 1 Topping Pizza with 10 Jumbo Wings & 2 Liter";
  const weSpecDesc4 = document.createElement('h5');
  weSpecDesc4.innerHTML = "";
  const weSpecPrice4 = document.createElement('h4');
  weSpecPrice4.innerHTML = "$24.99";
  weSpecCard4.append(weSpecImg4, weSpecTitle4, weSpecDesc4, weSpecPrice4);

  const weSpecCard5 = document.createElement('div');
  weSpecCard5.className = "spec-card";
  const weSpecImg5 = document.createElement('img');
  weSpecImg5.src = weThreeLarge;
  const weSpecTitle5 = document.createElement('h4');
  weSpecTitle5.innerHTML = "3 Large Cheese Pizzas, 50 Jumbo Wings & (2) 2 Liters";
  const weSpecDesc5 = document.createElement('h5');
  weSpecDesc5.innerHTML = "";
  const weSpecPrice5 = document.createElement('h4');
  weSpecPrice5.innerHTML = "$85.99";
  weSpecCard5.append(weSpecImg5, weSpecTitle5, weSpecDesc5, weSpecPrice5);

  weSpecDiv.append(weSpecCard1, weSpecCard2, weSpecCard3, weSpecCard4, weSpecCard5);

  specialsContainer.append(lunchSpecContainer, monSpecContainer, tueSpecContainer, wedSpecContainer, thurSpecContainer, weSpecContainer);

}

export default specials;