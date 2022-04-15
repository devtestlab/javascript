// OLD APPROACH OF USING INDIVDUAL FUNCTION TO HANDLE ALL BUTTONS

// let valEl = document.getElementById("value");

// let increaseBtn = document.getElementById("increase");
// let resetBtn = document.getElementById("reset");
// let decreaseBtn = document.getElementById("decrease");

// increaseBtn.addEventListener("click", function() {
//     valEl.textContent++
// })

// decreaseBtn.addEventListener("click", function() {
//     valEl.textContent -= 1;
// })

// resetBtn.addEventListener("click", function() {
//     valEl.textContent = 0;
// })


// THIS IS NEW OPTIMISED APPROACH USING FOREACH FUNCTION AND THEN PROCESS ALL BUTTONS USING IF CONDITION

let count = 0

const value = document.querySelector("#value");
// Query selector will do a query for mentioned class in the html document and list down all of them in one variable

const btns = document.querySelectorAll(".btn");
// For each is used to traverse every element that is quered from above function
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        console.log(e.currentTarget);
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        } else {
            count =0;
        }

        if  (count > 0){
            value.style.color="green"
        }
        if (count < 0){
            value.style.color="red"   
        }
        if (count === 0){
            value.style.color="#222"
        }
        value.textContent = count;
    })
})