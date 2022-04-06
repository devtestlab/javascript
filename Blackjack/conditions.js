// Validation for age eligibility for Night Club
// let age = 10;
// if (age <= 20){
//     console.log("You can't enter in the club 😭");
// } else{
//     console.log("Welcome to Club!😂")
// }

// Check if the persoion is eligible for a birthday card from the King! (If age is 100 Years)
// let age = 100;

// if (age < 100){
//     console.log("Sorry you're not elegible for Birthday card");
// } else if (age === 100){
//     console.log("Here is your birthday card form the King!");
// } else{
//     console.log("Sorry you've already got one from King!");
// }

// if conditions checks
// console.log(12 > 12);
// console.log(5 > 2);
// console.log(4 === 3);
// console.log(11 <= 11);
// console.log(3 <= 2);
// console.log(3 >= 3);
// console.log(3 < 0);

// Arrays
// let featuredPosts = [
//     "Checkout my Netflix clone",
//     "Here's the code of my Project",
//     "I've just relaunched my portfolio",
//     "Frontend Developer at Xeneta",
//     "Good Knowledge of Software Testing",
//     "And last but not least worked on Automation projects as well"
// ];
// console.log(featuredPosts[0]);
// console.log(featuredPosts[1]);
// console.log(featuredPosts[2]);
// console.log(featuredPosts[3]);
// console.log(featuredPosts[4]);
// console.log(featuredPosts[5]);

// Pushe message to array similar to chat application
// let message = [
//     "Hey, How's it going?",
//     "I'm great, thank you! How about you?",
//     "All good, Been working on my portfolio lately"
// ];
// let newMessage = "Same Here";
// // Adding new message
// message.push(newMessage);
// console.log(message);
// // Removing last added message
// message.pop();
// console.log(message);


// Printing an array items to element
// let sentence = [
//     "Hello !",
//     "My",
//     "Name",
//     "is",
//     "Gourav !",
//     "I'm",
//     "from",
//     "Noida."
// ];
// let greetEl = document.getElementById("greet");
// for (let i = 0; i < sentence.length; i++){
//     greetEl.textContent += sentence[i] + " ";
// }

// Random Values and Returning data from functions

// let player1Time = 108;
// let player2Time = 118;

// function getFastestRaceTime() {
//     if (player1Time < player2Time){
//         return player1Time;
//     } else if (player2Time < player1Time) {
//         return player2Time;
//     } else {
//         return player1Time;
//     }
// }

// let fastestRace = getFastestRaceTime();

// console.log(fastestRace);

// Logical AND conditional test

// let hasCompletedCourse = true;
// let givesCertificate = true;
// if (givesCertificate === true && hasCompletedCourse === true) {
//     generateCertificate();
// }
// else{
//     console.log("Course is not completed yet!")
// }

// function generateCertificate() {
//     console.log("Generateing Certicate .....");
// }


// Objects - Key-Value Pairs

// let course ={
//     title: "Learn CSS Grid for free",
//     lessaon: 16,
//     creator: "Gourav Kashyap",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.title);
// console.log(course.lessaon);
// console.log(course.creator);
// console.log(course.length);
// console.log(course.level);
// console.log(course.isFree);
// console.log(course.tags[0]);
// console.log(course.tags[1]);

// Conditional statements using if-else-if that dislplay discounts according to age group

// let age = 65;

// if (age < 6 ) {
//     console.log("Free !");
// } else if (age < 18 ) {
//     console.log("Child Discount !");
// } else if (age < 27 ) {
//     console.log("Student Discount !");
// } else if (age < 66 ) {
//     console.log("Full Price !");
// } else {
//     console.log("Senior Citizen Discount !")
// }


// FOR LOOP FOR PRINTING TOP 5 LARGEST COUNTRIES IN THE WORLD

// let largeCountries = ["China","Russia","India","Indonedsia","Canada"];

// console.log("Top largest countries in the world are: ")
// for ( i=0; i< largeCountries.length; i++){
// console.log(" - " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu","Russia","India","Indonedsia","Monaco"];

// largeCountries.pop();
// largeCountries.push("Canada")
// largeCountries.shift()
// largeCountries.unshift("China");

// console.log("Array is updated with correct order and countires: ")
// for ( i=0; i< largeCountries.length; i++){
//     console.log(" - " + largeCountries[i]);
// }

// GENERATE RANDOM NUMBER FOR BELOW MENTIONED GAME WHERE NAME WILL BE PREINTERD
let hands = ["Rock", "Paper", "Scissor"];

function getHands() {
    let indexOfHand = Math.floor(Math.random() * 3)
    return indexOfHand;
    
}
console.log(hands[getHands()]);