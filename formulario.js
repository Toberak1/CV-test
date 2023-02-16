const btn = document.querySelector('#boton1');
const btn2 = document.querySelector('#boton2');
btn.addEventListener('click', agregarEmail);
btn2.addEventListener('click', agregarEmail2);

function agregarEmail()  {
    const email = document.querySelector('#newsletter1');
    console.log (email.value);
    if (email.value != ''){
        alert('Se ha agregado '+email.value+' a la lista de novedades de los proyectos');  
    } else {
        alert('No has ingresado un mail, intentar de nuevo');
    }
    
    
}

function agregarEmail2()  {
    const email = document.querySelector('#newsletter2');
    console.log (email.value);
    if (email.value != ''){
        alert('Se ha agregado '+email.value+' a la lista de novedades de los proyectos');  
    } else {
        alert('No has ingresado un mail, intentar de nuevo');
    }
    
    
}
