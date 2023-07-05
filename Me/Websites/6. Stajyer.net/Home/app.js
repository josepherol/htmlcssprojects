$(document).ready(function () {
  // When hovering over the link, show/hide the wrapper-menu
  $("#giris-yap").hover(
    function () {
      // On hover-in, display the wrapper-menu
      $("#hidder").removeClass("hidden");
    },
    function () {
      // On hover-out, hide the wrapper-menu
      $("#hidder").addClass("hidden");
    }
  );
});
