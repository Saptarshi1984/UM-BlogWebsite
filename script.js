function dark_mode() {

    const bgcolor = document.querySelector('body');
    
    bgcolor.style.background = "Black";
    bgcolor.style.color = 'white'; 
}

function drop_menu () {

    const x = document.getElementById('mobileLinks');

    if(x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}