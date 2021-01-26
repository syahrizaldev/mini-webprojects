// Reviews Local Data
const reviews = [
   {
      id: 1,
      name: 'Steven Doe',
      jobs: 'Front-End Developer',
      img: '../img/avatar-1.jpg',
      text:
         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium tenetur distinctio assumenda amet doloremque nemo, sapiente tempora dolore repudiandae inventore?',
   },
   {
      id: 2,
      name: 'Anna Maria',
      jobs: 'UI Designer',
      img: '../img/avatar-2.jpg',
      text:
         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quisquam accusantium doloribus impedit aperiam. Debitis nulla neque optio corporis laboriosam.',
   },
   {
      id: 3,
      name: 'Daniel Smith',
      jobs: 'Web Developer',
      img: '../img/avatar-3.jpg',
      text:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat laboriosam aliquam neque dolor sint architecto. Rerum consectetur sit in.',
   },
   {
      id: 4,
      name: 'Andre Halminton',
      jobs: 'Software Enginier',
      img: '../img/avatar-4.jpg',
      text:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat est expedita adipisci quod facilis fuga vitae saepe voluptas dolorum.',
   },
   {
      id: 5,
      name: 'Edwin Davidson',
      jobs: 'Back-End Developer',
      img: '../img/avatar-5.jpg',
      text:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat est expedita adipisci quod facilis fuga vitae saepe voluptas dolorum.',
   },
   {
      id: 6,
      name: 'Allisa Johnson',
      jobs: 'UX Designer',
      img: '../img/avatar-6.jpg',
      text:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique veniam neque cupiditate nam voluptates consequuntur nesciunt incidunt error officiis.',
   },
];

// Select Object Data
const reviewAvatar = document.getElementById('avatar');
const reviewName = document.getElementById('name');
const reviewJobs = document.getElementById('jobs');
const reviewText = document.getElementById('text');

const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');
const buttonRandom = document.querySelector('.button-random');

// Display and Load Initial Data
let currentReview = 0;

window.addEventListener('DOMContentLoaded', () => {
   displayReview();
});

function displayReview() {
   const getData = reviews[currentReview];

   reviewAvatar.src = getData.img;
   reviewName.textContent = getData.name;
   reviewJobs.textContent = getData.jobs;
   reviewText.textContent = getData.text;
}

// Display Next Review
buttonNext.addEventListener('click', () => {
   currentReview++;
   if (currentReview > reviews.length - 1) {
      currentReview = 0;
   }

   displayReview();
});

// Display Prev Review
buttonPrev.addEventListener('click', () => {
   currentReview--;
   if (currentReview < 0) {
      currentReview = reviews.length - 1;
   }

   displayReview();
});

// Display Random Review
buttonRandom.addEventListener('click', () => {
   currentReview = Math.floor(Math.random() * reviews.length);

   displayReview();
});
