// Accordions Function
const accordionItem = document.querySelectorAll('.accordion-item');

accordionItem.forEach((accordion) => {
   const chevron = accordion.querySelector('.chevron');
   chevron.addEventListener('click', () => {
      // Expand Selected Accordion
      // Closed Another Accordion
      accordion.classList.toggle('expand');
      accordionItem.forEach((item) => {
         if (item !== accordion) {
            item.classList.remove('expand');
         }
      });
   });
});
