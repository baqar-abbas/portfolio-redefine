// projects array of objects
const projectsMob = [
  {
    name: 'Appointment App',
    description:
        'Doctor Appointment app is a Full Stack Web application built using Ruby-on-Rails along with React and Redux for the front end. It allows users to signup and register themselves and sign-in using the credentials. It allows users to book an appointment with the doctor. Users can see their appointments in the my appointments page. This app also allows admins to add doctors and delete doctors. This app handles responsiveness for both the mobile and desktop users.',
    featuredImage: './images/appointAppMob.JPG',
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
    name: 'Population Metrics',
    description:
          'Population Metric Webb app is a mobile web app which is fetching images and data through Countries Rest API and displaying them on the UI. Users can click on available countries and can see the details on details page. Users can also search for specific country from the search bar which is implemented within the web app and then can see the details of that specific country on the details page.',
    featuredImage: './images/metrics.JPG',
    technologies: ['React', 'Redux', 'JavaScript'],
    linkToLiveVersion: 'https://population-metrics-webapp.netlify.app/',
    linkToSource: 'https://github.com/baqar-abbas/population-metrics-webapp',
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
    featuredImage: './images/astronomyPicture.JPG',
    technologies: ['HTML', 'API/Webpack', 'CSS', 'JavaScript'],
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
    featuredImage: './images/bookstore.JPG',
    technologies: ['React', 'Redux', 'CSS', 'JavaScript'],
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
    featuredImage: './images/webSummitMob.JPG',
    technologies: ['HTML', 'CSS', 'JavaScript'],
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
];

const mobileDiv = document.querySelector('#portfolio2');

projectsMob.forEach((project) => {
  const container = document.createElement('article');
  container.classList.add('work-container');
  mobileDiv?.appendChild(container);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-div-mob');
  container.appendChild(imageContainer);

  const image = document.createElement('img');
  image.classList.add('projects');
  image.src = project.featuredImage;
  image.alt = project.name;
  imageContainer.appendChild(image);

  const projectInfo = document.createElement('div');
  projectInfo.classList.add('tonic');
  container.appendChild(projectInfo);

  const name = document.createElement('h3');
  name.classList.add('project-name');
  name.textContent = project.name;
  projectInfo.appendChild(name);

  const skillmInfo = document.createElement('ul');
  skillmInfo.classList.add('skill-list');
  projectInfo.appendChild(skillmInfo);

  const skillmNames = [
    'skillm-one',
    'skillm-two',
    'skillm-three',
    'skillm-four',
    'skillm-five',
  ];

  let skillmCount = 0;

  project.items.forEach((item) => {
    const skillm = document.createElement('li');
    skillm.classList.add(skillmNames[skillmCount]);
    skillm.innerHTML = item;
    skillmInfo.appendChild(skillm);
    skillmCount += 1;
  });

  const description = document.createElement('p');
  description.classList.add('project-description');
  description.innerHTML = `<br>${project.description}<br><br>`;
  projectInfo.appendChild(description);

  const tech = document.createElement('ul');
  tech.classList.add('tech-mob-list');
  projectInfo.appendChild(tech);

  project.technologies.forEach((techno) => {
    const techItem = document.createElement('li');
    techItem.classList.add('htcj2');
    techItem.innerText = techno;
    tech.appendChild(techItem);
  });

  const btnDivMob = document.createElement('div');
  btnDivMob.classList.add('btn-div-mob');
  projectInfo.appendChild(btnDivMob);

  const liveVersion = document.createElement('a');
  liveVersion.classList.add('live-version');
  liveVersion.href = '';
  liveVersion.target = '_blank';
  liveVersion.textContent = 'See Project';
  btnDivMob.appendChild(liveVersion);
});

const popupBackgroundMobile = document.querySelector('.popupbackgroundmobile');
const demonstrationMobile = document.querySelector('#demonstration-mobile');
const seeProjectMobile = document.querySelectorAll('.live-version');
const closePopupMobile = document.querySelector('.crossmodal-mobile');
let scrollPosition2 = 0;

seeProjectMobile.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    popupBackgroundMobile.style.display = 'block';
    scrollPosition2 = window.scrollY;
    document.body.classList.add('no-scroll-mob');
    document.body.style.top = `${-scrollPosition2}px`;
    demonstrationMobile.style.width = '93%';
    demonstrationMobile.style.height = '90vh';
    const popupMobileDiv = document.createElement('div');
    popupMobileDiv?.classList.add('popup-mobile-div');
    demonstrationMobile?.appendChild(popupMobileDiv);

    const projectHeading = document.createElement('h2');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = projectsMob[index].name;
    popupMobileDiv?.appendChild(projectHeading);

    const skillmInfo = document.createElement('ul');
    skillmInfo.classList.add('skill-list');
    popupMobileDiv.appendChild(skillmInfo);

    const skillmNames = [
      'skillm-one',
      'skillm-two',
      'skillm-three',
      'skillm-four',
      'skillm-five',
    ];

    let skillmCount = 0;

    projectsMob[index].items.forEach((item) => {
      const skillItem = document.createElement('li');
      skillItem.classList.add(skillmNames[skillmCount]);
      skillItem.innerHTML = item;
      skillmInfo.appendChild(skillItem);
      skillmCount += 1;
    });

    const mobileProjectImage = document.createElement('img');
    mobileProjectImage.setAttribute('src', projectsMob[index].featuredImage);
    mobileProjectImage.setAttribute('alt', projectsMob[index].name);
    mobileProjectImage.classList.add('projectmobimage');
    popupMobileDiv.appendChild(mobileProjectImage);

    const mobileProjectDetails = document.createElement('p');
    mobileProjectDetails.classList.add('popp15');
    mobileProjectDetails.innerHTML = projectsMob[index].description;
    popupMobileDiv.appendChild(mobileProjectDetails);

    const techMobDiv = document.createElement('div');
    techMobDiv.classList.add('techMobDiv');
    popupMobileDiv.appendChild(techMobDiv);

    const tech = document.createElement('ul');
    tech.classList.add('tech-mob-list');
    techMobDiv.appendChild(tech);

    projectsMob[index].technologies.forEach((techno) => {
      const techItem = document.createElement('li');
      techItem.classList.add('htcj2', 'techMargin');
      techItem.innerText = techno;
      tech.appendChild(techItem);
    });

    const mobileBtnDiv = document.createElement('div');
    mobileBtnDiv.classList.add('mobileBtnDiv');
    popupMobileDiv.appendChild(mobileBtnDiv);

    const seeProject = document.createElement('a');
    seeProject.classList.add('live-version', 'seePro-margin');
    seeProject.setAttribute('href', projectsMob[index].linkToLiveVersion);
    seeProject.setAttribute('target', '_blank');
    seeProject.appendChild(document.createTextNode(' See Live'));
    const seeLiveLogo = document.createElement('img');
    seeLiveLogo.classList.add('seeliveicon2');
    seeLiveLogo.src = 'https://res.cloudinary.com/dapnjt4ah/image/upload/v1678270657/seeliveIcon_ymjy37.png'; // Replace with the actual path or URL to the GitHub logo
    seeLiveLogo.alt = 'SeeLive';
    seeProject.appendChild(seeLiveLogo);
    mobileBtnDiv.appendChild(seeProject);

    const seeSource = document.createElement('a');
    seeSource.classList.add('live-version', 'margin-class');
    seeSource.setAttribute('href', projectsMob[index].linkToSource);
    seeSource.setAttribute('target', '_blank');
    seeSource.appendChild(document.createTextNode('See Source'));
    const githubLogo = document.createElement('img');
    githubLogo.classList.add('gitbuttonicon2');
    githubLogo.src = '/images/gitbutton.png';
    githubLogo.alt = 'GitHub';
    seeSource.appendChild(githubLogo);
    mobileBtnDiv.appendChild(seeSource);
    e.preventDefault();
  });
});

closePopupMobile?.addEventListener('click', (e) => {
  popupBackgroundMobile.style.display = 'none';
  document.body.classList.remove('no-scroll-mob');
  document.body.style.top = '0';
  window.scrollTo(0, scrollPosition2);
  demonstrationMobile.style.width = '0';
  demonstrationMobile.style.height = '0';
  const popupMob = document.querySelector('.popup-mobile-div');
  popupMob?.remove();
  e.preventDefault();
});