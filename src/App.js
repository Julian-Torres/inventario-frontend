import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Header} from './components/ui/header';
import {EstadoEquipoView} from'./components/estados/EstadoEquipoView';
import {InventarioView} from'./components/inventarios/InventarioView';
import {MarcaView} from'./components/marcas/MarcaView';
import {TipoEquipoView} from'./components/tipos/TipoEquipoView';
import { UsuarioView } from './components/usuarios/UsuarioView';
import { InventarioUpdate } from "./components/inventarios/InventarioUpdate";
import { MarcaUpdate } from "./components/marcas/MarcaUpdate";
import { UsuarioUpdate } from "./components/usuarios/UsuarioUpdate";
import { EstadoEquipoUpdate } from "./components/estados/EstadoEquipoUpdate";
import { TipoEquipoUpdate } from "./components/tipos/TipoEquipoUpdate";


const App = () => {
    return<BrowserRouter> 
        <Header/>
        <Routes>
            <Route path='/' element={<InventarioView/>}/>
            <Route path='/usuarios' element={<UsuarioView/>}/>
            <Route path='/marcas' element={<MarcaView/>}/>
            <Route path='/estados' element={<EstadoEquipoView/>}/>
            <Route path='/tipos' element={<TipoEquipoView/>}/>
            <Route path='/inventarios/edit/:inventarioId' element={<InventarioUpdate/>}/>
            <Route path='/marcas/edit/:marcaId' element={<MarcaUpdate/>}/>
            <Route path='/usuarios/edit/:usuarioId' element={<UsuarioUpdate/>}/>
            <Route path='/estado-equipo/edit/:estadoEquipoId' element={<EstadoEquipoUpdate/>}/>
            <Route path='/tipo-equipo/edit/:tipoEquipoId' element={<TipoEquipoUpdate/>}/>
            <Route path='/usuario/delete/:usuarioId' element={<UsuarioDelete/>}/>
            <Route path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    </BrowserRouter>
}

export{
    App
}