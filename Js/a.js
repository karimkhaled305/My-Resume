// $(window).scroll(()=>{
//     $('nav').css('background-color','white')
// })

var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1 ){
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

$('#portfolio').click((e)=>{
    $('.parent').removeClass('d-none')
 
})
$('#close').click(()=>{
    $('.parent').addClass('d-none')
})
$('#email').click(()=>{
    window.open('mailto:mrprof305922@gmail.com?subject=subject&body=body')
})

$('#sendFrom').click(()=>{
    window.open('mailto:mrprof305922@gmail.com?subject=subject&body=body')
})
