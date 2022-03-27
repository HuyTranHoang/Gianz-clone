

$(function () {

  $("#previewForm").load("./template-1.html");

  var idName, value, element;

  $("input").keyup(function () {
    idName = $(this).data("for");
    value = $(this).val();
    $("#" + idName).html(value);
  });

  $("input").focus(function () {
    idName = $(this).data("for");
    $("#" + idName).addClass("red-border");
    element = document.getElementById(idName);
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  });

  $("input").focusout(function () {
    idName = $(this).data("for");
    $("#" + idName).removeClass("red-border");
  });

  // Input Form
  var $inputItem = $(".js-inputWrapper");
  $inputItem.length && $inputItem.each(function () {
    var $this = $(this),
      $input = $this.find(".formRow--input"),
      placeholderTxt = $input.attr("placeholder"),
      $placeholder;

    $input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
      $input.attr("placeholder", ""),
      $placeholder = $this.find(".placeholder"),

      $input.val().length ? $this.addClass("active") : $this.removeClass("active"),

      $input.on("focusout", function () {
        $input.val().length ? $this.addClass("active") : $this.removeClass("active");
      }).on("focus", function () {
        $this.addClass("active");
      });
  });




});


