"use strict";
var $ = function (id) { return document.getElementById(id); };
var $$ = function (query) { return document.querySelector(query); };
var $$$ = function (jquery) { return document.querySelectorAll(jquery); };
var body = $$("body");
/* NAV */
var nav = $$("nav");
var navbarIcon = $$(".navbar-icon");
navbarIcon.addEventListener("click", function () {
    navbarIcon.classList.toggle("open");
    body.classList.toggle("open");
    if (navbarIcon.classList.contains("open")) {
        navbarIcon.style.zIndex = "3";
    }
    else {
        navbarIcon.style.zIndex = "0";
    }
});
// CONTENT
var studBtn = $$(".stud");
var studGlass = $$(".studies");
var studX = $$(".studX");
studBtn.addEventListener("click", function () {
    body.classList.toggle("stud-glass");
    body.classList.toggle("open");
});
studX.addEventListener("click", function () {
    body.classList.toggle("stud-glass");
    body.classList.toggle("open");
});
var gmnBtn = $$(".gmn-btn");
var gmnPopUp = $$(".gmn");
var gmnClose = $$(".gmn__close");
gmnBtn.addEventListener("click", function () {
    gmnPopUp.style.display = "block";
    gmnBtn.style.display = "none";
});
gmnClose.addEventListener("click", function () {
    gmnPopUp.style.display = "none";
    gmnBtn.style.display = "flex";
});
var learnitBtn = $$(".learnit-btn");
var learnitPopUp = $$(".learnit");
var learnitClose = $$(".learnit__close");
learnitBtn.addEventListener("click", function () {
    learnitPopUp.style.display = "block";
    learnitBtn.style.display = "none";
});
learnitClose.addEventListener("click", function () {
    learnitPopUp.style.display = "none";
    learnitBtn.style.display = "flex";
});
var xpBtn = $$(".xp");
var xpGlass = $$(".experience");
var xpX = $$(".xpX");
xpBtn.addEventListener("click", function () {
    body.classList.toggle("xp-glass");
    body.classList.toggle("open");
});
xpX.addEventListener("click", function () {
    body.classList.toggle("xp-glass");
    body.classList.toggle("open");
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
var hosBtn = $$(".hos-btn");
var hosPopUp = $$(".hos");
var hosClose = $$(".hos__close");
hosBtn.addEventListener("click", function () {
    hosPopUp.style.display = "block";
    hosBtn.style.display = "none";
});
hosClose.addEventListener("click", function () {
    hosPopUp.style.display = "none";
    hosBtn.style.display = "flex";
});
var geokBtn = $$(".geok-btn");
var geokPopUp = $$(".geok");
var geokClose = $$(".geok__close");
geokBtn.addEventListener("click", function () {
    geokPopUp.style.display = "block";
    geokBtn.style.display = "none";
});
geokClose.addEventListener("click", function () {
    geokPopUp.style.display = "none";
    geokBtn.style.display = "flex";
});
var matrixBtn = $$(".matrix-btn");
var matrixPopUp = $$(".matrix");
var matrixClose = $$(".matrix__close");
matrixBtn.addEventListener("click", function () {
    matrixPopUp.style.display = "block";
    matrixBtn.style.display = "none";
});
matrixClose.addEventListener("click", function () {
    matrixPopUp.style.display = "none";
    matrixBtn.style.display = "flex";
});
var okosvBtn = $$(".okosv-btn");
var okosvPopUp = $$(".okosv");
var okosvClose = $$(".okosv__close");
okosvBtn.addEventListener("click", function () {
    okosvPopUp.style.display = "block";
    okosvBtn.style.display = "none";
});
okosvClose.addEventListener("click", function () {
    okosvPopUp.style.display = "none";
    okosvBtn.style.display = "flex";
});
var toursBtn = $$(".tours-btn");
var toursPopUp = $$(".tours");
var toursClose = $$(".tours__close");
toursBtn.addEventListener("click", function () {
    toursPopUp.style.display = "block";
    toursBtn.style.display = "none";
});
toursClose.addEventListener("click", function () {
    toursPopUp.style.display = "none";
    toursBtn.style.display = "flex";
});
var ictyskftBtn = $$(".ictyskft-btn");
var ictyskftPopUp = $$(".ictyskft");
var ictyskftClose = $$(".ictyskft__close");
ictyskftBtn.addEventListener("click", function () {
    ictyskftPopUp.style.display = "block";
    ictyskftBtn.style.display = "none";
});
ictyskftClose.addEventListener("click", function () {
    ictyskftPopUp.style.display = "none";
    ictyskftBtn.style.display = "flex";
});
var techBtn = $$(".tech");
var techGlass = $$(".technologies");
var techX = $$(".techX");
techBtn.addEventListener("click", function () {
    body.classList.toggle("tech-glass");
    body.classList.toggle("open");
});
techX.addEventListener("click", function () {
    body.classList.toggle("tech-glass");
    body.classList.toggle("open");
});
var dashBtns = $$$(".dash-btn");
dashBtns.forEach(function (dashBtn, index) {
    var progTitle = $$(".prog-title");
    var progCards = $$$(".prog-cards");
    dashBtn.addEventListener("click", function () {
        switch (index) {
            case 0:
                progTitle.textContent = "Online Marketing";
                progCards.forEach(function (progCard, ind) {
                    if (ind === 0) {
                        progCard.style.display = "contents";
                    }
                    else {
                        progCard.style.display = "none";
                    }
                });
                break;
            case 1:
                progTitle.textContent = "Website building & design";
                progCards.forEach(function (progCard, ind) {
                    if (ind === 1) {
                        progCard.style.display = "contents";
                    }
                    else {
                        progCard.style.display = "none";
                    }
                });
                break;
            case 2:
                progTitle.textContent = "Git";
                progCards.forEach(function (progCard, ind) {
                    if (ind === 2) {
                        progCard.style.display = "contents";
                    }
                    else {
                        progCard.style.display = "none";
                    }
                });
                break;
            case 3:
                progTitle.textContent = "SQL & NoSQL Databases";
                progCards.forEach(function (progCard, ind) {
                    if (ind === 3) {
                        progCard.style.display = "contents";
                    }
                    else {
                        progCard.style.display = "none";
                    }
                });
                break;
            case 4:
                progTitle.textContent = "HyperText Markup Language";
                progCards.forEach(function (progCard, ind) {
                    if (ind === 4) {
                        progCard.style.display = "contents";
                    }
                    else {
                        progCard.style.display = "none";
                    }
                });
                break;
            case 5:
                progTitle.textContent = "Cascading StyleSheets";
                progCards.forEach(function (progCard, ind) {
                    if (ind === 5) {
                        progCard.style.display = "contents";
                    }
                    else {
                        progCard.style.display = "none";
                    }
                });
                break;
            case 6:
                progTitle.textContent = "JavaScript";
                progCards.forEach(function (progCard, ind) {
                    if (ind === 6) {
                        progCard.style.display = "contents";
                    }
                    else {
                        progCard.style.display = "none";
                    }
                });
                break;
            default:
                progTitle.textContent = "Tech Stack";
                progCards.forEach(function (progCard, ind) {
                    progCard.style.display = "none";
                });
        }
    });
});
var langBtn = $$(".lang");
var langGlass = $$(".languages");
var langX = $$(".langX");
langBtn.addEventListener("click", function () {
    body.classList.toggle("lang-glass");
    body.classList.toggle("open");
});
langX.addEventListener("click", function () {
    body.classList.toggle("lang-glass");
    body.classList.toggle("open");
});
// CONTACT
// map
var mapBtn = $$(".map-btn");
var mapPopUp = $$(".map");
var mapClose = $$(".map__close");
mapBtn.addEventListener("click", function () {
    mapPopUp.style.display = "block";
    mapBtn.style.display = "none";
});
mapClose.addEventListener("click", function () {
    mapPopUp.style.display = "none";
    mapBtn.style.display = "flex";
});
// form
var briefBtn = $$(".brief-btn");
var briefForm = $$(".form");
var briefClose = $$(".form__close");
briefBtn.addEventListener("click", function () {
    briefForm.style.display = "block";
    briefBtn.style.display = "none";
});
briefClose.addEventListener("click", function () {
    briefForm.style.display = "none";
    briefBtn.style.display = "flex";
});
// Get a reference to the form
var form = document.getElementById('myForm');
// Add event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Perform form validation
    if (validateForm()) {
        // If the form is valid, submit the form using Fetch API
        var url = 'https://formspree.io/f/xpzevogk'; // Replace with your Formspree endpoint
        var formData = new FormData(form);
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData
        })
            .then(function (response) {
            if (response.ok) {
                console.log('Form submitted successfully!');
                form.reset(); // Reset the form after successful submission
            }
            else {
                console.error('Form submission failed.');
            }
        })
            .catch(function (error) {
            console.error('An error occurred during form submission:', error);
        });
    }
});
// Function to validate the form
function validateForm() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var domainInput = document.getElementById('domain');
    var msgInput = document.getElementById('msg');
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
var popupBtn = $$(".logo");
var popup = $$("main");
var closeX = $$(".popup-close");
var footer = $$("footer");
popupBtn.addEventListener("click", function () {
    popup.style.display = "block";
    popupBtn.style.display = "none";
    nav.style.zIndex = 0;
    footer.style.display = "none";
});
closeX.addEventListener("click", function () {
    popup.style.display = "none";
    popupBtn.style.display = "flex";
    nav.style.zIndex = 1;
    footer.style.display = "flex";
});
VanillaTilt.init($$$(".box"), {
    max: 15,
    speed: 400,
    glare: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBTyxJQUFLLE9BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztBQUNuRCxJQUFNLEVBQUUsR0FBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUM7QUFDekQsSUFBTSxHQUFHLEdBQUcsVUFBQyxNQUFXLElBQUssT0FBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQWpDLENBQWlDLENBQUM7QUFFL0QsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXhCLFNBQVM7QUFFVCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXRDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDbkMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN6QyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7S0FDL0I7U0FBTTtRQUNMLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztLQUMvQjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUQsVUFBVTtBQUVaLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTNCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwQyxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ25DLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNyQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3JDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNwQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV2QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQy9CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsS0FBSyxFQUFFLEdBQUc7SUFDVixLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQy9CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsS0FBSyxFQUFFLEdBQUc7SUFDVixLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoQyxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXJDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFekMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNsQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNwQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbkMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFdkMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDbkMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNuQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFdkMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDbkMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNuQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3hDLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU3QyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3BDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN0QyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3RDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNyQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUzQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVsQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7SUFDOUIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVyQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ2hDLFFBQU8sS0FBSyxFQUFFO1lBQ1osS0FBSyxDQUFDO2dCQUNKLFNBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUUsR0FBRztvQkFDOUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO3dCQUNiLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztxQkFDckM7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3FCQUNqQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLFNBQVMsQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7Z0JBQ3BELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUUsR0FBRztvQkFDOUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO3dCQUNiLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztxQkFDckM7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3FCQUNqQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLFNBQVMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFFLEdBQUc7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTt3QkFDYixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztxQkFDakM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDO2dCQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFFLEdBQUc7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTt3QkFDYixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztxQkFDakM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO2dCQUNwRCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFFLEdBQUc7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTt3QkFDYixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztxQkFDakM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDO2dCQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFFLEdBQUc7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTt3QkFDYixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztxQkFDakM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztnQkFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBRSxHQUFHO29CQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7d0JBQ2IsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO3FCQUNyQzt5QkFBTTt3QkFDTCxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7cUJBQ2pDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFFUjtnQkFDRSxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztnQkFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBRSxHQUFHO29CQUM5QixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFRCxVQUFVO0FBRVIsTUFBTTtBQUVWLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVDLE9BQU87QUFFWCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ2pDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ25DLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFFSCw4QkFBOEI7QUFDOUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQW9CLENBQUM7QUFFbEUseUNBQXlDO0FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLO0lBQ3BDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLHNDQUFzQztJQUU5RCwwQkFBMEI7SUFDMUIsSUFBSSxZQUFZLEVBQUUsRUFBRTtRQUNsQix3REFBd0Q7UUFDeEQsSUFBTSxHQUFHLEdBQUcsaUNBQWlDLENBQUMsQ0FBQyx1Q0FBdUM7UUFDdEYsSUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0I7WUFDRCxJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsNkNBQTZDO2FBQzVEO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMxQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILGdDQUFnQztBQUNoQyxTQUFTLFlBQVk7SUFDbkIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXFCLENBQUM7SUFDdEUsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7SUFDeEUsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7SUFDeEUsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXFCLENBQUM7SUFDMUUsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQXdCLENBQUM7SUFFdkUsb0NBQW9DO0lBQ3BDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDakMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDbEMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDekMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDbEMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDbkMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDbkMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDaEMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELHVCQUF1QjtJQUN2QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFJRCxVQUFVO0FBRVYsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbEMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTVCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzlCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUM1QixHQUFHLEVBQUUsRUFBRTtJQUNQLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUMifQ==