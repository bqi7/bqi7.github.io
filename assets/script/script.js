$(document).ready(function() {
    // fade in/out effect for occupation texts
    function runSequence(i) {  
//        $("#display").stop(true, true);      
        if (words.length > i) {
            setTimeout(function() {
                setTimeout('$("#occupations").fadeOut()', 1600);
                // document.getElementById("occupations").innerHTML = words[i];
                $("#occupations").text(words[i]);
                $("#occupations").fadeIn(400);
                runSequence(++i);
            }, 2000); 

        } else if (words.length == i) { 
            runSequence(0);
        }
    }
    var words = ['Computer Science Mentor', 'Software Engineer', 'Artist', 'American Kiwi', 'UC Berkeley Student'];   
    setTimeout('$("#occupations").fadeOut()', 1600);
    runSequence(0);

    // change topbar after scrolling
    $(function () {
        $(document).scroll(function() {
          var bar = $("#topbar");
          bar.toggleClass('scrolled', ($(this).scrollTop() > 0.8*screen.height));
        });
    });
});