$(window).scroll(function () {
  const position = $(this).scrollTop();

  $("section").each(function () {
    const target = $(this).offset().top - 50;
    const id = $(this).attr("id");

    if (position >= target) {
      $("#nav-desktop > li > a").removeClass("active");
      $("#nav-mobile > li > a").removeClass("active");
      $("#nav-desktop > li > a[href=#" + id + "]").addClass("active");
      $("#nav-mobile > li > a[href=#" + id + "]").addClass("active");

      if (id !== "home") {
        $("#navigation").addClass("fixed-nav");
      } else {
        $("#navigation").removeClass("fixed-nav");
      }
    }
  });
});
