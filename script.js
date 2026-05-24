const texts=[

"Flutter Developer",
"Android",
"iOS",
"Web"

];

let i=0;

setInterval(()=>{

document.getElementById(
"typing"
).innerText=texts[i];

i++;

if(i>=texts.length){

i=0;
}

},1500);
