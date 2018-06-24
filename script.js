$(document).ready(function() {

	$('a').click(function(){
		var selected = $(this);
		$('a').removeClass('active');
		$(selected).addClass('active');
	});

	var $a 	      = $('.a'),
		$b 	      = $('.b'),
		$c 	      = $('.c'),
		$d 	      = $('.d'),
		$home     = $('.home'),
		$about    = $('.about'),
		$project = $('project'),
		$contact  = $('contact'); 

		$a.click(function(){
			$home.fadeIn();
			$about.fadeOut();
			$project.fadeOut();
			$contact.fadeOut();

		});

		$b.click(function(){
			$about.fadeIn();
			$home.fadeOut();
			$project.fadeOut();
			$contact.fadeOut();

		});

		$c.click(function(){
			$project.fadeIn();
			$home.fadeOut();
			$about.fadeOut();
			$contact.fadeOut();
		});

		$d.click(function(){
			$contact.fadeIn();
			$home.fadeOut();
			$about.fadeOut();
			$project.fadeOut();
		});

});