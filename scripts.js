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
    })
/*
    $(".links").eq(0).click(function(){
        $("section").empty();
        alert( "Load was performed." );
        $(".overlay").css('display', 'none');
        $("#nav").css('display', 'inline');
        $("#about-page").css('display', 'inline');
    })
    
    $(".links").eq(1).click(function(){
        $("section").empty();
        $(".overlay").css('display', 'none');
        $("section").load("about.html");
        $("#nav").css('display', 'inline');
       
        $("section").load("about.html");


    })*/
    //menu
    $(".links").eq(2).click(function(){
        $("section").empty();
        $(".overlay").css('display', 'none');
         $("section").load("projects.html");
         $("#nav").css('display', 'inline');
       })
/*
       var wHeight = $(window).innerHeight();
       var siblings = $('.slide').siblings();
       var perset = {};
       var sumHeight = 0;
       for(var i = 0; i<siblings.length; i++) {
         if(siblings[i].dataset.background){
           perset[sumHeight] =  siblings[i].dataset.background;
         }
         else
           perset[sumHeight] =  0;
     
         sumHeight= sumHeight + siblings[i].clientHeight;
       }
       processScroll();
     
       function lessThan(nums, key){
         if(nums == null || nums.length == 0 || key ==0 ) 
           return 0;
         low = 0;
         high = nums.length -1;
         while(low <= high){
             mid = parseInt((low + high) >> 1);
             if(key <= nums[mid]){
                 high = mid - 1;
             }else {
                 low = mid +1;
             }
         }
         return high;
       }
     
       var scroll_pos = 0;
     
       function processScroll() { 
         scroll_pos = $(this).scrollTop();
     
         var presetHeights = Object.keys(perset);
         var x = lessThan(presetHeights,scroll_pos);
         var bgColor = perset[presetHeights[x]];
         if(bgColor) {
           $("body").css({'background-color': bgColor,
                        'transition' : '0.3s all'});

         }
       }
     
       $(document).scroll(processScroll); */

       $(window).scroll(function() {

        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        if(scrollPercent > 0){
            $("body").addClass("changeColor")
       }
       if (scrollPercent < 10) {
          $("body").removeClass("changeColor")
       }

        });

        $(window).scroll(function() {
            $('#cake-img').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 40) {
                    $(this).addClass("slideUp");
                }
            });
        });

});

/*
$(function() {
    const div1 = $(".wrapper");
    $(window).scroll(function () {
       if ($(this).scrollTop() > div1.height()) {
          $("body").addClass("changeColor")
       }
       if ($(this).scrollTop() < div1.height()) {
          $("body").removeClass("changeColor")
       }
    });
 });*/


 

