$(document).ready(function(){

    function hoverLeft(){
        $("#portfoliobg.left").css("opacity", "1");
    }
    
    function hoverMid(){
        $("#portfoliobg.mid").css("opacity", "1");
    }
    
    function hoverRight(){
        $("#portfoliobg.right").css("opacity", "1");
    }
    
    function reset(){
        $("#portfoliobg").css("opacity", "0");
    }
    
    $("#portfolio #left").mouseenter(function(){
        $("#portfoliobg.left").css("opacity", "1");
        console.log("a")
    });
    
    $("#portfolio #left").mouseleave(function(){
        $("#portfoliobg.left").css("opacity", "0");
        console.log("a")
    });
    
    $("#portfolio #mid").mouseenter(function(){
        $("#portfoliobg.mid").css("opacity", "1");
    });
    
    $("#portfolio #mid").mouseleave(function(){
        $("#portfoliobg.mid").css("opacity", "0");
    });
    
    $("#portfolio #right").mouseenter(function(){
        $("#portfoliobg.right").css("opacity", "1");
    });
    
    $("#portfolio #right").mouseleave(function(){
        $("#portfoliobg.right").css("opacity", "0");
    });
    
});