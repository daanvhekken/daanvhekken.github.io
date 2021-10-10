// Script to open and close sidebar
function open_sidemenu() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("mobile_overlay").style.display = "block";
    var burgermenuClosed = document.getElementById("nav-icon");
    burgermenuClosed.classList.add("open");
    // $('#nav-icon').addClass('open');
}

function close_sidemenu() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("mobile_overlay").style.display = "none";
    var burgermenuOpen = document.getElementById("nav-icon");
    burgermenuOpen.classList.remove("open");
    // $('#nav-icon').removeClass('open');
}