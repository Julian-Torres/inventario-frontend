import React from 'react';
import {NavLink} from'react-router-dom';

export const EstadoEquipoCard = (props) => {
 
 const{estadoEquipo}=props;

  return (
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Caracteristicas</h5>
                <hr/>
                <p className="card-text">{`Nombre: ${estadoEquipo.nombre}`}</p>
                <p className="card-text">{`Estado: ${estadoEquipo.estado}`}</p>
                <p className="card-text">
                  <NavLink to={`/estado-equipo/edit/${estadoEquipo._id}`}>Editar.</NavLink>
                </p>
            </div>
        </div> 
    </div>
  )
}