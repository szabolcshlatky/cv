`use strict`;

const $ = (id: any) => document.getElementById(id);
const $$ = (query: any) => document.querySelector(query);
const $$$ = (jquery: any) => document.querySelectorAll(jquery);

const body = $$(`body`);

/* NAV */

const nav = $$(`nav`);
const navbarIcon = $$(`.navbar-icon`);

navbarIcon.addEventListener(`click`, () => {
  navbarIcon.classList.toggle(`open`);
  body.classList.toggle(`open`);
  if (navbarIcon.classList.contains(`open`)) {
    navbarIcon.style.zIndex = `3`;
  } else {
    navbarIcon.style.zIndex = `0`;
  }
});

  // CONTENT

const studBtn = $$(`.stud`);
const studGlass = $$(`.studies`);
const studX = $$(`.studX`);

studBtn.addEventListener(`click`, () => {
  body.classList.toggle(`stud-glass`);
  body.classList.toggle(`open`);
});
studX.addEventListener(`click`, () => {
  body.classList.toggle(`stud-glass`);
  body.classList.toggle(`open`);
});

const gmnBtn = $$(`.gmn-btn`);
const gmnPopUp = $$(`.gmn`);
const gmnClose = $$(`.gmn__close`);

gmnBtn.addEventListener(`click`, () => {
  gmnPopUp.style.display = `block`;
  gmnBtn.style.display = `none`;
});

gmnClose.addEventListener(`click`, () => {
  gmnPopUp.style.display = `none`;
  gmnBtn.style.display = `flex`;
});

const learnitBtn = $$(`.learnit-btn`);
const learnitPopUp = $$(`.learnit`);
const learnitClose = $$(`.learnit__close`);

learnitBtn.addEventListener(`click`, () => {
  learnitPopUp.style.display = `block`;
  learnitBtn.style.display = `none`;
});

learnitClose.addEventListener(`click`, () => {
  learnitPopUp.style.display = `none`;
  learnitBtn.style.display = `flex`;
});

const xpBtn = $$(`.xp`);
const xpGlass = $$(`.experience`);
const xpX = $$(`.xpX`);

xpBtn.addEventListener(`click`, () => {
  body.classList.toggle(`xp-glass`);
  body.classList.toggle(`open`);
});
xpX.addEventListener(`click`, () => {
  body.classList.toggle(`xp-glass`);
  body.classList.toggle(`open`);
});

VanillaTilt.init($$$(".type-1"), {
  max: 25,
  speed: 400,
  glare: true,
});

VanillaTilt.init($$$(".type-2"), {
  max: 25,
  speed: 400,
  glare: true,
});

const hosBtn = $$(`.hos-btn`);
const hosPopUp = $$(`.hos`);
const hosClose = $$(`.hos__close`);

hosBtn.addEventListener(`click`, () => {
  hosPopUp.style.display = `block`;
  hosBtn.style.display = `none`;
});

hosClose.addEventListener(`click`, () => {
  hosPopUp.style.display = `none`;
  hosBtn.style.display = `flex`;
});

const geokBtn = $$(`.geok-btn`);
const geokPopUp = $$(`.geok`);
const geokClose = $$(`.geok__close`);

geokBtn.addEventListener(`click`, () => {
  geokPopUp.style.display = `block`;
  geokBtn.style.display = `none`;
});

geokClose.addEventListener(`click`, () => {
  geokPopUp.style.display = `none`;
  geokBtn.style.display = `flex`;
});

const matrixBtn = $$(`.matrix-btn`);
const matrixPopUp = $$(`.matrix`);
const matrixClose = $$(`.matrix__close`);

matrixBtn.addEventListener(`click`, () => {
  matrixPopUp.style.display = `block`;
  matrixBtn.style.display = `none`;
});

matrixClose.addEventListener(`click`, () => {
  matrixPopUp.style.display = `none`;
  matrixBtn.style.display = `flex`;
});

const okosvBtn = $$(`.okosv-btn`);
const okosvPopUp = $$(`.okosv`);
const okosvClose = $$(`.okosv__close`);

okosvBtn.addEventListener(`click`, () => {
  okosvPopUp.style.display = `block`;
  okosvBtn.style.display = `none`;
});

okosvClose.addEventListener(`click`, () => {
  okosvPopUp.style.display = `none`;
  okosvBtn.style.display = `flex`;
});

const toursBtn = $$(`.tours-btn`);
const toursPopUp = $$(`.tours`);
const toursClose = $$(`.tours__close`);

toursBtn.addEventListener(`click`, () => {
  toursPopUp.style.display = `block`;
  toursBtn.style.display = `none`;
});

toursClose.addEventListener(`click`, () => {
  toursPopUp.style.display = `none`;
  toursBtn.style.display = `flex`;
});

const ictyskftBtn = $$(`.ictyskft-btn`);
const ictyskftPopUp = $$(`.ictyskft`);
const ictyskftClose = $$(`.ictyskft__close`);

ictyskftBtn.addEventListener(`click`, () => {
  ictyskftPopUp.style.display = `block`;
  ictyskftBtn.style.display = `none`;
});

ictyskftClose.addEventListener(`click`, () => {
  ictyskftPopUp.style.display = `none`;
  ictyskftBtn.style.display = `flex`;
});

const techBtn = $$(`.tech`);
const techGlass = $$(`.technologies`);
const techX = $$(`.techX`);

techBtn.addEventListener(`click`, () => {
  body.classList.toggle(`tech-glass`);
  body.classList.toggle(`open`);
});
techX.addEventListener(`click`, () => {
  body.classList.toggle(`tech-glass`);
  body.classList.toggle(`open`);
});

const dashBtns = $$$(`.dash-btn`);

dashBtns.forEach((dashBtn, index) => {
  const progTitle = $$(`.prog-title`);
  const progCards = $$$(`.prog-cards`);

  dashBtn.addEventListener(`click`, () => {
    switch(index) {
      case 0:
        progTitle.textContent = `Online Marketing`;
        progCards.forEach((progCard, ind) => {
          if (ind === 0) {
            progCard.style.display = `contents`;
          } else {
            progCard.style.display = `none`;
          }
        });
        break;
      case 1:
        progTitle.textContent = `Website building & design`;
        progCards.forEach((progCard, ind) => {
          if (ind === 1) {
            progCard.style.display = `contents`;
          } else {
            progCard.style.display = `none`;
          }
        });
        break;
      case 2:
        progTitle.textContent = `Git`;
        progCards.forEach((progCard, ind) => {
          if (ind === 2) {
            progCard.style.display = `contents`;
          } else {
            progCard.style.display = `none`;
          }
        });
        break;
      case 3:
        progTitle.textContent = `SQL & NoSQL Databases`;
        progCards.forEach((progCard, ind) => {
          if (ind === 3) {
            progCard.style.display = `contents`;
          } else {
            progCard.style.display = `none`;
          }
        });
        break;
      case 4:
        progTitle.textContent = `HyperText Markup Language`;
        progCards.forEach((progCard, ind) => {
          if (ind === 4) {
            progCard.style.display = `contents`;
          } else {
            progCard.style.display = `none`;
          }
        });
        break;
      case 5:
        progTitle.textContent = `Cascading StyleSheets`;
        progCards.forEach((progCard, ind) => {
          if (ind === 5) {
            progCard.style.display = `contents`;
          } else {
            progCard.style.display = `none`;
          }
        });
        break;
      case 6:
        progTitle.textContent = `JavaScript`;
        progCards.forEach((progCard, ind) => {
          if (ind === 6) {
            progCard.style.display = `contents`;
          } else {
            progCard.style.display = `none`;
          }
        });
        break;
      
      default: 
        progTitle.textContent = `Tech Stack`;
        progCards.forEach((progCard, ind) => {
          progCard.style.display = `none`;
        });
    }
  });
});

const langBtn = $$(`.lang`);
const langGlass = $$(`.languages`);
const langX = $$(`.langX`);

langBtn.addEventListener(`click`, () => {
  body.classList.toggle(`lang-glass`);
  body.classList.toggle(`open`);
});
langX.addEventListener(`click`, () => {
  body.classList.toggle(`lang-glass`);
  body.classList.toggle(`open`);
});

  // CONTACT

    // map

const mapBtn = $$(`.map-btn`);
const mapPopUp = $$(`.map`);
const mapClose = $$(`.map__close`);

mapBtn.addEventListener(`click`, () => {
  mapPopUp.style.display = `block`;
  mapBtn.style.display = `none`;
});

mapClose.addEventListener(`click`, () => {
  mapPopUp.style.display = `none`;
  mapBtn.style.display = `flex`;
});

    // form

const briefBtn = $$(`.brief-btn`);
const briefForm = $$(`.form`);
const briefClose = $$(`.form__close`);

briefBtn.addEventListener(`click`, () => {
  briefForm.style.display = `block`;
  briefBtn.style.display = `none`;
});

briefClose.addEventListener(`click`, () => {
  briefForm.style.display = `none`;
  briefBtn.style.display = `flex`;
});

// Get a reference to the form
const form = document.getElementById('myForm') as HTMLFormElement;

// Add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Perform form validation
  if (validateForm()) {
    // If the form is valid, submit the form using Fetch API
    const url = 'https://formspree.io/f/xpzevogk'; // Replace with your Formspree endpoint
    const formData = new FormData(form);
    
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form submitted successfully!');
          form.reset(); // Reset the form after successful submission
        } else {
          console.error('Form submission failed.');
        }
      })
      .catch((error) => {
        console.error('An error occurred during form submission:', error);
      });
  }
});

// Function to validate the form
function validateForm(): boolean {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const domainInput = document.getElementById('domain') as HTMLInputElement;
  const msgInput = document.getElementById('msg') as HTMLTextAreaElement;

  // Perform validation for each field
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return false;
  }

  if (phoneInput.value.trim() === '') {
    alert('Please enter your phone number.');
    return false;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email address.');
    return false;
  }

  if (domainInput.value.trim() === '') {
    alert('Please enter your domain.');
    return false;
  }

  if (msgInput.value.trim() === '') {
    alert('Please enter your project details.');
    return false;
  }

  // All fields are valid
  return true;
}



/* MAIN */

const popupBtn = $$(`.logo`);
const popup = $$(`main`);
const closeX = $$(`.popup-close`);
const footer = $$(`footer`);

popupBtn.addEventListener(`click`, () => {
  popup.style.display = `block`;
  popupBtn.style.display = `none`;
  nav.style.zIndex = 0;
  footer.style.display = `none`;
});

closeX.addEventListener(`click`, () => {
  popup.style.display = `none`;
  popupBtn.style.display = `flex`;
  nav.style.zIndex = 1;
  footer.style.display = `flex`;
});

VanillaTilt.init($$$(".box"), {
  max: 15,
  speed: 400,
  glare: true
});


/* OPTIONAL way that click anywhere the pop-up will be closed:

popup.addEventListener(`click`, () => {
  popup.style.display = `none`;
  popupBtn.style.display = `flex`;
});

*/