document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');
  const h2 = document.querySelector('h2');

  input.addEventListener('keypress', displays);

  function displays() {
    h2.innerHTML = input.value;
    h2.style.color = 'red'

  }
});
