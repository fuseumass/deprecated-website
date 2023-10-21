$(function () {
    $(document).scroll(function () {
        var $nav = $(".topbar-fixed");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });