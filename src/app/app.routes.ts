import { Routes } from '@angular/router';
import { Inventario } from './inventario/inventario';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Login } from './login/login';
import { SolicitudProductos } from './solicitud-productos/solicitud-productos';
import { MiCuenta } from './mi-cuenta/mi-cuenta';
import { InventarioRestrin } from './inventario-restrin/inventario-restrin';
import { matchGuard } from './guards/match-guard';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'nosotros', component: Nosotros },
    { path: 'login', component: Login },

    { path: 'inventario', component: InventarioRestrin, canMatch:[matchGuard] },
    { path: 'inventario', component: Inventario },

    { path: 'solicitud-productos', component: SolicitudProductos },
    { path: 'mi-cuenta', component: MiCuenta },
    { path: '**', component: Home },
];
