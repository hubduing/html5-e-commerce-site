const slider = () => {
  let mainImg = document.querySelector('.main-img');
  let smallIng = document.getElementsByClassName('small-img');

  smallIng[0].onclick = function() {
    mainImg.src = smallIng[0].src;
  }
  smallIng[1].onclick = function() {
    mainImg.src = smallIng[1].src;
  }
  smallIng[2].onclick = function() {
    mainImg.src = smallIng[2].src;
  }
  smallIng[3].onclick = function() {
    mainImg.src = smallIng[3].src;
  }
};
slider();