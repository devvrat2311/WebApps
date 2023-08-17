const topBar = document.querySelector('.head-container');
const logoImage = document.querySelector('.logo-img');

topBar.addEventListener('mouseover', function(){
    logoImage.src = 'images/logo_Black.png';
});

topBar.addEventListener('mouseout', function(){
    logoImage.src = 'images/logo_White.png';
});