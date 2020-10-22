$(document).ready(function () {
  $("form#critters").submit(function (event) {
    event.preventDefault();
    const home = parseInt($("input:radio[name=home]:checked").val());
    const food = parseInt($("input:radio[name=food]:checked").val());
    const legs = parseInt($("input:radio[name=legs]:checked").val());
    const humans = parseInt($("input:radio[name=humans]:checked").val());
    const result = home + food + legs + humans;

    if (result >= 2000) {
      $(".rac-wiki").show();
      $(".cat-wiki, .octo-wiki, .dog-wiki, .dolphin-wiki, .bear-wiki").hide();
    } else if (result >= 1000) {
      $(".dog-wiki").show();
      $(".cat-wiki, .octo-wiki, .bear-wiki, .dolphin-wiki, .rac-wiki").hide();
    } else if (result >= 750) {
      $(".bear-wiki").show();
      $(".cat-wiki, .octo-wiki, .dog-wiki, .rac-wiki, .dolphin-wiki").hide();
    } else if (result >= 300) {
      $(".octo-wiki").show();
      $(".cat-wiki, .dog-wiki, .rac-wiki, .dolphin-wiki, .bear-wiki").hide();
    } else if (result >= 250) {
      $(".dolphin-wiki").show();
      $(".cat-wiki, .octo-wiki, .dog-wiki, .rac-wiki, .bear-wiki").hide();
    } else {
      $(".cat-wiki").show();
      $(".octo-wiki, .rac-wiki, .dog-wiki, .dolphin-wiki, .bear-wiki").hide();
    }
  });
});
