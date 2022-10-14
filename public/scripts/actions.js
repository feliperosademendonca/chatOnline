

function salas(){
 
    if ( $('#salasMenu').css("display") === "none"){
        $('#salasMenu').css("display","block");
        
	}else{ 
        $('#salasMenu').css("display","none");
 
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

        var display = document.getElementById('perfil').style.display;
        
        if(display == "none"){
                document.getElementById('perfil').style.display = 'block';

        }else{
                document.getElementById('perfil').style.display = 'none';
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




