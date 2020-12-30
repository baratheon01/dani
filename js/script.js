$(window).on('scroll', function(){
  
    var wScroll = $(this).scrollTop();
    
    if (wScroll > $('#sobremi2').offset().top - ($(window).height() / 10.2)) {
      $('.html').addClass('htmlskill');
      $('.php').addClass('phpskill');
      $('.js').addClass('jsskill');
      $('.css').addClass('cssskill');
    } else {
      $('.html').removeClass('htmlskill');
      $('.php').removeClass('phpskill');
      $('.js').removeClass('jsskill');
      $('.css').removeClass('cssskill');
    }
    
  });


  var dropdown = document.querySelector("nav .dropdown");
     var button = document.querySelector("nav .menu");

     function menu(){
         if(dropdown.style.display === "none"){

             dropdown.style.display = "block";
             }
             else{
                 dropdown.style.display = "none";
             }
         
     }