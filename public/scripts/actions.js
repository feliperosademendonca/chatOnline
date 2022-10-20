

function salas(){
    if ( $('#salasMenu').css("margin-left") =="-248px"){
        $('#salasMenu').css("display","block");
        $('#salasMenu').css("margin-left","0px")
       

	}else{ 
         $('#salasMenu').css("margin-left","-248px")

	}
	
}

function menu(){
         
        if ( $('.icon').css("display") === "none"){
            $('.icon').css("display","inline");
            
            }else{ 
            $('.icon').css("display","none");
     
            }
            
    }

function fechaPopUp() {  

        var display = document.getElementById('popUp').style.display;

        if(display == "none"){
                document.getElementById('popUp').style.display = 'block';

        }else{
                document.getElementById('popUp').style.display = 'none';
        }
}

function perfil() {  

        var display = document.getElementById('perfilPupUp').style.display;
        
        if(display == "none"){
                document.getElementById('perfilPupUp').style.display = 'block';

        }else{
                document.getElementById('perfilPupUp').style.display = 'none';
        }
}

function config(){  
      
        var display = document.getElementById('config').style.display;
        
        if(display == "none"){
                document.getElementById('config').style.display = 'block';

        }else{
                document.getElementById('config').style.display = 'none';
        }
}




