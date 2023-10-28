/* eslint-disable */
// projects array of objects
const projects = [
    {
      name: 'Doctor Appointment App',
      description:
        'Doctor Appointment app is a Full Stack Web application built using Ruby-on-Rails along with React and Redux for the front end. It allows users to signup and register themselves and sign-in using the credentials. It allows users to book an appointment with the doctor. Users can see their appointments in the my appointments page. This app also allows admins to add doctors and delete doctors. This app handles responsiveness for both the mobile and desktop users.',
      featuredImage: '/images/appointApp.jpg',
      technologies: ['RubyonRails', 'PostgreSQL', 'React', 'Redux', 'CSS', 'BootStrap'],
      linkToLiveVersion: 'https://doctor-app-u5x6.onrender.com/',
      linkToSource: 'https://github.com/baqar-abbas/appointment-app-back-end',
      items: [
        'CAPSTONE',
        '<img src="/images/dot.png" alt="bullet" />',
        'Full Stack Dev',
        '<img src="/images/dot.png" alt="bullet" />',
        '2023',
      ],
    },
    {
        name: 'Space Hub',
        description:
          'Space Traveler\'s Hub is a Desktop web app created using React and Redux which uses API as the back-end. This web app allows users to reserve rockets and join missions. Users can see the reserved rockets and missions joined details in the profile page.',
        featuredImage: '/images/spaceHub.jpg',
        technologies: ['React', 'Redux', 'CSS', 'JavaScript',],
        linkToLiveVersion: 'https://spacetravellerhubcapstone.netlify.app/',
        linkToSource: 'https://github.com/baqar-abbas/spacehub-capstone',
        items: [
          'CAPSTONE',
          '<img src="/images/dot.png" alt="bullet" />',
          'Full Stack Dev',
          '<img src="/images/dot.png" alt="bullet" />',
          '2023',
        ],
      },
      {
        name: 'Astronomy Picture',
        description:
          'Astronomy Picture of the Day uses APIs as backend to fetch images from base API (NASA API) and adds interactivity through involvement API to add likes, opening Popop Modal and add comments. User can add likes to the pcitures and user can open comment modal section and enter their comments in the comments section.',
        featuredImage: '/images/astronomyPicture.jpg',
        technologies: ['HTML', 'API/Webpack', 'CSS', 'JavaScript',],
        linkToLiveVersion: 'https://baqar-abbas.github.io/JavascriptCapstone/dist/',
        linkToSource: 'https://github.com/baqar-abbas/JavascriptCapstone',
        items: [
          'CAPSTONE',
          '<img src="/images/dot.png" alt="bullet" />',
          'Front End Dev',
          '<img src="/images/dot.png" alt="bullet" />',
          '2023',
        ],
      },
      {
        name: 'Bookstore',
        description:
          'Bookstore is a Desktop webapp created using React and Redux (for State Management) which uses API as the backend. This webapp allows users to add and retrieve books from the API and also allows users to delete and add new books to the API. This webapp is a desktop app try accesing through desktop or laptop machine as this app is not configured to handle mobile responsiveness. In future this app will be configured to handle mobile responsiveness.',
        featuredImage: '/images/bookStore.jpg',
        technologies: ['React', 'Redux', 'CSS', 'JavaScript',],
        linkToLiveVersion: 'https://bookstoreactbaqar.netlify.app/',
        linkToSource: 'https://github.com/baqar-abbas/bookstore',
        items: [
          'CAPSTONE',
          '<img src="/images/dot.png" alt="bullet" />',
          'Front End Dev',
          '<img src="/images/dot.png" alt="bullet" />',
          '2023',
        ],
      },
      {
        name: 'Web Summit 2023',
        description:
          'This Project was built using HTML, CSS and JavaScript as a capstone Project. This Project was built as an individual Capstone Project. Both mobile and desktop versions of the website were created which handles different screen resolutions.',
        featuredImage: '/images/webSummit.jpg',
        technologies: ['HTML', 'CSS', 'JavaScript',],
        linkToLiveVersion: 'https://baqar-abbas.github.io/Conference-site-Capstone-Project-Module1/',
        linkToSource: 'https://github.com/baqar-abbas/Conference-site-Capstone-Project-Module1',
        items: [
          'CAPSTONE',
          '<img src="/images/dot.png" alt="bullet" />',
          'Front End Dev',
          '<img src="/images/dot.png" alt="bullet" />',
          '2023',
        ],
      },   
]

const classNames = [
  'work-one',
  'work-two',
  'work-three',
  'work-four',
  'work-five',
];

const desktopDiv = document.querySelector('#portfolio1');

let count = 0;

// Mapping through the Projects array and creating the DOM elements
projects.forEach((project) => {
  // Creating the DOM elements and appending them to the parent element
  const container = document.createElement('article');
  container.classList.add('work', classNames[count]);
  desktopDiv.appendChild(container);

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('imgdiv');
  container.appendChild(imageDiv);

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', project.featuredImage);
  cardImage.setAttribute('alt', project.name);
  cardImage.classList.add('tproject');
  imageDiv.appendChild(cardImage);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('tonicdesktop');
  container.appendChild(cardInfo);

  cardInfo.innerHTML = `<h1 class="popheading popheaddesktop">${project.name}</h1><br>
  <p>${project.description}</p>`;
});
