function dropdownElement() {
  const bodyElement = document.body;
  const btnToggleElement = document.querySelector('.mobile-nav-content');

  btnToggleElement.addEventListener('click', (ev) => {
    if (bodyElement.classList.contains('nav-isopen')) {
      bodyElement.classList.remove('nav-isopen');
    } else {
      bodyElement.classList.add('nav-isopen');
    }
  });
}

dropdownElement();