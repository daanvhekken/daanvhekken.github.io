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


// Script for opening modals
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}