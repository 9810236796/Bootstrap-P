$(document).ready(function(){
	$("body").scrollspy({
		target: "#mainNav",
		offset: 40
	});

	//FOR THE MENU LINKS//

	$("#mainNav a").click(function(event){
		if(this.hash !==""){
			event.preventDefault();

			var hash = this.hash;

			$("html,body").animate({
				scrollTop: $(hash).offset().top
			},900,function(){

				window.location.hash = hash;
			});
		}
	});


	//FOR BUTTON THAT TAKES USER TO TOP
		$("#top").click(function(){
			$("html,body").animate({scrollTop:0},2000);
		});

		$("#showmodal").click(function(){
			$("#loginmodal").modal("show");
		});

		$("#hidemodal").click(function(){
			$("#loginmodal").modal("hide");
		});

		//FOR STICKY HEADER
		$(window).scroll(function(){
			if($(this).scrollTop()>150 ){
				$(".nav").addClass("sticky");
			}else{
				$(".nav").removeClass("sticky");
			}
		});

});