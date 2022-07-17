$(document).ready(function(){

   //cursor
   let mousecursor = document.querySelector(".cursor");
   window.addEventListener('mousemove',cursor);

   function cursor(e){
    // console.log(e);
    mousecursor.style.top = e.pageY + "px";
    mousecursor.style.left = e.pageX + "px";
   }

    

    //navbutton
    $(".navbuttons").click(function(){
        $(this).toggleClass('crossxs')
    })

    let utc = new Date().getFullYear();
    document.getElementById('display').textContent = utc;

    //uppericon
    $(window).scroll(function(){
     let getscrolltop = $(this).scrollTop();
     console.log(getscrolltop);

     if(getscrolltop >= 1500){
        
        $(".upper-icons").show('clip','slow')
     }else{
        $(".upper-icons").hide('clip','slow')
     }
    })

    $(".digiticons").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        
    })

    //signup
    

});

let menusearch = document.querySelector('.menusearchs');
let searchbox = document.querySelector('.search-box')
menusearch.addEventListener('click',function(){
    searchbox.classList.toggle('active');
})