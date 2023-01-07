const hearts = document.querySelector('.propertis__inner');
if (hearts) {
  const redHeart = hearts.querySelectorAll('.propertis-card');
  redHeart.forEach((heart) => {
    heart.addEventListener('click', (event) => {
      heart.querySelector('.icon').classList.toggle('icon-active');
    });
  });
}

/* tabs */
$(document).ready(function () {
  $('.tab').click(function (e) {
    e.preventDefault();

    $('.tabs-head .tab').removeClass('active');
    $('.tabs-content').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.tab:first').click();
});

/* radio */

const filter = document.querySelector('.tabs-body');

if (filter) {
  const items = filter.querySelectorAll('.block-filter');

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      item
        .querySelector('.block-filter__dropdown')
        .classList.toggle('_active-filter');
      item
        .querySelector('.block-filter__icon')
        .classList.toggle('_active-filter');

      if (event.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent =
          event.target.textContent;
      }
    });
  });
}
