//let count = 0;
// In the if condition mentione check is considered as truthy or falsy. Based on value given in brakcets it will be considered. If the value is true then it will be considered as truthy like if (true){and if value is false then it will be considered as falsy like if (false). Below mentioned Boolean check is used to verify whether condition is truthy or falsy. So while writing code in project we can use Boolan to check for same and then work accordinlgy

// if (count>0){
//     console.log("You can play")
// } else {
//     console.log("You can't play, Add credit");
// }

// console.log (Boolean(""));
// console.log (Boolean("0"));
// console.log (Boolean(null));
// console.log (Boolean(100));
// console.log (Boolean(-0));
// console.log (Boolean([0]));

// FUNCTIONS TO USE THE VALUES FOR ADD FUNCTION

// function add(a,b){
//     // Return result with no text
//     //return a + b;
//     // Lines to print text with result   
//     let sum = a+b;
//     console.log (`Addition of values is ${a} + ${b} = ${sum}`);
// }

// add(3,4);
// add(9,102);

// FUNCTION WITH AN ARRAY:

// function arrPrint(arr){
//     return arr[0];   
// }

// let firstVal = arrPrint([10,20,30]);

// console.log(firstVal)

// FETCH SCORE FOR JANE FROM OBJECT DATA USING DOM ELEMENT
// let data =[
//     {
//         player: "Jane",
//         score: 50
//     },
//     {
//         player: "Mark",
//         score: 60
//     }
// ]
// const getScrore = document.getElementById("log");
// getScrore.addEventListener("click", function(){
//     console.log(data[0].score)
// })

//NEXT TASK
/* 
The generateSentance(desc,arr) takes two paramaters: a description and an array
It should retrun a string based upon the description and array

Example: IF you pass in "Lagest countries, and ["China","India","USA"]
it should retrun the string: "The 3 largest countries are China, India USA"

Example: If you pass in "Best Fruits" and ["Apple","Bananas"]
It should retrun "The 2 best fruits are Apple, Bananas"

Use both a for loop and a template string to solve this challanges
*/

// function generateSentance(desc,arr) {
//     let baseString = `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length -1;
//     for (let i = 0; i < arr.length; i++){
//         if (i === lastIndex){
//             baseString += arr[i]    
//         }else {
//         baseString += arr[i] + ", "
//         }
//     }
//     console.log(baseString);
// }

// generateSentance("Largest countries",["China","India","USA"])
// generateSentance("Best Fruits", ["Apple","Bananas"])
// generateSentance("Highest mountains",["Mount Everst","K2"])

// NEXT TASK IS TO PRINT IMAGES IN WEBPAGE USING FUNCTION

const img = [
    "images/face1.png",
    "images/face2.png",
    "images/face3.png"
]

const imgEl = document.getElementById("img");

function imageRender(){
    let imgTag = "";
    for(let i=0; i < img.length; i++){
        imgTag +=`<img class="team-img" src='${img[i]}' />`;
    }
    imgEl.innerHTML = imgTag;    
}
imageRender()