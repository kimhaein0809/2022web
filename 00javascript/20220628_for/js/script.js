console.log('ok');

document.getElementsByClassName("box")[0].innerHTML = "안녕하세요.";

document.getElementsByClassName("btn")[0].addEventListener("click",function(){
    console.log('click')
    document.getElementsByClassName("box")[0].innerHTML = "안녕1.";
})