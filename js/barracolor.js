
$(document).ready(function(){
	estado=0;
	$(".barcolor").click(function(){
		if (estado == 0) {
			$('.barcolor').animate({'margin-left':'0px'}, 'slow', function(){
				$('#colores').slideDown('slow');
			});
			estado = 1;
		}
		else {
			$('#colores').slideUp('slow', function(){
				$('.barcolor').animate({'margin-left:':'-270px'}, 'slow');
			});
			estado = 0;
		}
	});
});
