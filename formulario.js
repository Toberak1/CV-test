const btn = document.querySelector('#boton1');
btn.addEventListener('click', agregarEmail)

const btn2 = document.querySelector('#boton2');
btn2.addEventListener('click', agregarEmail)

function agregarEmail ()  {
    const email = document.querySelector('#newsletter1');
    
    if (email.value != ''){
        alert('Se ha agregado '+email.value+' a la lista de novedades de los proyectos');  
    } else {
        alert('No has ingresado un mail, intentar de nuevo');
    }
    
    
}