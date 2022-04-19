const giftcards = function() {
  const contentContainer = document.querySelector('.content-container');

  const gcContainer = document.createElement('div');
  gcContainer.className = "gc-container";
  contentContainer.appendChild(gcContainer);

  const gcContainer2 = document.createElement('div');
  gcContainer2.className = "gc-container-2";
  gcContainer.appendChild(gcContainer2);

  const gcTitle = document.createElement('h1');
  gcTitle.innerHTML = "Check Your Gift Card Balance";
  const formContainer = document.createElement('form');
  formContainer.className = "gc-form";
  formContainer.action = "#";
  gcContainer2.append(gcTitle, formContainer);

  const formContainer2 = document.createElement('div');
  formContainer2.className = "gc-form-2";
  formContainer.appendChild(formContainer2);

  const gcLabel = document.createElement('label');
  gcLabel.htmlFor = "gc-number";
  gcLabel.innerHTML = "Please Enter Your Gift Card Number Below"
  const gcNumber = document.createElement('input');
  gcNumber.type = "text";
  gcNumber.id = "gc-number";
  gcNumber.name = "gc-number";
  gcNumber.pattern = "[0-9]{15}"
  gcNumber.title = "Gift card number should only contain numbers and be 15 digits long";
  const gcSubmit = document.createElement('button');
  gcSubmit.type = "submit";
  gcSubmit.innerHTML = "Submit";
  formContainer2.append(gcLabel, gcNumber, gcSubmit);

}

export default giftcards;