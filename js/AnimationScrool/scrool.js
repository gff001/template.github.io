/*
$("").click(function(){
    $("html,body").animate({scrollTop:$("").offset().top},1000);
})

*/

$("#link-ap").click(function(){
    $("html,body").animate({scrollTop:$("#tp-apre").offset().top  - 120},1000);
})
$("#link-cont").click(function(){
    $("html,body").animate({scrollTop:$("#tp-cont").offset().top  - 120},1000);
})
$("#link-mat").click(function(){
    $("html,body").animate({scrollTop:$("#tp-mat").offset().top - 120},1000);
}
)
$("#link-prof").click(function(){
    $("html,body").animate({scrollTop:$("#tp-doc").offset().top - 120},1000);
})


$("#link-if").click(function() {
    window.open("http://www.ifto.edu.br/araguaina");
  });