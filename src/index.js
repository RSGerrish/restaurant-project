import header from "./pages/header";
import footer from "./pages/footer";
import sinkingspring from "./pages/sinkingspring";
import menu from "./pages/menu";
import specials from "./pages/specials";
import giftcards from "./pages/giftcards";
import clear from "./functions/clear"
import './style.css';

//Find body element and give class of 'content'
const content = document.querySelector('body');
content.className = "full-site-container";
const contentContainer = document.createElement('div');
contentContainer.className = "content-container";

content.appendChild(header());

const btnOO = document.querySelector('#link-online-order');
const btnMenu = document.querySelector('#link-menu');
const btnSpecials = document.querySelector('#link-specials');
const btnGC = document.querySelector('#link-gc');
const btnLocs = document.querySelector('#link-locations');
const btnCareers = document.querySelector('#link-careers');

btnOO.addEventListener('click', function() {
  clear();
  sinkingspring();
});

btnMenu.addEventListener('click', function() {
  clear();
  menu();
});

btnSpecials.addEventListener('click', function() {
  clear();
  specials();
});

btnGC.addEventListener('click', function() {
  clear();
  giftcards();
});

btnLocs.addEventListener('click', function() {

});

btnCareers.addEventListener('click', function() {

})

content.appendChild(contentContainer);
sinkingspring();
content.appendChild(footer());