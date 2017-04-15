$(document).ready(function() { 
	var p = $('p.more1'); 
	p.hide(); 

	$('#about').click(function() { 
		p.toggle('slow'); 
	}); 

});

$(document).ready(function() { 
	var p = $('p.more2'); 
	p.hide(); 

	$('#writer').click(function() { 
		p.slideToggle('slow'); 
	}); 

});


$(document).ready(function() { 
	var p = $('div.more3'); 
	p.hide(); 

	$('#movie').click(function() { 
		p.slideToggle('slow'); 
	}); 

});

$(document).ready(function(){
  $("#m1").click(function(){
    $("#m11").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#m2").click(function(){
    $("#m22").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#m3").click(function(){
    $("#m33").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#m4").click(function(){
    $("#m44").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#Character").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(2000);
    $("#div4").fadeToggle(2200);
    $("#div5").fadeToggle(2400);
  });
});


