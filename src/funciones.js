import axios from 'axios'
import Axios from 'axios'
import { Button } from "@material-ui/core";

const tabla = document.querySelector('#lista-usuarios tbody');
function Cargar() {
    
   
    fetch('http://www.raydelto.org/agenda.php')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.telefono}</td>
                    
                `;
                tabla.appendChild(row)
                
  
            });
            
        })
        .catch(error => console.log('Hubo un error : ' + error.message))
        
  }
                <Button variant="contained" color="secondary" onClick={Cargar()}>
                  jejejej
                </Button>
               

  let contacto = {nombre: 'Carvajal', apellido: 'Ramirez', telefono: '555-666-7777'};
fetch("http://www.raydelto.org/agenda.php", 
{
 method:'POST', 
 body:JSON.stringify(contacto)}
).then( res => res.json()).then(
 (res) => 
{
 console.log(res);
}
)
  
  export default Cargar()
    
  

  