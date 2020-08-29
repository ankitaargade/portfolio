$(document).ready(function () {
  $("body").on("scroll", onScroll);
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#navbarNav #menu-list a").each(function () {
    var currLink = $(this);
    console.log(currLink);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#navbarNav ul li a").removeClass("active");
      currLink.addClass(" active");
    } else {
      // currLink.removeClass("active");
    }
  });
}

let nav_offset = $(".my_header").height() + 10;
// console.log("main.js");
// console.log(nav_offset);
function navbarFixed() {
  if ($(".my_header").length) {
    console.log("here");
    $("body").scroll(function () {
      let scroll = $("body").scrollTop();
      // console.log("here2");
      if (scroll >= nav_offset) {
        $(".my_header .my-navbar").addClass("navbar_fixed");
      } else {
        $(".my_header .my-navbar").removeClass("navbar_fixed");
      }
    });
  }
}
navbarFixed();

// to maintaine active class between links

var linksContainer = document.getElementById("menu-list");
console.log(linksContainer);
// Get all links li within ul
var lis = linksContainer.getElementsByClassName("nav-item");
console.log(lis);
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

// Scroll to top when we refresh the page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// Copyright &copy;2020 All Rights Reserved | This template is made
//               with by Ankita Argade

let copyright = document.getElementById("copyright");
let year = new Date();
let copyrightSymbol = "\u00A9";
console.log("YEAR=", year.getFullYear());
copyright.innerText = `Copyright ${copyrightSymbol} ${year.getFullYear()}
                    All Rights Reserved | This template website is created by Ankita Argade`;
function myFunction(x) {
  x.classList.toggle("change");
}
// ++++++++++++++++++++
