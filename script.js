const pages = document.querySelectorAll(".page");

pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
  
});

//const card = document.getElementById('card');

