document.getElementById('myButton').onclick = function(){menuOpener()}
            
function menuOpener(){
        if (!document.querySelector(".vertical").classList.contains("ativo")) {
                    document.querySelector(".vertical").classList.add("ativo");
        }
        else{
                    document.querySelector(".vertical").classList.remove("ativo");
        }
    }