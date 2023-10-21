$(function () {
    $(document).scroll(function () {
        var $nav = $(".topbar-right");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });