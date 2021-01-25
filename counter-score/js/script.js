// Counter App Function
let counterValue = 0;
const values = document.querySelector('.values');
const buttons = document.querySelectorAll('.button');

buttons.forEach((counter) => {
   counter.addEventListener('click', (e) => {
      const styles = e.currentTarget.classList;
      // Change Values
      if (styles.contains('decrease')) {
         counterValue--;
      } else if (styles.contains('increase')) {
         counterValue++;
      } else {
         counterValue = 0;
      }

      // Change Colors
      if (counterValue < 0) {
         values.style.color = '#e53935';
      } else if (counterValue > 0) {
         values.style.color = '#43a047';
      } else {
         values.style.color = '#121212';
      }

      values.textContent = counterValue;
   });
});
