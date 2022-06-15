/* ======= Animate on scroll library ======= */ 
// Ref: https://github.com/michalsnik/aos/tree/v2 

AOS.init({
  // Global settings:
  disable: 'mobile' // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

});


$(document).ready(function() {
	
	/* ======= Fixed Header animation ======= */ 
        
    $(window).on('scroll', function() {
         
         if ($(window).scrollTop() > 80 ) {
             $('#header').addClass('header-shrink');
         }
         else {
             $('#header').removeClass('header-shrink');             
         }
    }); 
    
    /* ===== Smooth scrolling ====== */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
		
	});
    
	
	/* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("Dec 1, 2024").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown =  document.getElementById("countdown-box");
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Secs</span>'; 
     
    }, 1000);
    
    
    /* ======= Reviews Owl Carousel ======= */ 
    /* Ref: https://owlcarousel2.github.io/OwlCarousel2/ */
    
    $('.reviews-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:false,
	    stagePadding: 60,
	    autoplay:true,
	    autoplayTimeout:8000,
	    autoplayHoverPause:true,
	    nav:true,
	    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:2
	        },
	        992:{
	            items:3
	        },
	        1200: {
		        items:4
	        },

	    }
	});
    
    

});