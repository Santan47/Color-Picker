//$(document).ready(function () {
function color(){
    var color = document.getElementById("inputColor").value;
    document.body.style.backgroundColor = color;
    document.getElementById("inputText").value = color;
}

function copy() {
    let hex = document.getElementById("inputText");
    hex.select();
    document.execCommand("copy");
    
    alert("Copied HEX value");
    }

//});
