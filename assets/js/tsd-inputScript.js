

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

  // Input File

  const input = document.querySelector('#slider-input');
  const preview = document.querySelector('.slider-input-preview');
  input.addEventListener('change', updateImageDisplay);
  // input.style.opacity = 0;

  function updateImageDisplay() {
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }

    const curFiles = input.files;
    if (curFiles.length === 0) {
      const para = document.createElement('p');
      para.textContent = 'Chưa có file được chọn để upload';
      preview.appendChild(para);
    } else {
      if (validFileType(curFiles[0])) {
        const para = document.createElement('p');
        para.textContent = `File name ${curFiles[0].name}`;
        $('#slider_pic').attr( "style", 'background-image: url("' + URL.createObjectURL(curFiles[0]) +'"); background-attachment: fixed;');
      } else {
        para = document.createElement('p');
        para.textContent = `File name ${curFiles.name}: Định dạng ảnh không hợp lệ, vui lòng chọn lại.`;
        preview.appendChild(para);
      }
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];

  function validFileType(file) {
    return fileTypes.includes(file.type);
  }


});


