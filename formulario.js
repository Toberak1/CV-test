const btn = document.querySelector('[data-form-btn]');
btn.addEventListener('click', agregarEmail)

function agregarEmail ()  {
    const email = document.querySelector('#newsletter1');
    
    if (email.value != ''){
        alert('Se ha agregado '+email.value+' a la lista de novedades de los proyectos');  
    } else {
        alert('No has ingresado un mail, intentar de nuevo');
    }
    
    
}