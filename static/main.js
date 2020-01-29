var mob_nav = false;

$('#mobile_button').click(function(){
	if (mob_nav) {
		mob_nav = false;
		$('.dev_navbar').animate({
			'right' : '800px',
		},500);
	} else {

		$('.dev_navbar').animate({
			'right' : 0,
		},500);
		mob_nav = true;
	}
})
$('.dev_navbar button').mouseenter(function(){

	$(this).find('i').hide();
	$(this).find('span').show();

	$(this).find('i').animate({
		'opacity' : 0,
	},300);
	$(this).find('span').animate({
		'opacity' : 1,
	},300);
}).mouseleave(function(){
	$(this).find('i').show();
	$(this).find('span').hide();
	$(this).find('i').animate({
			'opacity' : 1,
	},300);
	$(this).find('span').animate({
		'opacity' : 0,
	},300);
})


$(document).on('mouseenter', '.anim_letter',function(){
	var data = $(this);
	$(this).addClass('animated jello')
	setTimeout(function(){
		$(data).removeClass('animated jello')
	},500)
})




function animateText(num) {
	var elem = $('.anim_letter').eq(num);
	$('.anim_letter').eq(num).addClass('animated bounceIn');

	setTimeout(function(){

		if (num == 6) {
			$('.img_logo').addClass('animated rotateIn');
			$('.img_logo').css('opacity' , 1);
		}
		if (num <= 30) {
			elem.css('opacity', 1);
			num++;	
			return animateText(num);
		} else {
			$('.anim_letter').removeClass('animated bounceIn');
		}
	},100)
}

getUrl();



function getUrl(){
	$('.dev_navbar button').css('color' , '#545353');
	var windowname = window.location.pathname;

	if (windowname == '/home' || windowname == '/') {
		$('#dev_container').load('home.html',function(){
			
			setTimeout(function(){
				$('#joemar_j').animate({
					'opacity' : 1,
				},3000);
			},3500)

			$('#home_nav').css('color' , '#08fdd8' );
			animateText(0);
		})
	} else if(windowname == '/about'){
		$('#dev_container').load('about.html',function(){
			$('#about_dev').css('color' , '#08fdd8' );
			animateText(0);
		})
	} else if(windowname == '/skills'){
		$('#dev_container').load('skills.html',function(){
			$('#skills_dev').css('color' , '#08fdd8' );
			animateText(0);
		})
	} else if(windowname == '/work'){
		$('#dev_container').load('work.html',function(){
			$('#work_dev').css('color' , '#08fdd8' );
			animateText(0);
		})
	} else if(windowname == '/contact'){
		$('#dev_container').load('contact.html',function(){
			$('#contact_dev').css('color' , '#08fdd8' );
			animateText(0);
		})
	}

}



$('#home_nav').click(function(){


	$('#dev_container').css({
		'transform' : 'scale(0.8)',
		'transition' : 'transform 0.5s',
	});

	$('#loading_pop').animate({
		'left' : '0px',
	},800)

	setTimeout(function(){

		history.pushState({}, null, '/home');
		$('#home_nav').css('color' , '#08fdd8' );
		getUrl();
		

		
			$('#loading_pop').animate({
				'left' : '-10000px',
			},500)

			$('#dev_container').css({
				'transform' : 'scale(1)',
				'transition' : 'transform 0.5s',
			});
		



	},1800)



})


$('#about_dev').click(function(){


	$('#dev_container').css({
		'transform' : 'scale(0.8)',
		'transition' : 'transform 0.5s',
	});

	$('#loading_pop').animate({
		'left' : '0px',
	},800)

	setTimeout(function(){

		history.pushState({}, null, '/about');
		$('#about_dev').css('color' , '#08fdd8' );
		getUrl();
		

		
			$('#loading_pop').animate({
				'left' : '-10000px',
			},500)

			$('#dev_container').css({
				'transform' : 'scale(1)',
				'transition' : 'transform 0.5s',
			});
		



	},1800)

})

$('#skills_dev').click(function(){

	$('#dev_container').css({
		'transform' : 'scale(0.8)',
		'transition' : 'transform 0.5s',
	});

	$('#loading_pop').animate({
		'left' : '0px',
	},800)

	setTimeout(function(){

		history.pushState({}, null, '/skills');
		$('#skills_dev').css('color' , '#08fdd8' );
		getUrl();
		

		
			$('#loading_pop').animate({
				'left' : '-10000px',
			},500)

			$('#dev_container').css({
				'transform' : 'scale(1)',
				'transition' : 'transform 0.5s',
			});
		



	},1800)
})

$('#work_dev').click(function(){

	$('#dev_container').css({
		'transform' : 'scale(0.8)',
		'transition' : 'transform 0.5s',
	});

	$('#loading_pop').animate({
		'left' : '0px',
	},800)

	setTimeout(function(){

		history.pushState({}, null, '/work');
		$('#work_dev').css('color' , '#08fdd8' );
		getUrl();
		

		
			$('#loading_pop').animate({
				'left' : '-10000px',
			},500)

			$('#dev_container').css({
				'transform' : 'scale(1)',
				'transition' : 'transform 0.5s',
			});



	},1800)
})




$('#contact_dev').click(function(){

	$('#dev_container').css({
		'transform' : 'scale(0.8)',
		'transition' : 'transform 0.5s',
	});

	$('#loading_pop').animate({
		'left' : '0px',
	},800)

	setTimeout(function(){

		history.pushState({}, null, '/contact');
		$('#contact_dev').css('color' , '#08fdd8' );
		getUrl();
		

		
			$('#loading_pop').animate({
				'left' : '-10000px',
			},500)

			$('#dev_container').css({
				'transform' : 'scale(1)',
				'transition' : 'transform 0.5s',
			});



	},1800)
})

$(document).on('focus' , '.dev_input input , .dev_input textarea', function(){
	$(this).next().animate({
		'left' : '0',
	},400)	
})

$(document).on('focusout' , '.dev_input input , .dev_input textarea', function(){
	$(this).next().animate({
		'left' : '-800px',
	},400)	
})

