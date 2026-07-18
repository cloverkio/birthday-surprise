function openGift(){


    let gift = document.querySelector(".gift-box");

    let surprise = document.getElementById("surprise");



    gift.innerHTML="🎊";


    gift.style.animation="none";



    setTimeout(()=>{


        surprise.style.display="block";


        createConfetti();


    },500);



}



function createConfetti(){


    for(let i=0;i<50;i++){


        let confetti=document.createElement("div");


        confetti.innerHTML="🎉";


        confetti.style.position="fixed";


        confetti.style.left=Math.random()*100+"vw";


        confetti.style.top="-20px";


        confetti.style.fontSize="30px";


        confetti.style.animation="fall 3s linear";



        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },3000);



    }


}



let photos=[

"photo1.jpeg",
"photo2.jpeg",
"photo3.jpeg",
"birthday.wish.jpeg"

];


let index=0;



setInterval(()=>{


    let image=document.getElementById("slideImage");


    if(image){


        index++;


        if(index>=photos.length){

            index=0;

        }


        image.src=photos[index];


    }


},3000);





let style=document.createElement("style");


style.innerHTML=`

@keyframes fall{

from{

transform:translateY(0);

}


to{

transform:translateY(100vh);

}

}

`;


document.head.appendChild(style);