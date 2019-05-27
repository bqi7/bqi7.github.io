$(document).ready(function() {
	AOS.init();
    // fade in/out effect for occupation texts
    function runSequence(i) {  
//        $("#display").stop(true, true);      
        if (words.length > i) {
            setTimeout(function() {
                setTimeout('$("#occupations").stop(true,true).fadeOut()', 2000);
                // document.getElementById("occupations").innerHTML = words[i];
                $("#occupations").text(words[i]).stop(true,true).fadeIn(500);
//                $("#occupations").stop(true,true).fadeIn();
                runSequence(++i);
            }, 2380); 

        } else if (words.length == i) { 
            runSequence(0);
        }
    }
    var words = ['Computer Science Mentor', 'Software Engineer', 'Computer Science/Data Science Major', 'Artist', 'American Kiwi', 'UC Berkeley Student'];   
    setTimeout('$("#occupations").fadeOut()', 2000);
    runSequence(0);

    // change topbar after scrolling
    $(function () {
        $(document).scroll(function() {
          var bar = $("#topbar");
          bar.toggleClass('scrolled', ($(this).scrollTop() > 0.78*screen.height));
        });
    });
	
	
});