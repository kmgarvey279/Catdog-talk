$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#cat").append("<li>Meow!</li>");
    $("ul#dog").append("<li>Bark!</li>");

    $("ul#cat").children("li").last().click(function() {
        $(this).remove();
    });
    $("ul#dog").children("li").last().click(function() {
        $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#cat").append("<li>Hiss!</li>");
    $("ul#dog").append("<li>Growl!</li>");

    $("ul#cat").children("li").last().click(function() {
        $(this).remove();
    });
    $("ul#dog").children("li").last().click(function() {
        $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#cat").append("<li>Purrrr...</li>");
    $("ul#dog").append("<li>Bow-wow.</li>");

    $("ul#cat").children("li").last().click(function() {
        $(this).remove();
    });
    $("ul#dog").children("li").last().click(function() {
        $(this).remove();
    });
  });
});
