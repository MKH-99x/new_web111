//scroll functons...
function scrol(){
    window.scrollTo({top: 0, behavior: "smooth"});
}

window.onscroll= function(){
    if(window.scrollY > 1000){
        document.getElementById('gototop').style.display= 'block';
    }else{
        document.getElementById('gototop').style.display= 'none';
    }
}
