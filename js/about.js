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
  document.getElementById("defaultOpen").click();

  function openAbout(evt, openAbout) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(openAbout).style.display = "block";
    evt.currentTarget.className += " active";
  };
