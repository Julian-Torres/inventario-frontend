import {axiosInstance} from'../helpers/axios-config';

//http://localhost:4000/estado-equipo

const getEstadosEquipo =()=>{
    return axiosInstance.get('estado-equipo', {
      headers: {
        'Content-type': 'application/json'
      }
    });
}

const crearEstadoEquipo =(data)=>{
    return axiosInstance.post('estado-equipo',data,{
        headers: {
            'Content-type': 'application/json'
          }
    });
}
const editEstadoEquipo =(EstadoEquipoId,data)=>{
    return axiosInstance.put(`estado-equipo/${EstadoEquipoId}`,data,{
      headers: {
        'Content-type': 'application/json'
      }
    });
}

export{
    getEstadosEquipo, crearEstadoEquipo,editEstadoEquipo
}