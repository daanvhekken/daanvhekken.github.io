// Script to open and close sidebar
function open_sidemenu() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("mobile_overlay").style.display = "block";
}

function close_sidemenu() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("mobile_overlay").style.display = "none";
}