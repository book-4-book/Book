$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(".profile-pic").attr("src", e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on("change", function(){
        readURL(this);
    });
    
    $(".upload-button").on("click ", function() {
       $(".file-upload").click();
    });
});


    $(document).ready(function(){
        $('#but_add').click(function(){

    // Create clone of <div class='input-form'>
        var newel = $('.input-form:last').clone();

    // Add after last <div class='input-form'>
        $(newel).insertAfter(".input-form:last");
     });

    $('.txt').focus(function(){
        $(this).css('border-color','red');
    });

    $('.txt').focusout(function(){
        $(this).css('border-color','initial');
    });

    });