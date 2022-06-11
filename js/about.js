$(document).ready(function(){
    $('.toggle').click(function(){
        $('#sideMenu').toggleClass('active');
    });
  });
  
  $(".navMenuBars").on("click", function(){
    $(".navMenuBars").toggleClass("active");
    if ($(".navMenuBars").hasClass("active")) {
      $(".navMenuBars").removeClass("fa-bars").addClass("fa-times");
    }
    else {
      $(".navMenuBars").removeClass("fa-times").addClass("fa-bars");
    }
  });
  
  $(".toggle").click(function(){
    $(".toggle").addClass("active");
  });

  LottieInteractivity.create({
    player:'#emailMeButton',
    mode:"cursor",
    actions: [
        {
            type: "toggle"
        }
  ]
  });