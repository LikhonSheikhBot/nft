$(function() {

	$(".animation_1").animated("fadeIn", "fadeOutDown");

	//скролл на айди
   $('.mnu  a').on('click', function(event){
		event.preventDefault();
		var hr = $(this).attr('href');
		$('body, html').animate({scrollTop : $(hr).offset().top - 80} ,1000);

		//закрыть меню на моб при клике
		var ww = $(window).width();
		if(ww < 991){
			$(".sandwich").removeClass("active");
			$('.mnu').hide();
		}

	})

	 $(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$(this).toggleClass("active");
		$('.mnu').toggle();
	});

   $(window).on('scroll', function(){
		var sc = $(this).scrollTop();
		if(sc > 0){
			$('.header').addClass('fixed')
		}else{
			$('.header').removeClass('fixed')
		}
	})

	//параллакс по движению мыши
	let bg1 = document.querySelector('.ab-text-bx .img');
	let bg2 = document.querySelector('.ico-block1 .img');
	let bg3 = document.querySelector('.ico-block2 .img');
	let bg4 = document.querySelector('.deflationary-box .tt-wr .img');
	let bg5 = document.querySelector('.charity-box .text .img');
	let bg6 = document.querySelector('.backed-box .text .img');
	let bg7 = document.querySelector('.top-box .text .t1');

		window.addEventListener('mousemove', function(e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;  
		bg1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg2.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg3.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg4.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg5.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg6.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg7.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';

	});


});