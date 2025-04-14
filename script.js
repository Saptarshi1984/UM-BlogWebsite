/* function dark_mode() {

    const bgcolor = document.querySelector('body');
    
    bgcolor.style.background = "Black";
    bgcolor.style.color = 'white'; 
} */

function drop_menu () {

    const x = document.getElementById('mobileLinks');

    if(x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function submitComment() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail");
    const comment = document.getElementById("userComment");

    

    const divElement = document.createElement("div");
    divElement.innerHTML = `<img src="https://fakeimg.pl/80x80/cccccc/909090" alt="" width="80px" height="80px" style="border-radius: 50%;"><h3>${name}</h3><p>${comment}</p>`;

    document.getElementById("commentBox").appendChild(divElement);

}