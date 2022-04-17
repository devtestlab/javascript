// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    //console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
  // THIS IS ONE WAY TO USE IF CONDITION TO USE TOGGLE THE NAVIGATIONS  
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // }
    // else {
    //     links.classList.add("show-links");
    // }
  // THIS IS ANOTHER WAY TO USE TOGGLE METHOD TO WORK WITH NAVIGATION. IF WILL ACCEPT THE CLASS AND CHECK IF IT IS ADDED THEN REMOVE IT OTHERWISE ADD IT
  links.classList.toggle("show-links");
  
})