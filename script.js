
          
function menuOpener(){
        if (!document.querySelector(".vertical").classList.contains("ativo")) {
            document.querySelector(".vertical").classList.add("ativo");
        }
        else{
            document.querySelector(".vertical").classList.remove("ativo");
        }
    }   

function atlogin(){
    let usuario = prompt("usuario:");
    if (usuario == "master"){
        let senha = prompt("senha:");
        if (senha == 'master'){
            alert("ok");
        }
        else{
            alert('esteje banido seu herege');
        }
        
    }
    else{
        alert("se retire herege");
    }

}
async function atividadeBanco(){
    const db = await open({
        filename: "./banco.db",
        driver: sqlite3.Database,
    });
    db.run('CREATE TABLE IF NOT EXISTS writers (id INTENGER PRIMARY KEY, usuario TEXT, senha TEXT)');
   

}


document.getElementById('myButton').onclick = function(){menuOpener()}
document.getElementById('add_atividade').onclick = function(){atlogin()}