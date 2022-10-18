import React from 'react';
import {NavLink} from'react-router-dom';

export const TipoEquipoCard = (props) => {
 
 const{tipoEquipo}=props;

  return (
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Caracteristicas</h5>
                <hr/>
                <p className="card-text">{`Nombre: ${tipoEquipo.nombre}`}</p>
                <p className="card-text">{`Estado: ${tipoEquipo.estado}`}</p>
                <p className="card-text">
                  <NavLink to={`/tipo-equipo/edit/${tipoEquipo._id}`}>Editar.</NavLink>
                </p>
            </div>
        </div> 
    </div>
  )
}