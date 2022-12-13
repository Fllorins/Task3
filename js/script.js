const heart = document.querySelector('.heart-img');
console.log(heart);
heart.addEventListener('click', function (e) {
  e.preventDefault();
  if (this.classList.contains('is-active')) {
    // this.classList.remove('is-active');
  } else {
    this.classList.add('is-active');
  }
});
