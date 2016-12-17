$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$(document).ready(function(){
	$('body').on('mousemove',function(e){
    	e.stopPropagation();
    	var width = $(this).outerWidth();
    	var height = $(this).outerHeight();
    	var x = e.pageX;
   		var y = e.pageY;
    	var xPercent = x / width;
    	var yPercent = y / height;

    	var walk = 9;
    	var xWalk = Math.round(xPercent * walk - (walk / 3));
    	var yWalk = Math.round(yPercent * walk - (walk / 3));

    	$('h1').css({
      		'text-shadow' : xWalk + 'px '+yWalk+'px 0px rgba(237, 77, 110, 0.8)'
    	});
	});
});

var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('#fading')
;
