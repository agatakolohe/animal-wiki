$(document).ready(function () {
  $("form#critters").submit(function (event) {
    event.preventDefault();
    const animal = $("input:radio[name=animal]:checked").val();

    if (animal === "cat") {
      $(".cat-wiki").show();
      $(".rac-wiki, .octo-wiki").hide();
    } else if (animal === "raccoon") {
      $(".rac-wiki").show();
      $(".cat-wiki, .octo-wiki").hide();
    } else {
      $(".octo-wiki").show();
      $(".rac-wiki, .cat-wiki").hide();
    }
  });
});
