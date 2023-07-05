$(document).ready(function () {
  $("li").click(function () {
    // Remove active class from all list items
    $("li").removeClass("active");
    // Add active class to the clicked list item
    $(this).addClass("active");
    var icerik = $(this).find(".content").html();
    $("#here-content").html(icerik);
  });
});

// $(document).ready(function () {
//   $("li").click(function () {
//     var selectedText = $(this).text().trim();
//     $(".content").addClass("hidden");
//     $(".right .content:contains('" + selectedText + "')").removeClass("hidden");
//     $("li").removeClass("active");
//     $(this).addClass("active");
//   });
// });

//$(document).ready(function () {
//   $("#hover-me").hover(
//     function () {
//       $(this).append($("<span>***</span>"));
//       $(this).toggleClass("blue");
//     },
//     function () {
//       $(this).find("span").last().remove();
//       $(this).removeClass("blue");
//     }
//   );

//   $("li").click(function () {
//     $("li").removeClass("active");
//     $(this).toggleClass("active");
//   });

//   $("#click-me").click(function () {
//     $(this).hide();
//   });
//   $("#double-click-me").dblclick(function () {
//     $(this).hide();
//   });
//   $("#leave-me-alone").mouseout(function () {
//     $(this).hide();
//   });
//});
