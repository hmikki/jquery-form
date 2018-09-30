$(document).ready(function(){
    
    $(".btn").click(function(){
     $(this).hide();
     $(".shadow").show(200);
     $(".container").show(400);
    });
    
 $(".shadow").click(function(){
     $(this).hide();
     $(".container").hide();
     $(".btn").show(200);
 });

$(".mainbtn").click(function(){
    $(this).hide();
    $(".container").hide();
    $(".btn").show(200);
});
        
});