function Siguiente(no_ventana, step){		   
	var vent_ = no_ventana.substring(0,8);
	var num = no_ventana.substring(no_ventana.length - 1);
	num = parseInt(num) + step ;
   	//$(no_ventana).toggle("slow");
   	$(no_ventana).hide();
	vent_+=num; 
  	//console.log(num+ "   - > " +vent_);
	$(vent_).toggle("slow");	
	$(vent_).css({'display': 'block'});
	//$(no_ventana).css({'display': 'none'});      
}

$(document).ready(function(){
	$("#next").click(function () {            	
       	setTimeout(Siguiente("#ventana1",1),800);
     });
     $("#back").click(function () {
        setTimeout(Siguiente("#ventana2",-1),800);            	
     });        	
     $("#next2").click(function () {            	
      	setTimeout(Siguiente("#ventana2",1),800);
     });
     $("#back2").click(function () {
     	setTimeout(Siguiente("#ventana3",-1),800);            	
     });
 });

