import React, { useEffect, useState } from "react";
import {getEstadosEquipo} from '../../services/estadoEquipoService';
import {EstadoEquipoCard} from './EstadoEquipoCard'; 
import { EstadoEquipoNew } from "./EstadoEquipoNew.js";
import Swal from 'sweetalert2';

export const EstadoEquipoView = () => {

  const[estadosEquipo,setEstadosEquipo]=useState([]);
  const[openModal,setOpenModal]=useState(false);

  const listarEstadosEquipo=async()=>{
    try {
      Swal.fire({
        allowOutsideClick:false,
        text: 'CARGANDO.'
      }); 
      const {data} = await getEstadosEquipo();
      console.log(data);
      setEstadosEquipo(data);
      Swal.close();
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(()=>{
    listarEstadosEquipo();
  },[]);

  const handleOpenModal=()=>{
    setOpenModal(!openModal)
  }

  return ( 
    <div className="container-fluid">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        { 
          estadosEquipo.map((estadoEquipo)=>{
            return <EstadoEquipoCard key={estadoEquipo._id} estadoEquipo={estadoEquipo}/>
          })
        }
      </div>

      {
        openModal ? <EstadoEquipoNew 
                    handleOpenModal={handleOpenModal}
                    listarEstadosEquipo={listarEstadosEquipo}/>
      : (<button className="btn btn-primary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
         </button>)
}
    </div>
  )
}

