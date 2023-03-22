const pages = document.querySelectorAll(".page");
let state = true;
let deg = 180;

pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
  page.addEventListener('click', function() {
    //this.classList.toggle('flipped');
    state = !state;
    let front = page.querySelector('.card-front');
    let back = page.querySelector('.card-back');

    front.style.transform = `rotateY(${deg * !!state}deg)`;
    back.style.transform = `rotateY(${deg * Number(!state)}deg)`;
  });
});

//const card = document.getElementById('card');

