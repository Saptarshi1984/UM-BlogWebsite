/* function dark_mode() {

    const bgcolor = document.querySelector('body');
    
    bgcolor.style.background = "Black";
    bgcolor.style.color = 'white'; 
} */
    let count = 0;
    

function drop_menu () {

    const x = document.getElementById('mobileLinks');

    if(x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function submitComment() {
   
    count++;
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const comment = document.getElementById("userComment").value;    

    const divElement = document.createElement("div");

    divElement.innerHTML = `<img src="https://fakeimg.pl/80x80/cccccc/909090" alt="" width="80px" height="80px" style="border-radius: 50%;">
                            <h3>${name}</h3><p>${comment}</p>                                                       
                            <i onclick="funcLike(${count})" id="liked-${count}" class="fa-regular fa-thumbs-up"></i>                            
                            <hr>`;

    document.getElementById("commentBox").appendChild(divElement);
    divElement.classList.add("commentStyle");
    
    document.getElementById("userName").value= "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userComment").value= "";   
    
}

const funcLike = (x) => {
    
    document.getElementById(`liked-${x}`).classList.toggle("fa-solid");    
    
}
