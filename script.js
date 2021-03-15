var fImg = ["https://wallpapercave.com/wp/wp4445437.jpg", "https://wallpapercave.com/wp/wp4741013.jpg", "https://wallpapercave.com/wp/wp4741014.jpg"];
var sImg = ["https://wallpapercave.com/wp/wp4589844.jpg", "https://wallpapercave.com/wp/wp4741022.png", "https://wallpapercave.com/wp/wp4531358.jpg"];

var first = document.getElementById("first");
var second = document.getElementById("second");

var n = 0;



/*for first */

function comeFirst() {
    first.style.backgroundImage = "url(" + fImg[n] + ")";
    n > 1 ? n = 0 : n++;
}

setTimeout(function() {
    setInterval(comeFirst, 5000)
}, 2000);



/*for second */


function comeSecond() {
    second.style.backgroundImage = "url(" + sImg[n] + ")";
    n > 1 ? n = 0 : n++;
}

setInterval(comeSecond, 5000);