// Site menu  smartphone  -------------------------


const burger = document.getElementById("burger");
const siteMenu = document.getElementById("siteMenu");
const links = document.getElementsByClassName('links');

burger.addEventListener("click", function() {
  if (siteMenu.style.display === 'block') {
    siteMenu.style.display = 'none'
  } else {siteMenu.style.display = 'block'}
})

for(let i = 0; i < links.length; i++){
links[i].addEventListener("click", () => {
  siteMenu.style.display = 'none';
});
}
