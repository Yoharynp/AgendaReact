import Axios from 'axios'

const todo = async () => {
    const peticion = Axios.get('http://www.raydelto.org/agenda.php')
    console.log(peticion)
}


export{
    todo
}