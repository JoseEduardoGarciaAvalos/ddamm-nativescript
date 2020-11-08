import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BusquedaListComponent } from "./busqueda-list.component";

const routes: Routes = [
    { path: "", component: BusquedaListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BusquedaRoutingModule { }
