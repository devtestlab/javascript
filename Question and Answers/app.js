// USING SELECTORS INSDIE THE ELEMENT - 
// This approach will allows you to select same elements in a document and then using for each loop you can traverse with in that particular element to target specific element. For example we've a list of widget on a document so querySelectorAll will help you to target all widget having same class and then with help of forEach loop and querySelector we can target specific element in each widget like button/text etc

// This part will query to all question clases inside the document
const questions = document.querySelectorAll('.question');

// once all elements are located with for each loop we can traverse though all of them
questions.forEach(function(question){
    // This is for list down all article elements in the document with help of for each loop
    //console.log(question);
    // now btn will query another class question-btn with in each question class and further code will execute for particular element
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
    // Now we are adding event listener to the selected close button so if user click on that then we will compare it whether click on same question's button to close it or a differen one. If its a different one then new question will open and other one will be close automatically
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            // This is comparing the attibute value of class is same one or different one
            if (item !== question){
                // if it is different one then it will close the other one and open new one
                item.classList.remove("show-text");
            }
        });
        // this will toggle show text class to other elements so it can be open and in second click it will close the question as well.
        question.classList.toggle("show-text");
    });
});

//--------------------------------------------------------------------------------------------------

// TRAVERSING THROUGH DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e){
//          // In JavaScript parentElement is used to traverse back to parent element of the current element. The more times we will use this top level we will move for example in this one
//         // Accoriding to current state level is like 
//         //parentElement - this will traversed to document-link
//         //parentElement.parentElement - this will traversed to document
//         question = e.currentTarget.parentElement.parentElement;
           // this will toggle show text class to other elements so it can be open and in second click it will close the question as well.
//         question.classList.toggle("show-text");
//     });
// });