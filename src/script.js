$('.toggle').click(function(){
  $(this).toggleClass('on');
  $('.toggle-nav').slideToggle();
});

var next = 2;
if($(window).width() <= 700) {
  $(function(){
      setInterval(function(){
          if(next == 1) $("#4").toggleClass("hidden");
         $("#" + (next-1)).toggleClass("hidden");
         if(++next == 5) {
             //$("#4").toggleClass("hidden");
             $("#" + (next-1)).toggleClass("hidden");
             next = 1;
         } else $("#" + (next-1)).toggleClass("hidden");
      }, 3000);
  });
}
