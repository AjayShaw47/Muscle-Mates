const crossElement = document.querySelector('.cross img');
const overlayElement = document.querySelector('.menu-overlay');
const hamburgerMenuElement = document.querySelector('.hamburger-menu');
const profileSectionElement = document.querySelector('.profile-section');
const profileSectionPreviewElement = document.querySelector('.profile-section-preview');
const overLayNavElement = document.querySelector(".menu-overlay nav");
const notificationSliderElement = document.querySelector(".notification-toggle .slider");


crossElement.addEventListener('click', () => {
    overlayElement.style.display = 'none';

});
hamburgerMenuElement.addEventListener('click', (event) => {
    event.stopPropagation();
    overlayElement.style.display = 'block';
});

profileSectionElement.addEventListener('click', (event) => {
    event.stopPropagation();
    profileSectionPreviewElement.style.display = 'block';

});

document.querySelector('body').addEventListener('click', (event) => {

    if (!profileSectionElement.contains(event.target)) {
        profileSectionPreviewElement.style.display = 'none';
    }
    if (!overLayNavElement.contains(event.target)) {
        overlayElement.style.display = 'none';
    }

});


