function dark_modeToggle() {

document.body.classList.toggle("darkMode");

const icon = document.getElementById("modeIcon");
if (icon.classList.contains("fa-moon")) {
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
} else {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}
}


   
    

/* Mobile menu related javaScript functions. */

function drop_menu () {

    const x = document.getElementById('mobileLinks');

    if(x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

/* Comment section related javaScript functions. */

let count = 0;
let btnX = 0;

function submitComment() {
   
    count++;
    btnX++;
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const comment = document.getElementById("userComment").value;    

    const divElement = document.createElement("div");

    divElement.innerHTML = `<img src="https://fakeimg.pl/80x80/cccccc/909090" alt="" width="80px" height="80px" style="border-radius: 50%;">
                            <h3>@${name}</h3><p>${comment}</p>
                            <div id="like-reply">                                                      
                            <i onclick="funcLike(${count})" id="liked-${count}" class="fa-regular fa-thumbs-up"></i>                            
                            <a onclick="replyComment(${count})" id="replyBtn-${count}"><span>Reply</span></a>
                            </div>
                            <div id="replies-${count}"></div>
                            <div id="replySec-${count}" class="inputStyle"></div>     
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
const replyComment = (x) => {    
    const reply = document.getElementById(`replySec-${x}`);
    reply.innerHTML = `<input id="replyInput-${x}" type="text"><button id="postBtn-${x}" type="button" onclick="postReply(${x})">Post</button><button id="canBtn-${x}" type="button" onclick="cancel(${x})">Cancel</button>`;
    document.getElementById(`replySec-${x}`).appendChild(reply);
}
const postReply = (x) => {
const replied = document.getElementById(`replyInput-${x}`).value;
const rMsg = document.createElement('p');
rMsg.innerHTML = `<span id="x-${x}">${replied}</span>`;
document.getElementById(`replies-${x}`).appendChild(rMsg);
cancel(x);
}
const cancel = (x) => {
     document.getElementById(`replyInput-${x}`).remove();
     document.getElementById(`postBtn-${x}`).remove(); 
     document.getElementById(`canBtn-${x}`).remove();   
}

