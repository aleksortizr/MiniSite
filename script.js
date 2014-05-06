
	$(document).ready(function() {
			$("#limpiar").click(function(){
				   localStorage.removeItem('listado');
			 });
			   
			 $("#lista").blur(function(){
					 localStorage.setItem('listado',$("#lista").html());
			  });
			if (localStorage.getItem('listado')){
					$("#mensaje").text("Desde el LocalStorage");
					$("#lista").html(localStorage.getItem('listado'));
				}else{
					$("#mensaje").text("Sin datos en  el LocalStorage");
				}
				
			$("#addContact").click(function(){
				   localStorage.setItem('listado');
			 });
			});   
