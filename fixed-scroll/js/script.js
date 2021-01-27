// Responsive and Fixed Navbar Menu
const burgerMenu = document.getElementById('burger');
const navbarMenu = document.getElementById('navmenu');
const menuList = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
   burgerMenu.classList.toggle('active');

   const navbarMenuHeight = navbarMenu.getBoundingClientRect().height;
   const menuListHeight = menuList.getBoundingClientRect().height;

   if (navbarMenuHeight === 0) {
      navbarMenu.style.height = `${menuListHeight}px`;
   } else {
      navbarMenu.style.height = 0;
   }
});

// Fixed Navbar Menu on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
   const scrollHeight = window.pageYOffset;
   const navbarHeight = navbar.getBoundingClientRect().height;

   if (scrollHeight > navbarHeight) {
      navbar.classList.add('fixed');
   } else {
      navbar.classList.remove('fixed');
   }
});

// Show The Top Link Button
const topLink = document.querySelector('.toplink');

window.addEventListener('scroll', () => {
   const scrollHeight = window.pageYOffset;

   if (scrollHeight > 500) {
      topLink.classList.add('show');
   } else {
      topLink.classList.remove('show');
   }
});

// Smooth Scrolling Function
const smoothScroll = document.querySelectorAll('.scroll');

smoothScroll.forEach(function (link) {
   link.addEventListener('click', (e) => {
      e.preventDefault();

      // Navigate to Specific Link
      const id = e.currentTarget.getAttribute('href').slice(1);
      const element = document.getElementById(id);

      // Calculate the Link Height
      const navbarHeight = navbar.getBoundingClientRect().height;
      const navbarMenuHeight = navbarMenu.getBoundingClientRect().height;
      const navbarFixed = navbar.classList.contains('fixed');
      let position = element.offsetTop - navbarHeight;

      if (!navbarFixed) {
         position = position - navbarHeight;
      }

      if (navbarHeight > 100) {
         position = position + navbarMenuHeight;
      }

      window.scrollTo({
         left: 0,
         top: position,
      });

      navbarMenu.style.height = 0;
   });
});

// Get Dynamic Years on Attribution
const years = document.querySelector('.years');
years.innerHTML = new Date().getFullYear();
