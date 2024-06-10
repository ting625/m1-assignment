$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        var index = $('.lightbox-toggle img').index(this);
        console.log(index);

        console.log("Clicked");

        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
            console.log("image removed");
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');
        console.log($altvalue);

        if ($altvalue=="Dog") {
            var img = $('#photo:nth-child(' + (index+1) +') img').clone(); //Duplicate DOM element
            console.log(img);
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});