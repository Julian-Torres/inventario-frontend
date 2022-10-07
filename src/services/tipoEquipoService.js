import {axiosInstance} from'../helpers/axios-config';

//http://localhost:4000/tipo-equipo

const getTiposEquipo =()=>{
    return axiosInstance.get('tipo-equipo', {
      headers: {
        'Content-type': 'application/json'
      }
    });
}

const crearTipoEquipo =(data)=>{
    return axiosInstance.post('tipo-equipo',data,{
        headers: {
            'Content-type': 'application/json'
          }
    });
}
const editTipoEquipo =(tipoEquipoId,data)=>{
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`,data,{
      headers: {
        'Content-type': 'application/json'
      }
    });
}

const getTipoEquipoPorId =(tipoEquipoId)=>{
  return axiosInstance.get(`tipo-equipo/${tipoEquipoId}`, {
    headers: {
      'Content-type': 'application/json'
    }
  });
}

export{
    getTiposEquipo, crearTipoEquipo,editTipoEquipo,getTipoEquipoPorId
}