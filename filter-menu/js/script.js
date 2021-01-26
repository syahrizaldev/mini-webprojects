// Menus List Data
const menuLists = [
   {
      id: 1,
      category: 'Maindish',
      title: 'Grilled Cod Fish with Lemon and Butter',
      image: '../img/cod.jpeg',
      detail:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga nesciunt, tenetur quis magnam deserunt.',
   },
   {
      id: 2,
      category: 'Appetizer',
      title: 'Spaghetti with Creamy Meat Sauce',
      image: '../img/spaghetti.jpg',
      detail:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt illum temporibus expedita ratione nobis!',
   },
   {
      id: 3,
      category: 'Dessert',
      title: 'Chocolate Simple Classic Brownis',
      image: '../img/brownis.jpeg',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum odit nobis eligendi molestiae at?',
   },
   {
      id: 4,
      category: 'Appetizer',
      title: 'Fried Rice with Poached Egg and Zucchini',
      image: '../img/friedrice.jpg',
      detail:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique dicta velit excepturi recusandae delectus?',
   },
   {
      id: 5,
      category: 'Maindish',
      title: 'Caprese Chicken Pesto Pasta Bake',
      image: '../img/chicken.jpeg',
      detail:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae explicabo modi illum, porro ex nemo?',
   },
   {
      id: 6,
      category: 'Dessert',
      title: 'Blueberry Cheesecake Egg Rolls',
      image: '../img/cheesecake.jpg',
      detail:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit impedit tempore, saepe nemo suscipit ullam.',
   },
   {
      id: 7,
      category: 'Appetizer',
      title: 'Garlic with Lemon Butter Mushrooms',
      image: '../img/mushrooms.jpg',
      detail:
         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sequi optio distinctio voluptate illum velit!',
   },
   {
      id: 8,
      category: 'Drink',
      title: 'Strawberry Ice Cream',
      image: '../img/icecream.jpg',
      detail:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis expedita, consequatur magni esse veniam?',
   },
   {
      id: 9,
      category: 'Appetizer',
      title: 'Grilled Shrimp Tacos with Sriracha Slaw',
      image: '../img/tacos.jpeg',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum ullam ea similique fugit doloremque.',
   },
   {
      id: 10,
      category: 'Maindish',
      title: 'Medium Rare Steak with Garlic Butter',
      image: '../img/steak.jpeg',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a soluta iste laboriosam, animi amet!',
   },
   {
      id: 11,
      category: 'Appetizer',
      title: 'Air Fryer Crispy Potatoes',
      image: '../img/potato.jpg',
      detail:
         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dignissimos similique ratione, debitis autem quia.',
   },
   {
      id: 12,
      category: 'Dessert',
      title: 'Fluffy American Honey Pancakes',
      image: '../img/pancake.jpeg',
      detail:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi rerum nostrum harum, eveniet consequuntur?',
   },
   {
      id: 13,
      category: 'Maindish',
      title: 'Chili Lime Salmon Tacos with Mango Salsa',
      image: '../img/salmon.jpeg',
      detail:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quam corporis earum. Nesciunt, recusandae.',
   },
   {
      id: 14,
      category: 'Drink',
      title: 'Lemon Drop Cocktail',
      image: '../img/cocktail.jpg',
      detail:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione sint similique, quasi optio aspernatur.',
   },
   {
      id: 15,
      category: 'Dessert',
      title: 'Layered Choco Vanilla Pudding',
      image: '../img/pudding.jpg',
      detail:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad voluptatibus, maiores illo unde dolores!',
   },
];

// Get DOM Data Element
const wrapper = document.querySelector('.wrapper');
const filter = document.querySelector('.filter');

// Display Load Menu and Filter List Data
window.addEventListener('DOMContentLoaded', () => {
   displayMenuList(menuLists);
   displayFilterBtn();
});

// Function Menus Lists
function displayMenuList(menuListItem) {
   let displayMenu = menuListItem.map((getData) => {
      return `<div class="article card">
						<div class="article-image">
							<img src="${getData.image}" class="responsive" loading="lazy" alt="${getData.title}">
						</div>
						<div class="article-inner">
							<h3><span class="category">${getData.category}</span></h3>
							<h2 class="title-medium truncate-sm">${getData.title}</h2>
							<p class="paragraph truncate-md">${getData.detail}</p>
						</div>
					</div>`;
   });

   displayMenu = displayMenu.join('');
   wrapper.innerHTML = displayMenu;
}

// Function Filter Buttons
function displayFilterBtn() {
   const categories = menuLists.reduce(
      function (value, getData) {
         if (!value.includes(getData.category)) {
            value.push(getData.category);
         }
         return value;
      },

      ['All'],
   );

   const categoryBtn = categories
      .map((category) => {
         return `<button type="button" class="filter-item" data-category=${category}>${category}</button>`;
      })
      .join('');

   filter.innerHTML = categoryBtn;
   const filterItem = filter.querySelectorAll('.filter-item');

   filterItem.forEach((item) => {
      item.addEventListener('click', (e) => {
         const category = e.currentTarget.dataset.category;
         const categoryItem = menuLists.filter((menuItem) => {
            if (menuItem.category === category) {
               return menuItem;
            }
         });

         if (category === 'All') {
            displayMenuList(menuLists);
         } else {
            displayMenuList(categoryItem);
         }
      });
   });
}
