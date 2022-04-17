//import backgroundWoodImage from "../img/dkwood.jpg";
import mainLogo from "../img/logo-200.png";

const header = function() {
  //Create headerElement element, give class of 'header-container' and display nested within <body>
  const headerElement = document.createElement('header');

  const headerContainer = document.createElement('div');
  headerContainer.className = "header-container";
  headerElement.appendChild(headerContainer);

  //Create headerLogo element, assign class and nest within <header>
  const headerLogo = document.createElement('div');
  headerLogo.className = "header-logo";
  headerContainer.appendChild(headerLogo);
  
  const logo = document.createElement('img');
  logo.src = mainLogo;
  logo.className = "main-logo";
  headerLogo.appendChild(logo);

  //Create navContainer element, assign class and nest within <header>
  const navContainer = document.createElement('nav');
  navContainer.className = "nav-container";
  headerContainer.appendChild(navContainer);

  const linkOO = document.createElement('div');
  linkOO.id = "link-online-order";
  linkOO.className = "btn-nav";
  linkOO.innerText = "Order Online";
  const linkMenu = document.createElement('div');
  linkMenu.id = "link-menu";
  linkMenu.className = "btn-nav";
  linkMenu.innerText = "Menu";
  const linkSpecials = document.createElement('div');
  linkSpecials.id = "link-specials";
  linkSpecials.className = "btn-nav";
  linkSpecials.innerText = "Specials";
  const linkGC = document.createElement('div');
  linkGC.id = "link-gc";
  linkGC.className = "btn-nav";
  linkGC.innerText = "Gift Cards";
  const linkLocs = document.createElement('div');
  linkLocs.id = "link-locations";
  linkLocs.className = "btn-nav";
  linkLocs.innerText = "Locations";
  const linkCareers = document.createElement('div');
  linkCareers.id = "link-careers";
  linkCareers.className = "btn-nav";
  linkCareers.innerText = "Careers";

  navContainer.append(linkOO, linkMenu, linkSpecials, linkGC, linkLocs, linkCareers);

  return headerElement;
}

export default header;