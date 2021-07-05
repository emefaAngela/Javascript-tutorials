
//  getting the buttons from the html page
const tab1Button = document.querySelector("#tab1-btn");
const tab2Button = document.querySelector("#tab2-btn");
const tab3Button = document.querySelector("#tab3-btn");

// getting the corresponding sections for the tabs
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");



function showTab(id) {


    // hide all the divs in the tabs-body
    const allDivs = document.querySelectorAll(".tabs-content");// getting all the divs
    allDivs.forEach(element => element.style.display = "none") // for each div we want to hide it 
    // show the tab1 div
    const tab = document.querySelector(id);

    tab.style.display = 'block';
}


function showTab2() {
    // hide all the divs in the tabs-body

    // show the tab2 div
}


function showTab3() {
    // hide all the divs in the tabs-body

    // show the tab3 div
}





