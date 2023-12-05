var iframe = document.getElementsByTagName("iframe")[0];
if (iframe) {
    iframe.contentDocument.addEventListener("keypress", function(evt) {
        console.log("iframe keypress: " + evt.which);
        alert("button pressed");
    }, false);
}