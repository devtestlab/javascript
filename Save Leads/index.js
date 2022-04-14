// Direct approach of calling function using onclick attribute.h
// function saveData() {
//     console.log("Button is clicked from onClick attritbute!");
// }
let myLeads = [];
const input = document.getElementById("text-el");
const content = document.getElementById("content");
const btnEl = document.getElementById("save-el");
const delEl = document.getElementById("delete-el");
const saveEl = document.getElementById("save-tab");
const leadsFromLocalStroage = JSON.parse(localStorage.getItem("myLeads"));

// CONDITION TO CHECK WHETHERE LOCAL STROAGE IN BROWSER IS EMPTY OR NOT
if (leadsFromLocalStroage){
    myLeads = leadsFromLocalStroage;
    render(myLeads);
}

//console.log(leadsFromLocalStroage);
const tabs = [{url: "https://www.linked.com/in/per-harald-borgen/"}];
// FUNCTION TO RENDER VALUES IN HTML PAGE
function render(leads){
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`;
    }
    content.innerHTML = listItems;
}

saveEl.addEventListener("click", function(){
    
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

//DELETE ALL BUTTON TO DELETE ALL LEADS FROM ARRAY
delEl.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

//SAVE LEADS BUTTON TO ADD LEADS IN ARRAY
btnEl.addEventListener("click",function saveData() {
    myLeads.push(input.value);
    input.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
});


// SAVING DATA INTO LOCAL STROAGE IN CAHCE:
// MAKE SURE TO DISABLE THE COMMENTS OF SETTING AND GETTING VALUE FROM STORAGE BEFORE CLEARING IS VALUE OTHERWISE VALUES WILL BE REPEATED AGAIN IN RESULT

// localStorage.setItem("myLeads","www.google.com");
// let localVal = localStorage.getItem("myLeads");
// console.log(localVal);
// localStorage.clear()
//console.log(localVal);

// let newLeads = `["www.google.com"]`;
// newLeads = JSON.parse(newLeads);
// newLeads.push("www.amazon.com")
// console.log(newLeads)
// newLeads = JSON.stringify(newLeads);
// console.log(typeof newLeads);


// function renderLeads (){
//     let listItems = "";
//     for (let i = 0; i < myLeads.length; i++) {
//         // COMPLEX STAGEMENT TO PRINT ONE URL/STRING
//         listItems = "<li><a target='_blank' href='"+myLeads[i]+"'>" +myLeads[i]+"</a></li>";
//         // TEMPLATE STRINGS USING BACKTIC
//         // listItems = `
//         //     <li>
//         //         <a target='_blank' href='${myLeads[i]}'>
//         //             ${myLeads[i]}
//         //         </a>
//         //     </li>`;
//         //console.log(listItems);
//         // ALTERNATE WAY OF ADDITING ELEMENTS IN PAGE INSTEAD OF INNER HTML
//         // const li = document.createElement("li");
//         // li.textContent = myLeads[i];
//         // content.append(li)
//         //console.log("Button is clicked from addEventListener method!");
//     }
//     content.innerHTML = listItems;
//     console.log(content.innerHTML);
// }

// // EXAMPLE FOR TEMPLATE STRING
// let name = "Gourav Kumar";
// let sender = "Mr. Kashyap"
// const message = `Hey ${name}!
                    
//                 How is it going? 
                    
//                 Cheers
//                 ${sender}`

// console.log(message);
// const buyEl = document.getElementById("buy");
// buyEl.innerHTML = "<button id='buynow'>Buy Now </button>";

// const buyNowEl = document.getElementById("buynow");

// buyNowEl.addEventListener("click", function() {
//     buyEl.innerHTML += "<br/><br/> Thanks for buying Proudct!"
//     console.log("Inner HTML Button Clicked!")
// })
    
// OPEN THE BOX WITH ADD EVENT LISTENER
// boxEl = document.getElementById("box");
// boxEl.addEventListener("click", function(){
//     console.log("Here box is opened!")
// })
