try {
let isScrolling;
$(window).on('scroll', function() {
    if (isScrolling) {
        clearTimeout(isScrolling);
    }
    
    if ($(window).scrollTop() < 50) {
        $('.navbar').css("opacity", "1");
        $('.navbar').css("pointer-events", "auto");
        return;
    }

    $('.navbar').css("opacity", "0");
    $('.navbar').css("pointer-events", "none");
    
    isScrolling = setTimeout(function() {
        $('.navbar').css("opacity", "1");
        $('.navbar').css("pointer-events", "auto");
    }, 500); 
});
}
catch(error) { console.log(error); }

