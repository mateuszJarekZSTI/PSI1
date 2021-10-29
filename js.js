const liczba1=document.getElementById("liczba1");
const liczba2=document.getElementById("liczba2");
const btn = document.querySelectorAll("button")[0];
const p=document.querySelectorAll("p")[0];

function funkcja()
{
    p.innerHTML=parseInt(liczba1.value)+parseInt(liczba2.value);
}
btn.addEventListener("onclick",funkcja);