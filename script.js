// Overengineered theme switcher :)
switch (localStorage.getItem("Aļļis-theme")) {
    case "pink":
        applyTheme(pinkTheme);
        break;
    case "blue":
        applyTheme(blueTheme);
        break;
    case "yellow":
        applyTheme(yellowTheme);
        break;
    default:
        applyTheme(defaultTheme);
}

$("#default-theme").click(function(){
    localStorage.setItem("Aļļis-theme", "default");
    applyTheme(defaultTheme);
});

$("#pink-theme").click(function(){
    localStorage.setItem("Aļļis-theme", "pink");
    console.log(localStorage.getItem("Aļļis-theme"));
    applyTheme(pinkTheme);
});

$("#blue-theme").click(function(){
    localStorage.setItem("Aļļis-theme", "blue");
    applyTheme(blueTheme);
});

$("#yellow-theme").click(function(){
    localStorage.setItem("Aļļis-theme", "yellow");
    applyTheme(yellowTheme);
});


function applyTheme(theme) {
    $(':root').css({
        '--text-color': theme.text_color,
        '--text-alt': theme.text_alt,
        '--dark-accent': theme.dark_accent,
        '--light-accent': theme.light_accent,
        '--accent-1': theme.accent_1,
        '--accent-2': theme.accent_2,
        '--invis-1-accent': theme.invis_1_accent,
        '--invis-2-accent': theme.invis_2_accent
    });
}

// SLIDESHOW
let currentSlide = 0;
const slides = $("#slideshow .container img");

function showSlide(n) {
    slides.removeClass("active");
    slides.eq(n).addClass("active");
}

$("#next-slide-btn").click(function(){
    nextSlide();
    startTimer();
});
$("#prev-slide-btn").click(function(){
    nextSlide();
    startTimer();
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
// Lai kad uzspiestu pogu taimeris sakas no 0
let timer;
function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 1000);
}
startTimer();

// SCROLL TO TOP

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        //Šitā apiet nevis vienkārši fadeIn jo display flex tiek izmantots lai iecentretu tekstu
        $('#scroll-top-btn')
        .css({
            "display": "flex",
            "opacity": "0"
        })
        .animate(
            {opacity: 1}, 200
        );
    } else {
        $('#scroll-top-btn').fadeOut(200);
    }
});

$('#scroll-top-btn').click(function() {
    $('body,html').animate({scrollTop: 0}, 200);
    $('#scroll-top-btn').fadeOut(200);
});