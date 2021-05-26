$(function() {

	// for mobile menu

	$('.navi-hamburger').click(function (event) {
		$('.nav-mobile').toggleClass('open');
		$(this).toggleClass('open');
		$('.admittance-desk').slideToggle('slow');
		event.stopPropagation();
		if($('.nav-mobile').hasClass('open')) {
			$('html').css('overflow','hidden');
			// $('#main-header').addClass('resize');
		}else {
			// $('#main-header').removeClass('resize');
			$('html').css('overflow', 'auto');
		}
	});

	// constructor for mobile menu
	$(function() {
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.link');

			var subLinks = this.el.find('.sub-link');

			subLinks.on('click', {el: this.el, multiple: this.multiple}, this.subDropdown);
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		};

		Accordion.prototype.subDropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
					$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.sub-submenu').not($next).slideUp().parent().removeClass('open');
			}
		};

		// Accordion.prototype.dropdown = function(e) {
		// 	var $el = e.data.el;
		// 	$this = $(this),
		// 			$next = $this.next();
		//
		// 	$next.slideToggle();
		// 	$this.parent().toggleClass('open');
		//
		// 	console.log($this.parent());
		//
		// 	if ( !$this.parent().hasClass('open') ) {
		// 		console.log('first-item-menu has class open');
		// 		$('.sub-submenu').slideUp();
		// 	}
		//
		// 	if (!e.data.multiple) {
		// 		$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		// 	};
		// };

		var accordion = new Accordion($('#collapse'), false);
	});

	// End for mobile menu

});

$(document).ready(function () {

	$('.feedback-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '0',
		nextArrow: document.getElementById('slick-next'),
		prevArrow: document.getElementById('slick-prev'),
	});


	// for round banner

	var bannerBlock = $('.banner__block');
	var bannerBlockHeight = bannerBlock.outerHeight();

	bannerBlock.css('top', -bannerBlockHeight / 2 + 'px')

	// end round banner

})