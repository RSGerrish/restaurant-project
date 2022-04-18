import iconTwitter from "../img/icon-twitter.png";
import iconInsta from "../img/icon-instagram.png";
import iconYoutube from "../img/icon-youtube.png";

const footer = function() {
  //Create headerElement element, give class of 'header-container' and display nested within <body>
  const footerElement = document.createElement('footer');

  //Create 3 containers to hold address, socials and sitemap
  const addressContainer = document.createElement('div');
  addressContainer.id = "address-container";
  addressContainer.className = "footer-container"
  footerElement.appendChild(addressContainer);

  const socialContainer = document.createElement('div');
  socialContainer.id = "social-container";
  socialContainer.className = "footer-container";
  footerElement.appendChild(socialContainer);

  const sitemapContainer = document.createElement('div');
  sitemapContainer.id = "sitemap-container";
  sitemapContainer.className = "footer-container";
  footerElement.appendChild(sitemapContainer);

  //Build Address (contact) container
  const contactList = document.createElement('ul');
  contactList.innerHTML = "<h2>Contact Us!</h2>";
  addressContainer.appendChild(contactList);

  const contactPhone = document.createElement('li');
  contactPhone.innerHTML = "<h3>Phone: <a href='tel:610-678-6300'>610.678.6300</a></h3>";
  const contactEmail = document.createElement('li');
  contactEmail.innerHTML = "<h3>Email: <a href='mailto:mama@originalmamaspizza.com?'>mama@originalmamaspizza.com</a></h3>";
  const contactAddress = document.createElement('li');
  contactAddress.innerHTML = "<h3><address>2661 Shillington Rd<br>Sinking Spring, PA 19608</address></h3>";
  
  contactList.append(contactPhone, contactEmail, contactAddress);

  //Build Social container
  const socialList = document.createElement('ul');
  socialList.innerHTML = "<h2>Socials</h2>";
  socialContainer.appendChild(socialList);

  const socialTwitter = document.createElement('li');
  const twitterImage = document.createElement('img');
  twitterImage.src = iconTwitter;
  twitterImage.className = "social-icon";
  twitterImage.id = "twitter-icon";
  socialTwitter.appendChild(twitterImage);
  socialTwitter.innerHTML += "&nbsp&nbspTwitter";

  const socialInsta = document.createElement('li');
  const instaImage = document.createElement('img');
  instaImage.src = iconInsta;
  instaImage.className = "social-icon";
  instaImage.id = "insta-icon";
  socialInsta.appendChild(instaImage);
  socialInsta.innerHTML += "&nbsp&nbspInstagram";

  const socialYT = document.createElement('li');
  const ytImage = document.createElement('img');
  ytImage.src = iconYoutube;
  ytImage.className = "social-icon";
  ytImage.id = "youtube-icon";
  socialYT.appendChild(ytImage);
  socialYT.innerHTML += "&nbsp&nbspYoutube";
  socialList.append(socialTwitter, socialInsta, socialYT);

  //Build Sitemap
  const sitemapTitle = document.createElement('div');
  sitemapTitle.class = "sitemap-title";
  sitemapTitle.innerHTML = "<h2>Sitemap</h2>";
  sitemapContainer.appendChild(sitemapTitle);
  const sitemapList = document.createElement('ul');
  sitemapContainer.appendChild(sitemapList);

  const homeMap = document.createElement('li');
  homeMap.innerText = "Home";
  const ooMap = document.createElement('li');
  ooMap.innerText = "Order Online";
  const menuMap = document.createElement('li');
  menuMap.innerText = "Menu";
  const specialMap = document.createElement('li');
  specialMap.innerText = "Specials";
  const gcMap = document.createElement('li');
  gcMap.innerText = "Gift Cards";
  const locationMap = document.createElement('li');
  locationMap.innerText = "Locations";
  const careerMap = document.createElement('li');
  careerMap.innerText = "Careers";

  sitemapList.append(homeMap, ooMap, menuMap, specialMap, gcMap, locationMap, careerMap);

  return footerElement;
}

export default footer;