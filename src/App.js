import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
    return<Router> 
        <Header/>
        <Switch>
            <Route exact path='/' component={InventarioView}/>
            <Route exact path='/usuarios' component={UsuarioView}/>
            <Route exact path='/marcas' component={MarcaView}/>
            <Route exact path='/estados' component={EstadoEquipoView}/>
            <Route exact path='/tipos' component={TipoEquipoView}/>
            <Route exact path='/inventarios/edit/:inventarioId' component={InventarioUpdate}/>
            <Route exact path='/marcas/edit/:marcaId' component={MarcaUpdate}/>
            <Route exact path='/usuarios/edit/:usuarioId' component={UsuarioUpdate}/>
            <Route exact path='/estado-equipo/edit/:estadoEquipoId' component={EstadoEquipoUpdate}/>
            <Route exact path='/tipo-equipo/edit/:tipoEquipoId' component={TipoEquipoUpdate}/>
            <Redirect to='/'/>
        </Switch>
    </Router>
}

export{
    App
}