// gets positions of elements (top)
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY
    };
}

// position of main content (below video loop)
var mainDiv = document.getElementById('mainContent')
console.log(getOffset(mainDiv).top)

// add conditional formatting when scrolled past main content
$(function () {
    $(document).scroll(function () {
        var $nav = $(".topbar-fixed");
        $nav.toggleClass('scrolled', $(this).scrollTop() > getOffset(mainDiv).top);
      });
  });

var initalPos = window.scrollY;
window.onscroll = function() {
var currPos = window.scrollY;
if (currPos < 750) {
    document.getElementById("topbar").style.top = "0";
}
else if (initalPos > currPos) {
    document.getElementById("topbar").style.top = "0";
} else {
    document.getElementById("topbar").style.top = "-100px";
}
initalPos = currPos;
}