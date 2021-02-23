function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function (e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeImage() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});


/* SHADOWS */

$(function() {                       
  $("#buttonShadow1").click(function() {  
    $('.file-upload-image').addClass("shadow1");
    $('.file-upload-image').removeClass("shadow2");
    $('.file-upload-image').removeClass("shadow3");
  });
  $("#buttonShadow2").click(function() {  
    $('.file-upload-image').removeClass("shadow1");
    $('.file-upload-image').addClass("shadow2");
    $('.file-upload-image').removeClass("shadow3");
  });
  $("#buttonShadow3").click(function() {  
    $('.file-upload-image').removeClass("shadow1");
    $('.file-upload-image').removeClass("shadow2");
    $('.file-upload-image').addClass("shadow3");
  });
});