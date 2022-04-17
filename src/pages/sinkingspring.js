//import backgroundSinkingSpring from "../img/Sinking-Spring.jpg";

const sinkingspring = function() {
  //Identify main container of site
  const content = document.querySelector('body');


  const homePage = document.createElement('div');
  homePage.classList = "home-page-container";
  //homePage.style.background = `url(${backgroundSinkingSpring})`;
  content.appendChild(homePage);

  const dimContainer = document.createElement('div');
  dimContainer.classList = "dim-container";
  dimContainer.id = "dim-container";
  homePage.appendChild(dimContainer);

  const dimmerContainer = document.createElement('div');
  dimmerContainer.classList = "dim-container";
  dimmerContainer.id = "dimmer-container";
  dimContainer.appendChild(dimmerContainer);

  const infoContainer = document.createElement('div');
  infoContainer.classList = "info-container";
  dimmerContainer.appendChild(infoContainer);

  const nameTele = document.createElement('h1');
  nameTele.innerText = "SINKING SPRING - 610.678.6300";
  infoContainer.appendChild(nameTele);

  const addy = document.createElement('h4');
  addy.innerText = "2661 SHILLINGTON ROAD SINKING SPRING, PA 19608"
  infoContainer.appendChild(addy);

}

export default sinkingspring;