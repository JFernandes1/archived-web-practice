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
    $(".links").eq(0).on("click", function(){
        $("section").empty();
        $(".overlay").css('display', 'none');
    })
    
    $(".links").eq(1).on("click", function(){
        $("section").empty();
        $(".overlay").css('display', 'none');
        $("section").load("about.html");
    })
    //menu
    $(".links").eq(2).on("click", function(){
        $("section").empty();
        $(".overlay").css('display', 'none');
         $("section").load("projects.html");
       })
});
