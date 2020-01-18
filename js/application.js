const btnToggleHeaderNav = document.querySelector('.btn--toggle-header-nav');

btnToggleHeaderNav.addEventListener('click', () => {
    document.body.classList.toggle('header-nav--open');
});

