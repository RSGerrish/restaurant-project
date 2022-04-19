import header from "./pages/header";
import footer from "./pages/footer";
import sinkingspring from "./pages/sinkingspring";
import clear from "./functions/clear"
import './style.css';
import menu from "./pages/menu";
import specials from "./pages/specials";

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
  //code
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

});

btnLocs.addEventListener('click', function() {

});

btnCareers.addEventListener('click', function() {

})

content.appendChild(contentContainer);
sinkingspring();
content.appendChild(footer());