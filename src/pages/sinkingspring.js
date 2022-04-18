//import backgroundSinkingSpring from "../img/Sinking-Spring.jpg";

const sinkingspring = function() {
  //Identify main container of site
  const contentContainer = document.querySelector('.content-container');

  contentContainer.style.height = "58.5%";

  const mainContainer = document.createElement('div');
  mainContainer.className = "main-container";
  contentContainer.appendChild(mainContainer);

  const dimContainer = document.createElement('div');
  dimContainer.className = "dim-container";
  dimContainer.id = "dim-container";
  mainContainer.appendChild(dimContainer);

  const dimmerContainer = document.createElement('div');
  dimmerContainer.className = "dim-container";
  dimmerContainer.id = "dimmer-container";
  dimContainer.appendChild(dimmerContainer);

  const infoContainer = document.createElement('div');
  infoContainer.className = "info-container";
  dimmerContainer.appendChild(infoContainer);

  const nameTele = document.createElement('h1');
  nameTele.innerText = "SINKING SPRING - 610.678.6300";
  infoContainer.appendChild(nameTele);

  const addy = document.createElement('h4');
  addy.innerText = "2661 SHILLINGTON ROAD SINKING SPRING, PA 19608"
  infoContainer.appendChild(addy);

}

export default sinkingspring;