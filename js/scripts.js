// Script to open and close sidebar
function open_sidemenu() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function close_sidemenu() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function download_pdf() {
    var link = document.getElementById('#download_pdf_button');
    link.href = url;
    link.download = '/recources/Profile.pdf';
    link.dispatchEvent(new MouseEvent('click'));
}
