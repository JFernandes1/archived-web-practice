function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("overlay-nav").style.display = "inline"; 
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("overlay-nav").style.display = "none"; 
}


$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    })
    
    $(".links").eq(0).on("click", function(){
        $("section").empty();
        $(".overlay").css('display', 'none');
        
        $("section").load("about.html");
    })
    //menu
    $(".links").eq(1).on("click", function(){
        $("section").empty();
         $("section").load("projects.html");
       })
});
