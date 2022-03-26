

$(function(){

  $("#previewForm").load("./template-1.html"); 
  
  $("input").keyup(function() {
    var idName = $(this).data("for"); 
    var value = $(this).val();
    $("#" + idName).html(value);
  });
  

  $("input").focus(function() {
    var idName = $(this).data("for"); 
    $("#" + idName).addClass("red-border");
    var element = document.getElementById(idName);
    element.scrollIntoView({ behavior: 'smooth', block: 'center',inline:'center'});
  });

  $("input").focusout(function() {
    var idName = $(this).data("for"); 
    $("#" + idName).removeClass("red-border");
  });
  
});






// const element = document.getElementById("blabla");
//   element.scrollIntoView();
