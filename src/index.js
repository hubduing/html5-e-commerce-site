function f() {
  const bar = document.querySelector('.bar');
  const nav = document.querySelector('.navbar');
  const close = nav.querySelector('.close');

  if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    });
  };

  if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    })
  }

};
f();
