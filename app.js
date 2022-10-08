//envia mensagens
function enviar(){
    
    suaMsg= document.getElementById('caixaDeEnvio').value
    console.log('msg enviada: '+suaMsg)
    document.getElementById("suaMensagem").value='';
    atualizar(suaMsg)
 }

//receber e exibir mensagens de outros//

