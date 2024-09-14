const slide_content   = document.querySelector('#slide-content');
const signin_form     = document.querySelector('#signin-form');
const signin_btn      = document.querySelector('#signin-btn');
const darkmode_toggle = document.querySelector('#darkmode-toggle');
let slide_index = 0;

slide = () => {
  const slide_items = slide_content.querySelectorAll('img');
  slide_items.forEach(e => e.classList.remove('active'));
  slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1;
  slide_items[slide_index].classList.add('active');
}
setInterval(slide, 4500);

// animate input
document.querySelectorAll('.animate-input').forEach(e => {
  const input  = e.querySelector('input');
  const button = e.querySelector('button');

  input.addEventListener('keyup', () => {
    input.value.length > 0 ? e.classList.add('active') : e.classList.remove('active');
    signin_btn.disabled = !checkSigninInput();
  });

  // show password button
  if (button) {
    button.addEventListener('click', () => {
      const condition = input.type === 'text';
      input.type         = condition ? 'password' : 'text';
      button.textContent = condition ? 'Show'     : 'Hide';
    });
  }
});

checkSigninInput = () => {
  const inputs = signin_form.querySelectorAll('input');
  return Array.from(inputs).every(input => input.value.trim().length >= 6);
}

// darkmode toggle
darkmode_toggle.addEventListener('click', e => {
  e.preventDefault();
  const body = document.body;
  body.classList.toggle('dark');
  darkmode_toggle.textContent = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
});
