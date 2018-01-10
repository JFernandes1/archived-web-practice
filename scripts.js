function openNav() {
    document.getElementById("section").style.display = "none";
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("overlay-nav").style.display = "inline"; 
    document.getElementById("nav").style.display = "none";
}

function closeNav() {
    document.getElementById("overlay-nav").style.display = "none"; 
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("nav").style.display = "inline";
    document.getElementById("section").style.display = "inline";
}


$(document).ready(function(){

    $("p").click(function(){
        $(this).hide();
    })
    $("#home-btn").click(function(){
        $("section").empty();
        $(".overlay").css('display', 'none');
        $("#nav").css('display', 'inline');
    }); 

    $(window).scroll(function() {

        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        if(scrollPercent > 0){
            $("body").addClass("changeColor")
        }
        if (scrollPercent < 10) {
            $("body").removeClass("changeColor")
        }
        if (scrollPercent < 20) {
            $("#pencil").addClass("animated slideLeft"); 
        }
    });

    $(window).scroll(function() {
        $('#cake-img').each(function(){
        var imagePos = $(this).offset().top;
        
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 40) {
                $(this).addClass("animated fadeIn");
            }
        });
    });

});



 
