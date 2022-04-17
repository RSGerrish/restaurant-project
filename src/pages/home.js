const home = function() {
  const content = document.querySelector('body');
  content.classList.add('content');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add("header-container");

  const headerLogo = document.createElement('div');
  headerLogo.classList.add("header-logo");

  const navContainer = document.createElement('nav');
  navContainer.classList.add("nav-container");

  content.appendChild(headerContainer);
  headerContainer.append(headerLogo, navContainer);
}

export default home;