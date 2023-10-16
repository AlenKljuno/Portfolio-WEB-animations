var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
var sidemenu = document.getElementById('sidemenu');
function openmenu (){
    sidemenu.style.right = '0';
}
function closemenu (){
    sidemenu.style.right = '-200px';
}
let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextkBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (evt)=> {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});
nextkBtn.addEventListener('click', ()=> {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener('click', ()=> {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
});
var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
    loader.style.display = 'none';
})