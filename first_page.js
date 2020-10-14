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




let addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", function() {
  let boxes = document.getElementById("boxes");
  let clone = boxes.firstElementChild.cloneNode(true);
  boxes.appendChild(clone);
});