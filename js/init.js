//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "18 March 2025 16:00:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 