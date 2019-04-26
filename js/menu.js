function ativaScrollSuave(selector) {
    $(selector).click(function(event){
        event.preventDefault();
        
        var target = $(this).attr('href');
        
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000)
 });
}

ativaScrollSuave('a[href*=home]');
ativaScrollSuave('a[href*=about]');
ativaScrollSuave('a[href*=services]');
ativaScrollSuave('a[href*=contact]');