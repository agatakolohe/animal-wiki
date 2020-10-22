$(document).ready(function () {
  $("form#critters").submit(function (event) {
    event.preventDefault();
    const home = $("input:radio[name=home]:checked").val();
    const food = $("input:radio[name=food]:checked").val();
    const legs = $("input:radio[name=legs]:checked").val();
    const humans = $("input:radio[name=humans]:checked").val();

    if (home === "house" && food === "fish") {
      $(".cat-wiki").show();
      $(".rac-wiki, .octo-wiki, .dog-wiki, .dolphin-wiki, .bear-wiki").hide();
    } else if (home === "forest") {
      $(".bear-wiki").show();
      $(".cat-wiki, .octo-wiki, .dog-wiki, .dolphin-wiki, .rac-wiki").hide();
    } else if (legs === "none") {
      $(".dolphin-wiki").show();
      $(".cat-wiki, .octo-wiki, .dog-wiki, .rac-wiki, .bear-wiki").hide();
    } else if (home === "house" && food === "everything") {
      $(".dog-wiki").show();
      $(".cat-wiki, .octo-wiki, .rac-wiki, .dolphin-wiki, .bear-wiki").hide();
    } else if (home === "trash") {
      $(".rac-wiki").show();
      $(".cat-wiki, .octo-wiki, .dog-wiki, .dolphin-wiki, .bear-wiki").hide();
    } else {
      $(".octo-wiki").show();
      $(".cat-wiki, .rac-wiki, .dog-wiki, .dolphin-wiki, .bear-wiki").hide();
    }
  });
});
