

 $(document).ready(function() {
    $( '[data-toggle="buttons"]' ).button('toggle');
    $('#myCarousel').carousel({ interval: 500 });
    $('#carouselButton').on('click',function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')){
           $('#myCarousel').carousel('pause');
           $('#carouselButton').children('span').removeClass('fa-pause');
           $('#carouselButton').children('span').addClass('fa-play')
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
           $('#myCarousel').carousel('cycle');
           $('#carouselButton').children('span').removeClass('fa-play');
           $('#carouselButton').children('span').addClass('fa-pause')
        }
    });
   $('#reserveModalBtn').on('click', () => {
       $('#reserveModal').modal('toggle');
   });
   $('#loginBtn').on('click', () => {
       $('#loginModal').modal('toggle');
   });
    
});