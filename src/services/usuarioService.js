import {axiosInstance} from'../helpers/axios-config';

//http://localhost:4000/usuario/

const getUsuarios =()=>{
    return axiosInstance.get('usuario', {
      headers: {
        'Content-type': 'application/json'
      }
    });
}

const crearUsuario =(data)=>{
    return axiosInstance.post('usuario',data,{
        headers: {
            'Content-type': 'application/json'
          }
    });
}
const editUsuario =(usuarioId,data)=>{
    return axiosInstance.put(`usuario/${usuarioId}`,data,{
      headers: {
        'Content-type': 'application/json'
      }
    });
}

export{
    getUsuarios, crearUsuario,editUsuario
}