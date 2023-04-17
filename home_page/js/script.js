//fade aos 초기화
AOS.init();




//mouse
$(window).mousemove(function(){
    $("#ms>img").css({
        width: '100px',  
        position: 'absolute', 
        zIndex : '9999',  
        left: event.pageX+5,  
        top: event.pageY+5,  
    });
});




//****scroll_up****//
//scrollup
$(function(){
    $(".scrollUp").click(function(){
    $(window).scrollTop(0);
    });
});

//scrollshow
const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>450){
        scrollUp.classList.add("active");
    }else{
        scrollUp.classList.remove("active");
    }
});
//****scroll_up****//




//****header_scroll****//
//header scroll fix
$(function(){
    $("header").each(function(){
        let win = $(window);
        let header = $(this);
        let spot = header.offset().top;

        win.scroll(function(){
            if(win.scrollTop()>spot){
                header.addClass("active")
            }else{
                header.removeClass("active")
            }
        }); 
    });
});

//scroll ~ icons display none
$(function(){
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>900) $('.navbar__icons').addClass('active');
    else $('.navbar__icons').removeClass('active');
    });
});

//resize 1200 down scroll ~ icons display block
$(function(){
    $(window).resize(function(){
        let res=outerWidth;
        if(res>=1200){
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                if(scrollTop>400) $('.navbar__icons').addClass('active');
                else $('.navbar__icons').removeClass('active');
            });
        }else{
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                if(scrollTop>400) $('.navbar__icons').removeClass('active');
                else $('.navbar__icons').removeClass('active');
            });
        }
    });
});
//****header_scroll****//

//menu li hover ~ submenu slideDown
$(function(){
    $('.navbar__menu>li,.navbar__menus>li').mouseover(function(){
        $(this).find('.submenu',this).stop(true).slideDown(700);
    }).mouseout(function(){
        $(this).find('.submenu').stop(true).slideUp(700);
    });
});

//search click ~ searchbox display block / menu display none
$(function(){
    $(".search").on('click',function(){
        $(".menus").toggleClass("active");
        $(".search-box").toggleClass("active");
    });
});

//resize mobile : search click ~ hambtn display none
let ww = $(window).width();
checkResize();
function checkResize() {
    if (ww <= 430) {
    $(".search").on('click',function(){
        $(".navbar__toggleBtn").toggleClass("activemo");
    });
    }
    else{
    $(".search").on('click',function(){
        $(".navbar__toggleBtn").removeClass("activemo");
    });
    }
}
//****header****//




//****nav_ham****//
//hammenu click ~ nav_ham display block
function ToggleMenu(){
    const menutoggle = document.querySelector('.navbar__toggleBtn');
    const navigation_ham = document.querySelector('.navigation_ham');
    // hammenu icon change
    menutoggle.classList.toggle('active')
    // hammenu list display block
    navigation_ham.classList.toggle('active')
}

//nav_ham li hover ~ img change****//
function changeImage(anything){
    document.getElementById('ham_img').src = anything;
}
//****nav_ham****//




//****nav_mobile****//
//nav_mo click ~ move
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('activenavi'));
    this.classList.add('activenavi');
}
list.forEach((item)=>
item.addEventListener('click',activeLink));
//****nav_mobile****//




//****main****//
//main_slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    autoplay:{
    delay:2500,
    disableOnInteraction:false,
    },
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});
//****main****//




//****s2****//
//slider
$(".variable").slick({
    dots: false,
    arrow:false,
    infinite: true,
    variableWidth: true,
    autoplay:true,
    speed:6000,
    autoplaySpeed:4000,
});
//****s2****//




//****s3****//
//event_slider
$(".events").slick({
    dots: false,
    arrow:true,
    infinite: true,
    variableWidth: true,
    autoplay:false,
    speed:1200,
    autoplaySpeed:1200,
});
//event_menu_slider
$(".break").slick({
    dots: false,
    arrow:true,
    infinite: true,
    variableWidth: true,
    autoplay:false,
    speed:1200,
    autoplaySpeed:1200,
});
//****s3****//




//****s4****//
//date
let count = new Date("May 31, 2023 23:59:59").getTime();
console.log(count);

let counter = setInterval(() =>{
    //get date now
    let datenow = new Date().getTime();

    //find the date
    let datediff = count -datenow;

    //get time units
    let days = Math.floor(datediff / (1000*60*60*24));
    let hours = Math.floor((datediff % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((datediff % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((datediff % (1000*60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    if(datediff<0){
        clearInterval(counter);
    }
},1000);
//****s4****//




//****s5****//
//text rotate
const text = document.querySelector('.texts p');
text.innerHTML = text.innerText.split("").map(
    (char,i) =>
    `<span style="transform:rotate(${i*17}deg)">${char}</span>`
).join("")
//****s5****//