

$(function(){

  $("#previewForm").load("./template-1.html");
  
  var idName,value,element;
  
  $("input").keyup(function() {
    idName = $(this).data("for"); 
    value = $(this).val();
    $("#" + idName).html(value);
  });
  
  $("input").focus(function() {
    idName = $(this).data("for"); 
    $("#" + idName).addClass("red-border");
    element = document.getElementById(idName);
    element.scrollIntoView({behavior: 'smooth', block: 'center',inline:'center'});
  });

  $("input").focusout(function() {
    idName = $(this).data("for"); 
    $("#" + idName).removeClass("red-border");
  });
  
});


