// Удалить CSS-класс square-transition
const square = document.querySelector('.scroll-animation');
square.classList.remove('animation');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('animation');
      return;
    }
    square.classList.remove('animation');
  });
});
observer.observe(document.querySelector('.section-about'));
