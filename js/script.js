$(document).ready(function(){
    $(".scrollTo").click(function() {
        var elementClick = $(this).attr("href");
        console.log(elementClick);
        var destination = $(elementClick).offset().top - 90;
        $("html,body").animate(
          {
            scrollTop: destination
          },
          1000
        );
        return false;
      });
})