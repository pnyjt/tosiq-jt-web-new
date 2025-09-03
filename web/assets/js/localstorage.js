
function applyTheme() {
    document.body.style.backgroundColor = localStorage.getItem('bgcolor');
    document.body.style.color = localStorage.getItem('txtcolor');
    document.getElementById("heading").style.color = localStorage.getItem('headingcolor');
}

// background color
function changeBg() {
    var color = document.getElementById("bg-color").value;
    // console.log(color);
    document.body.style.backgroundColor = color;

    // store color val on browser side
    localStorage.setItem('bgcolor', color);
}

// text color
function changeTextColor() {

    var color = document.getElementById("text-color").value;
    // console.log(color);
    document.body.style.color = color;
    // store color val on browser side
    localStorage.setItem('txtcolor', color);
}

// heading color
function changeHeadingColor() {
    var color = document.getElementById("heading-color").value;
    // console.log(color);
    document.body.style.color = color;
    // store color val on browser side
    localStorage.setItem('headingcolor', color);
}