const application = function() {
  const contentContainer = document.querySelector('.content-container');

  const appContainer = document.createElement('div');
  appContainer.className = "app-container";
  contentContainer.appendChild(appContainer);

  const appTitle = document.createElement('div');
  appTitle.className = "app-title";
  appTitle.innerHTML = "Employment Application";
  const appSubTitle = document.createElement('div');
  appSubTitle.className = "app-subtitle";
  appSubTitle.innerHTML = "Let us know what employment opportunities you may be interested in";
  const appForm = document.createElement('form');
  appForm.action = "#";
  appForm.className = "app-form";
  appContainer.append(appTitle, appSubTitle, appForm);

  const divLabel1 = document.createElement('label');
  divLabel1.htmlFor = "app-name";
  divLabel1.innerHTML = "First & Last Name";
  divLabel1.className = "form-label";
  const divInput1 = document.createElement('input');
  divInput1.type = "text";
  divInput1.name = "app-name";
  divInput1.id = "app-name";
  divInput1.className = "form-text-input";

  const divLabel2 = document.createElement('label');
  divLabel2.htmlFor = "app-email";
  divLabel2.innerHTML = "Email";
  divLabel2.className = "form-label";
  const divInput2 = document.createElement('input');
  divInput2.type = "email";
  divInput2.name = "app-email";
  divInput2.id = "app-email";
  divInput2.className = "form-text-input";

  const divLabel3 = document.createElement('label');
  divLabel3.htmlFor = "app-phone";
  divLabel3.innerHTML = "Phone";
  divLabel3.className = "form-label";
  const divInput3 = document.createElement('input');
  divInput3.type = "text";
  divInput3.name = "app-phone";
  divInput3.id = "app-phone";
  divInput3.className = "form-text-input";

  const butSubmit = document.createElement('input');
  butSubmit.type = "button";
  butSubmit.value = "Submit";
  butSubmit.className = "but-submit";

  appForm.append(divLabel1, divInput1, divLabel2, divInput2, divLabel3, divInput3, butSubmit);
}

export default application;