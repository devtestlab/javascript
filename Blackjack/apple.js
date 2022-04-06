let fruit = ["🍏","🍊","🍓","🍊","🍓","🍏","🍊","🍓","🍊","🍏","🍊","🍓","🍊","🍏","🍊","🍓","🍊","🍏","🍏","🍊","🍊","🍊","🍊","🍏","🍓","🍓","🍏","🍓","🍏","🍏","🍓","🍏","🍓","🍏","🍏","🍏","🍓"];
let fruitShelf = document.getElementById("fruits");
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let strawBerry = document.getElementById("straw-shelf");
for (let i = 0; i < fruit.length; i++){
    fruitShelf.textContent += " " + fruit[i];
    if (fruit[i] === "🍏" ){
        appleShelf.textContent += " " + fruit[i];
    } else if (fruit[i] === "🍊") {
        orangeShelf.textContent += " " + fruit[i];
    } else {
        strawBerry.textContent += " " + fruit[i];
    }
}
