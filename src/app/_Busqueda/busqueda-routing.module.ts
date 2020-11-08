import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BusquedaListComponent } from "./busqueda-list.component";
import { DetalleComponent } from "./detalle/detalle.component";

const routes: Routes = [
    { path: "", component: BusquedaListComponent },
    { path: "detalle", component: DetalleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BusquedaRoutingModule { }
