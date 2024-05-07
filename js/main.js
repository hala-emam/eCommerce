
    
    $(document).ready(function(){
       /*-----For Search Bar-----------------------------*/
        $(".search").click(function(){
            $('.search-bar').addClass('search-bar-active');
        });
        
        $(".search-cancel").click(function(){
            $('.search-bar').removeClass('search-bar-active');
        });

       /*---For Login and Sign-up----------------------------*/
   
        $(".user,.already-account").click(function(){
            $('.form').addClass('login-active').removeClass('sign-up-active')
        });
        $(".sign-up-btn").click(function(){
            $('.form').addClass('sign-up-active').removeClass('login-active')
        });
        $(".form-cancel").click(function(){
            $('.form').removeClass('login-active').removeClass('sign-up-active')
        });
        
    });

     /*----Full Page Slider---------------*/
 
     $(document).ready(function() {
        $('#adaptive').lightSlider({
            adaptiveHeight:true,
            auto:true,
            item:1,
            slideMargin:0,
            loop:true
        });
    });
    /*--For-Product-SLider----------------*/
    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });  
      });


       /*--For-make-Menu-responsive------------*/
  $(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});

 /*--For-fix-Menu-when scroll ------------*/