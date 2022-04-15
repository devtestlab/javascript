const reviews = [
    {
        id:1,
        name:"Susan Smit",
        job:"Web Developer",
        img:"https://i.pinimg.com/564x/60/5b/0a/605b0a4bebec059ac9068ec4cdfdb4bb.jpg",
        text:"I'm baby meggings twe health goth+1. Biycyle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickeled coloring book saliva hoddie, cold-pressed four dollar toast everyday carry."
    },
    {
        id:2,
        name:"Anna Johnson",
        job:"Web Designer",
        img:"https://i.pinimg.com/564x/86/f7/0c/86f70c41fcaec62355197f3e7009961d.jpg",
        text:"Helvetica artisan kinflok thundercats lumbersexual blue bottle. Disprupt flossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion zxe. photo booth jean shorts artisan narwhal."
    },
    {
        id:3,
        name:"Peter Jones",
        job:"Intern",
        img:"https://i.pinimg.com/564x/f9/d2/6d/f9d26d52b6ae130a29d21adf38b2f465.jpg",
        text:"I'm baby meggings twe health goth+1. Biycyle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickeled coloring book saliva hoddie, cold-pressed four dollar toast everyday carry."
    },
    {
        id:4,
        name:"Johna Smith",
        job:"Database Admin",
        img:"https://i.pinimg.com/564x/b5/45/35/b54535516aa87504d69c3a54f2aadbe4.jpg",
        text:"Helvetica artisan kinflok thundercats lumbersexual blue bottle. Disprupt flossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion zxe. photo booth jean shorts artisan narwhal."
    },
];

// accessing page elements in JS
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Accessing button using query selector with class
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// initialise counter
let currentItem = 0;

// Accessing DOM and showing values in webpage on page load
// This function will load first Item from reviews array as soon as page will be loaded
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
})

// Function that has all elements are mapped with review array values to webpage elements.
// As soon as pages loads 0 index value will be loaded in the page
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Next button will load next values in the webpage based on their index value in currentItem varaible coming from reviews array
//When currentItem value hits last value that is 3 for now then if condition will check and assign starting index value of array to avoid any error in console

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})

// Previous button also load value from index but in reverse order
// While reversing the index values currentItem may hit -ve values so to avoid that if condition will check if values goes less than 0 then it will set last index value of array that will look like a loop
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0 ){
        currentItem = reviews.length -1;
    }
    showPerson();
})

// Random button will call any random value from reviews array and show values in webpage
// Math Floor function will remove decimals from randomly generated value and random wil generate a random value as per length of array which is 3. If in future new values will be added in review array then it will use new length value and generate random values accordingly.
randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})
