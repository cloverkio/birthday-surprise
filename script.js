const giftBtn = document.getElementById("giftBtn");
const popup = document.getElementById("popup");


// Open Gift
giftBtn.addEventListener("click", function(){

    popup.style.display = "block";

    createConfetti();

});


// Close Popup
function closePopup(){

    popup.style.display = "none";

}



// Confetti Function

function createConfetti(){

    for(let i = 0; i < 80; i++){

        let confetti = document.createElement("div");

        confetti.innerHTML = "🎊";

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
        Math.random() * 25 + 15 + "px";


        confetti.style.animation =
        "fall 3s linear";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },3000);

    }

}



// Firework when clicking screen

document.addEventListener("click", function(e){


    let firework = document.createElement("div");


    firework.innerHTML = "🎆";


    firework.style.position = "fixed";


    firework.style.left = e.clientX + "px";

    firework.style.top = e.clientY + "px";


    firework.style.fontSize = "50px";


    firework.style.animation =
    "explode 1s ease";


    document.body.appendChild(firework);



    setTimeout(()=>{

        firework.remove();

    },1000);


});



// Add Animation CSS

let style = document.createElement("style");

style.innerHTML = `


@keyframes fall{

from{

transform:translateY(0) rotate(0deg);

}


to{

transform:translateY(100vh) rotate(360deg);

}

}



@keyframes explode{


0%{

transform:scale(0);

opacity:0;

}


50%{

transform:scale(1.5);

opacity:1;

}


100%{

transform:scale(0);

opacity:0;

}


}


`;


document.head.appendChild(style);