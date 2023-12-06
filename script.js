function loadOverlayContent() {
    // Use AJAX to load content from overlay.html
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'overlay1.html', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('overlayContent').innerHTML = xhr.responseText;
            showOverlay();
        }
    };

    xhr.send();
}

function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}
function alertit(){
    alert("Test it alert");
}