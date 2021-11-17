(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  document.querySelectorAll('.mobile-menu__link').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      mobileMenu.classList.remove('is-open');
      bodyScrollLock.enableBodyScroll(document.body);
      setTimeout(() => {
        document.querySelector('#' + event.target.href.split('#')[1]).scrollIntoView({block: "center", behavior: "smooth"})
      }, 250);
    });
  });

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-buy-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.openModalBtns.forEach(item => {
    item.addEventListener('click', event => {
      toggleModal();
    });
  });

  refs.closeModalBtns.forEach(item => {
    item.addEventListener('click', event => {
      toggleModal();
    });
  });

  function toggleModal() {
    mobileMenu.classList.remove('is-open');
    bodyScrollLock.enableBodyScroll(document.body);
    refs.modal.classList.toggle('is-hidden');
  }
})();