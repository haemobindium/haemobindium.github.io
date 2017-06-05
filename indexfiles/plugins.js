$(document).ready(function() {

  
  $('.barres li').each(function() {
  	var pourcentage = $(this).attr('data-skills');
  	$(this).append($("<span></span>").animate({
  		width : ''+ pourcentage +'%' }, 2000));	
  });
  
  
  
  
  var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;
  $('.toContactform').click(function () {
  	$('.contactform').slideDown('slow');
  	$(documentBody).animate({scrollTop: $('.contactform').offset().top}, 1000);
  });
  
  
  
	$('form[name=contact]').validate({ 
  	submitHandler: function(form) {
		  	nom = $('form[name=contact]').find("input[name=nom]").val();
		  	email = $('form[name=contact]').find("input[name=email]").val();
		  	message = $('form[name=contact]').find("textarea[name=message]").val();
		  	
		  	$.post("envoi.php", { nom: nom, mail:email, message:message },
		  	   function(data) {
		  	     if(data != "ok") {
		  	     	$("input[name=envoi]").attr('disabled', 'disabled');
		  			$('input[name=envoi]').fadeOut(500,function() {
		  				$(".messageform").addClass("envoi-valid");
		  				$(".messageform").append(data);
		  				$('.messageform').fadeIn(500);  			
		  			});
		  		 } else {
		  			 $(".messageform").addClass("envoi-error");
		  			 $(".messageform").append(data);
		  		 }
		  	}); 
	  	return false;
	  } 
  }); 
  
  
}); 
