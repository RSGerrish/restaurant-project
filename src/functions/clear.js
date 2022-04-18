const clear = function() {
  const contentContainer = document.querySelector('.content-container');

  contentContainer.style = "";

  while(contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
}

export default clear;