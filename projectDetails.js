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

  cardInfo.innerHTML = `<h2 class="popheading popheaddesktop">${project.name}</h2>`;

  // <p>${project.description}</p>
  
  const skillInfo = document.createElement('ul');
  skillInfo.classList.add('skillinfo');
  cardInfo.appendChild(skillInfo);

  const skillNames = [
    'skill-one',
    'skill-two',
    'skill-three',
    'skill-four',
    'skill-five',
  ];

  let skillCount = 0;

  project.items.forEach((item) => {
    const skill = document.createElement('li');
    skill.classList.add(skillNames[skillCount]);
    skill.innerHTML = item;
    skillInfo.appendChild(skill);
    skillCount += 1;
  })

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('popp15', 'popp15desktop');
  cardDescription.innerHTML = `<br>${project.description}<br><br>`
  // cardDescription.innerText = project.description;
  cardInfo.appendChild(cardDescription);

  const techList = document.createElement('ul');
  techList.classList.add('techlist');
  cardInfo.appendChild(techList);

  project.technologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.classList.add('htcj');
    techItem.innerText = tech;
    techList.appendChild(techItem);
  })

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn');
  cardInfo.appendChild(btnDiv);

  const seeProject = document.createElement('a');
  seeProject.classList.add('btnlink');
  // seeProject.setAttribute('href', project.linkToLiveVersion);
  seeProject.href = "javascript:void(0)";
  // seeProject.setAttribute('target', '_blank');
  // seeProject.innerHTML = `<br>`;
  seeProject.innerText = 'See Project';
  btnDiv.appendChild(seeProject);

  count += 1;

});

const popupBackdroundDesktop = document.querySelector('.popupbackground');
const demonstrationDiv = document.getElementById('demonstration-desktop');
const seeProjectBtn = document.querySelectorAll('.btnlink');
const closeModal = document.querySelector('.crossmodal');
let scrollPosition = 0;

seeProjectBtn.forEach((btn,index) => {
console.log(index);
btn.addEventListener('click', (event) => {
popupBackdroundDesktop.style.display = 'block';

scrollPosition = window.scrollY;
document.body.classList.add('no-scroll');
document.body.style.top = -scrollPosition + 'px';
// demonstrationDiv.style.display = 'block';
demonstrationDiv.style.width = '79%';
demonstrationDiv.style.height = '90vh';

const popupDiv = document.createElement('div');
popupDiv.classList.add('popdiv');
demonstrationDiv.appendChild(popupDiv);

const heading = document.createElement('h2');
heading.classList.add('modalheading');
heading.innerText = projects[index].name;
popupDiv.appendChild(heading);

const skillInfo = document.createElement('ul');
  skillInfo.classList.add('skillinfo');
  popupDiv.appendChild(skillInfo);

  const skillNames = [
    'skill-one',
    'skill-two',
    'skill-three',
    'skill-four',
    'skill-five',
  ];

  let skillCount = 0;

  projects[index].items.forEach((item) => {
    const skill = document.createElement('li');
    skill.classList.add(skillNames[skillCount]);
    skill.innerHTML = item;
    skillInfo.appendChild(skill);
    skillCount += 1;
  })

  const projectImage = document.createElement('img');
  projectImage.setAttribute('src', projects[index].featuredImage);
  projectImage.setAttribute('alt', projects[index].name);
  projectImage.classList.add('projectimage');
  popupDiv.appendChild(projectImage);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('descriptiondiv');
  popupDiv.appendChild(descriptionDiv);

  const descriptionHeading = document.createElement('div');
  descriptionHeading.classList.add('descriptionheading');
  descriptionHeading.innerHTML = `<p class="paragrap">${projects[index].description}</p>`;
  descriptionDiv.appendChild(descriptionHeading);

  const techDiv = document.createElement('div');
  techDiv.classList.add('techdiv');
  descriptionDiv.appendChild(techDiv);


  const techLoopDiv = document.createElement('div');
  techLoopDiv.classList.add('techloopdiv');
  techDiv.appendChild(techLoopDiv);

  const techList = document.createElement('ul');
  techList.classList.add('techlist');
  techLoopDiv.appendChild(techList);

  projects[index].technologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.classList.add('htcj');
    techItem.innerText = tech;
    techList.appendChild(techItem);
  });

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btnPopup');
  techDiv.appendChild(btnDiv);

  const seeProject = document.createElement('a');
  seeProject.classList.add('btnlink','seeLiveBtn');
  seeProject.setAttribute('href', projects[index].linkToLiveVersion);
  seeProject.setAttribute('target', '_blank');
  // seeProject.innerText = 'See Live';
  seeProject.appendChild(document.createTextNode(' See Live'));
  const seeLiveLogo = document.createElement('img');
seeLiveLogo.classList.add('seeliveicon1');
seeLiveLogo.src = 'https://res.cloudinary.com/dapnjt4ah/image/upload/v1678270657/seeliveIcon_ymjy37.png'; // Replace with the actual path or URL to the GitHub logo
seeLiveLogo.alt = 'SeeLive';
seeProject.appendChild(seeLiveLogo);
  btnDiv.appendChild(seeProject);

  const seeSource = document.createElement('a');
  seeSource.classList.add('btnlink', 'btnMargin');
  seeSource.setAttribute('href', projects[index].linkToSource);
  seeSource.setAttribute('target', '_blank');
  seeSource.appendChild(document.createTextNode(' See Source'));
const githubLogo = document.createElement('img');
githubLogo.classList.add('gitbuttonicon1');
githubLogo.src = '/images/gitbutton.png';
githubLogo.alt = 'GitHub';
seeSource.appendChild(githubLogo);
// seeSource.appendChild(document.createTextNode(' See Source'));
btnDiv.appendChild(seeSource);

event.preventDefault();
})
});

closeModal.addEventListener('click', (e) => {
  console.log('Close button clicked');
  const popupDiv = document.querySelector('.popdiv');
  document.body.classList.remove('no-scroll');
  document.body.style.top = '0';
  window.scrollTo(0, scrollPosition);
  popupDiv.remove();
  demonstrationDiv.style.width = '0';
  demonstrationDiv.style.height = '0';
  popupBackdroundDesktop.style.display = 'none';
  document.body.classList.remove('no-scroll');
  // demonstrationDiv.style.display = 'none';
  e.preventDefault();
});