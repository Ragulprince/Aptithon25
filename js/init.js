//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "7 March 2025 10:00:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 