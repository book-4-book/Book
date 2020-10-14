$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });




  /*search bar*/
$(document).ready(function(){
    $(".btn").click(function(){
        $(".input").removeClass("active");
    });
});




