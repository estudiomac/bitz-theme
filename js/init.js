$(document).ready(function() {
	
	// Sticky Sidebar
	$('.mainbar, .sticky').theiaStickySidebar({
	additionalMarginTop: 30
	});
	
	// Scroll Up
	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn(500);
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    
    	// Header search
	$('#trigger-header-search').click(function () {
		$('.header-search').toggleClass('header-search-active');
	});


// Mega menu (with tabs)
	$(window).load(function(){
		$('.megamenu-tabs').each(function(){
			$( '.menu-item', this ).wrapAll( '<ul class="tabs-nav" />');
			$( '.tab-content', this ).wrapAll( '<ul class="tabs-content-wrapper" />');
			$( '.tabs-nav, .tabs-content-wrapper', this ).wrapAll( '<li class="submenu-content" />');
			$('ul.sub-menu', this).show();
			
			$('.tab-content:not(:first-child)', this).addClass('tab-hidden');
			$('.tabs-nav li:first-child', this).addClass('nav-active');
			$('.tabs-nav li', this).hover(function() {
				var tabId = $(this).attr('id');
				$(this).closest('.tabs-nav').find('li').removeClass('nav-active');
				$(this).addClass('nav-active');
				$(this).closest('.submenu-content').find('li.tab-content').addClass('tab-hidden');
				$(this).closest('.submenu-content').find('li.'+tabId).removeClass('tab-hidden');
			}); 
			
			var highestTab = $('.tabs-content-wrapper', this).outerHeight(); 
			$('.tabs-nav', this).css( 'min-height', highestTab-40 );
			
		}); 	
	});
	
	// Secondary menu
	$('.secondary-menu-toggle').click(function () {
		var marginTop = $(document).scrollTop();
		$('#secondary-navigation-wrapper').show();
		$('#secondary-navigation-inner').css({ 'margin-top' : marginTop + 'px' });
	});	
	
	$('.secondary-navigation-close').click(function () {
		$('#secondary-navigation-wrapper').hide();
	});
	
	// Hide secondary nav when scrolled		
	$(window).scroll(function () {
		var scrolled = $(this).scrollTop(),
			navInner = $('#secondary-navigation-inner');
		
		if(navInner.length){
			var navTop = $('#secondary-navigation-inner').offset().top,
			navHeight = $('#secondary-navigation-inner').outerHeight();
		
		
			if( scrolled > navTop + navHeight / 2 ){
				$('#secondary-navigation-wrapper').fadeOut(800);
			} else if ( scrolled < navTop - navHeight / 2){
				$('#secondary-navigation-wrapper').fadeOut(800);
			}	
		}
	});	
	
	
});	

$('#mobile-site-navigation').mmenu({
	extensions 		: [ "theme-white", "pagedim-black" ],
	offCanvas: {
		position: 'right',
		zposition: 'front'
   },
	 navbars: {
		 height: 3
	 }
});

var $menu = $("nav#mobile-site-navigation"), $html = $("html, body");
    $menu.mmenu({
        classes: "mm-slide"
    });
    $menu.find("li > a").on("click", function() {
        var e = $(this).attr("href");
        if (e.slice(0, 1) == "#") {
            $menu.one("closed.mm", function() {
                setTimeout(function() {
                    $html.animate({
                        scrollTop: $(e).offset().top
                    })
                }, 10)
            })
        }
    }) 
    		

// Google Fonts
WebFontConfig = {
    google: { families: [ 'Lato:400,300,700:latin', 'Roboto:400,300,500:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
});

