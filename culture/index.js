let lastScrollTop = 0;
let footer = document.querySelector('.foot');

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide footer
    footer.classList.add('hide-foot');
  } else {
    // Scrolling up, show footer
    footer.classList.remove('hide-foot');
  }
  lastScrollTop = scrollTop;
});