import React from 'react';
import {Link} from'react-router-dom';

export const UsuarioCard = (props) => {
 
 const{usuario}=props;

  return (
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Caracteristicas</h5>
                <hr/>
                <p className="card-text">{`Nombre: ${usuario.nombre}`}</p>
                <p className="card-text">{`Estado: ${usuario.estado}`}</p>
                <p className="card-text">
                  <Link to={`/usuarios/edit/${usuario._id}`}>Editar.</Link>
                </p>
            </div>
        </div> 
    </div>
  )
}