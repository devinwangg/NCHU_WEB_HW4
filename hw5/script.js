$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });

});
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
});
$(document).ready(function() {
    $("ul.tabs a").click(function() {
        $(".pane div").hide();
        $($(this).attr("href")).show();
        $($($(this).attr("href")).children()).show();
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
})
$(document).ready(function(){
  $("#girl").click(function(){
  $(".Boy").fadeOut();
  $(".Girl").fadeIn();
  });
  $("#boy").click(function(){
  $(".Girl").fadeOut();
  $(".Boy").fadeIn();
  });
  $("#ALL").click(function(){
  $(".Girl").fadeIn();
  $(".Boy").fadeIn();
  });
  $("#Exc").click(function(){
  $(".Girl").fadeToggle();
  $(".Boy").fadeToggle();
  });
});

$(document).ready(function(){
  $(".Girl,.Boy,.cha").mo,useover(function() {
    $(this).fadeTo("fast",1);
  });
  $(".Girl,.Boy,.cha").mouseout(function() {
    $(this).fadeTo("fast",0.5);
  });
});
