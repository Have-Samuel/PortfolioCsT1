// mobile-menu
const closeIcon = document.querySelector('.btn-x');

const menuIcon = document.querySelector('.ham-btn');

const navLinks = document.querySelector('.container');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('change');
});

closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('change');
});

const listItems = document.querySelectorAll('.nav-mobile');

listItems.forEach((element) => {
  element.addEventListener('click', () => {
    navLinks.classList.remove('change');
  });
});

// Deskop- Version
const speakers = [
  {
    artistImage: './images/lecture.png',
    title: 'Yohai Benkler',
    subTitle: 'Professor at Harvard Law School',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    artistImage: './images/speaker_02.png',
    title: 'Jeon Gil-nam',
    subTitle: 'Emeritus Professor, (KAIST)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    artistImage: './Images/pictures/speaker_01.png',
    title: 'Noh So-youn',
    subTitle: 'Art Center Nabi Director, CC Korea Director',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    artistImage: './images/speaker_04.png',
    title: 'Julia Leda',
    subTitle: 'Head of the Young Pirates of Europe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    artistImage: './images/speaker_05.png',
    title: 'Layla Tretikov',
    subTitle: 'Secretary General of the Wikimedia Foundation',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    artistImage: '/images/speaker_06.png',
    title: 'Ryan Merkley',
    subTitle: 'Full stack developer fro more than 10 yeats with react JS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const createArtistCard = (artist) => {
  const reputation = document.createElement('div');
  reputation.classList.add('artist-section');

  const artistImgContainer = document.createElement('div');
  artistImgContainer.classList.add('artist-card');
  const artistImg = document.createElement('img');
  artistImgContainer.appendChild(artistImg);
  reputation.appendChild(artistImgContainer);

  const text = document.createElement('div');
  text.classList.add('artist-info');

  const title = document.createElement('h3');
  title.classList.add('artist-heading');
  text.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.classList.add('paragragh2, artist-data');
  text.appendChild(subtitle);

  const 
   
}
