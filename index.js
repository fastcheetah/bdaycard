// $(function open(){

//     if (!$('.envelope').hasClass('open')){
//       $('.envelope').click(function(){
//         $(this).removeClass('new').addClass('open');
//       });
//     }
    
//   });
//   open();
$(document).ready(function() {
    $('.envelope').on('click', function() {
      if (!$(this).hasClass('open')) {
        $(this).removeClass('new').addClass('open');
      }
    });
  });
  
  