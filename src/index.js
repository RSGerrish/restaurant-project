import header from "./pages/header";
import footer from "./pages/footer";
import sinkingspring from "./pages/sinkingspring";
import './style.css';

//Find body element and give class of 'content'
const content = document.querySelector('body');
content.className = "content";

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

});

btnSpecials.addEventListener('click', function() {

});

btnGC.addEventListener('click', function() {

});

btnLocs.addEventListener('click', function() {

});

btnCareers.addEventListener('click', function() {

})

sinkingspring();
content.appendChild(footer());