// let background = document.querySelectorAll("nav_background_stripes")
var background = document.getElementsByClassName("nav_background_stripes");
const myname = document.getElementsByClassName("name");
const title = document.getElementsByClassName("title");
const tab = document.getElementsByClassName("demopages-tabs");
const resume = document.getElementsByClassName("resume");
const nav = document.getElementsByClassName("navarea");

let elements = [myname, title, tab, resume]
let state = false;

function openbackground(background) {
    if (background.style.top != "0vh")
    {
        background.style.top = "0vh"
        // console.log("close")
    }
    else
    {
        background.style.top = "100vh"
        // console.log("open")
    }
}



function blendelement(element) {
    if (element.style.opacity != "1")
    {
        element.style.opacity="1";
    }
    else
    {
        element.style.opacity="0";
    }
    console.log("done")
}

function displaytoggle(element) {
    if (element.style.visibility != "visible")
    {
        element.style.visibility="visible";
    }
    else
    {
        element.style.visibility="hidden";
    }
    console.log("done")
}


function navtoggle() {
    console.log(elements)
    // displaytoggle(nav);
    if (state === false)
    {
    var start = 1;
    var after = 0;
    for(var i = 0; i < 4; i++){
        setTimeout(openbackground, start, background[i]);
        start += 50;
        after = start;
    }

    after += 1000;
    // setTimeout(blendelement, after, myname[0])
    for (var i = 0; i < elements.length; i++){
        setTimeout(blendelement, after, elements[i][0]);
        after += 50;
    }
    state = true;
    }
    else {
        var start = 1;
        var after = 1;
        // setTimeout(blendelement, after, myname[0])
        for (var i = 0; i < elements.length; i++){
            setTimeout(blendelement, after, elements[i][0]);
            after += 50;
        }
        for(var i = 0; i < 4; i++){
            setTimeout(openbackground, start, background[i]);
            start += 50;
        }
        state = false;
    }
    // displaytoggle(nav);
}