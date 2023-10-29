$(function () {
    $(document).scroll(function () {
        var $nav = $(".topbar-fixed");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 700);
      });
  });

var initalPos = window.scrollY;
window.onscroll = function() {
var currPos = window.scrollY;
if (currPos < 100) {
    document.getElementById("topbar").style.top = "0";
}
else if (initalPos > currPos) {
    document.getElementById("topbar").style.top = "0";
} else {
    document.getElementById("topbar").style.top = "-50px";
}
initalPos = currPos;
}