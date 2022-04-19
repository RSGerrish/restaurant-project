const locations = function() {
  const contentContainer = document.querySelector('.content-container');

  const mainContainer = document.createElement('main');
  contentContainer.appendChild(mainContainer);

  const locContainer = document.createElement('div');
  locContainer.className = "loc-container";
  mainContainer.appendChild(locContainer);

  const locCard1 = document.createElement('div');
  locCard1.className = "loc-card";
  locCard1.id = "loc-card-1";
  const locTitle1 = document.createElement('div');
  locTitle1.className = "loc-title";
  locTitle1.innerHTML = "Sinking Spring";
  const locPhone1 = document.createElement('div');
  locPhone1.className = "loc-phone";
  locPhone1.innerHTML = "<a href='tel:6106786300'>610.678.6300</a>";
  const locAddress1 = document.createElement('address');
  locAddress1.className = "loc-address";
  locAddress1.innerHTML = "2661 Shillington Road<br />Sinking Spring, PA 19608";
  const locButton1 = document.createElement('button');
  locButton1.className = "loc-button";
  locButton1.id = "loc-button-1";
  locButton1.innerHTML = "Order Online";
  locCard1.append(locTitle1, locPhone1, locAddress1, locButton1);

  const locCard2 = document.createElement('div');
  locCard2.className = "loc-card";
  locCard2.id = "loc-card-2";
  const locTitle2 = document.createElement('div');
  locTitle2.className = "loc-title";
  locTitle2.innerHTML = "Wyomissing";
  const locPhone2 = document.createElement('div');
  locPhone2.className = "loc-phone";
  locPhone2.innerHTML = "<a href='tel:6103749355'>610.374.9355</a>";
  const locAddress2 = document.createElement('address');
  locAddress2.className = "loc-address";
  locAddress2.innerHTML = "1814 State Hill Rd<br />Wyomissing, PA 19610";
  const locButton2 = document.createElement('button');
  locButton2.className = "loc-button";
  locButton2.id = "loc-button-2";
  locButton2.innerHTML = "Order Online";
  locCard2.append(locTitle2, locPhone2, locAddress2, locButton2);

  const clessCard = document.createElement('div');
  clessCard.className = "cless-card";
  const clessTitle = document.createElement('div');
  clessTitle.className = "cless-title";
  clessTitle.innerHTML = "Contactless Curbside Pick-up & Delivery. Order Online or Over the Phone";
  const dInstruct = document.createElement('ol');
  dInstruct.innerHTML = "Delivery Instructions Needed";
    const dInstructItem1 = document.createElement('li');
    dInstructItem1.innerHTML = "Please let us know how we should notify you upon arrival";
    const dInstructItem2 = document.createElement('li');
    dInstructItem2.innerHTML = "Let us know where you want us to drop the food";
    const dInstructItem3 = document.createElement('li');
    dInstructItem3.innerHTML = "Will you be paying by phone or online?";
    dInstruct.append(dInstructItem1, dInstructItem2, dInstructItem3);
  const cInstruct = document.createElement('ol');
  cInstruct.innerHTML = "Curbside Pick-up Instructions Needed";
    const cInstructItem1 = document.createElement('li');
    cInstructItem1.innerHTML = "Let us know the make & color of your vehicle";
    const cInstructItem2 = document.createElement('li');
    cInstructItem2.innerHTML = "We'll let you know your order number";
    const cInstructItem3 = document.createElement('li');
    cInstructItem3.innerHTML = "Will you be paying by phone or online?"
    const cInstructItem4 = document.createElement('li');
    cInstructItem4.innerHTML = "Please call upon arrival with your ticket number";
    cInstruct.append(cInstructItem1, cInstructItem2, cInstructItem3, cInstructItem4);
  clessCard.append(clessTitle, dInstruct, cInstruct);
  
  locContainer.append(locCard1, locCard2, clessCard);
}

export default locations;