document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');
  const h2 = document.querySelector('h2');
  h2.innerHTML = localStorage.getItem('value');// Set initial value from localStorage as when we were typing the text were  saved as the it loads it reads from top to bottom

  input.addEventListener('keypress', displays);

  // Without localStorage
  //  function displays() {
  //   h2.innerHTML = input.value;
  //   h2.style.color = 'red'

  // }

  // With localStorage

  function displays() {
    localStorage.setItem('value', input.value);
    //h2.innerHTML = localStorage.getItem('value');
    h2.innerHTML = input.value;
    }
});


// so use localStorage.removeItem('value'); to remove the value from localStorage
// so use localStorage.clear(); to remove all the values from localStorage