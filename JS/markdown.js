
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.querySelector("head").innerHTML+="<link rel='stylesheet' href='../CSS/markdown.css'>"

// var tmp = document.getElementById("preview-contents").innerHTML;
// tmp = "<a href='../notes.html'>Back</a>" + tmp;
// document.getElementById("preview-contents").innerHTML = tmp;
{/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}