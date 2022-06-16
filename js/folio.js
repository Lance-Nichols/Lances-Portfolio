document.getElementById("loadOpen").click();

function openPortfolio(evt, openPortfolio) {
  // Declare all variables
  var p, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (p = 0; p < tabcontent.length; p++) {
    tabcontent[p].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (p = 0; p < tablinks.length; p++) {
    tablinks[p].className = tablinks[p].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(openPortfolio).style.display = "block";
  evt.currentTarget.className += " active";
};


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



