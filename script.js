const words = [

"Flutter Developer",
"Android Apps",
"iOS Apps",
"Web Experiences"

];

let index = 0;

const typing = document.getElementById(
'typing'
);

setInterval(()=>{

typing.innerText=words[index];

index++;

if(index>=words.length){

index=0;
}

},1500);



const reveals=document.querySelectorAll(
'.reveal'
);

window.addEventListener(
'scroll',
()=>{

reveals.forEach(
card=>{

let top=
card.getBoundingClientRect().top;

if(
top < window.innerHeight-100
){

card.style.opacity=1;

card.style.transform=
'translateY(0)';
}

});
}
);
