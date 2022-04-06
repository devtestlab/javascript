let saveEl = document.getElementById("save-el");
let countVal = document.getElementById("counter");
let count = 0
function increment() {
    count += 1
    countVal.textContent=count;
}
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countVal.textContent=count;
}
save()