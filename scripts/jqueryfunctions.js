$(document).ready(function () {
  
  $("#toggleshop1").click(function () {
    $("#shopsection").hide();
    $("#upgradesection").show();
    $("#prestigesection").hide();
  });

  $("#toggleshop2").click(function () {
    $("#shopsection").hide();
    $("#upgradesection").hide();
    $("#prestigesection").show();
  });

  $("#toggleshop3").click(function () {
    $("#shopsection").show();
    $("#upgradesection").hide();
    $("#prestigesection").hide();
  });

  $(document).keydown(function (e) {
    if (e.which == 32) {
      return false;
    }
  });

  $("h4").hide();
});

$(document).keydown(function(e){ 
    if(e.which === 123){ 
 
       return false; 
 
    } 
 
}); 
$(document).keydown(function(e){ 
    if(e.which === 17){ 
 
       return false; 
 
    } 
 
}); 